/**
 * BACKSPACE.CO - Admin Authentication & Authorization
 * Stage 2: Secure Admin Authentication with Supabase
 *
 * Requirements:
 * - Credentials (email/password) are submitted directly to Supabase via TLS.
 * - Passwords are never logged, stored, or revealed.
 * - Row Level Security (RLS) protects public.admin_users (user can only read their own row).
 * - Multi-layer validation:
 *     1. Supabase Auth signs in user.
 *     2. Checks admin_users table for matching user id.
 *     3. If no row exists in admin_users, signs out immediately and blocks access.
 * - Route guards keep protected pages hidden until checks pass.
 */

(function(window) {
    'use strict';

    const AdminAuth = {
        /**
         * Resolves the active Supabase client instance.
         */
        getClient() {
            if (typeof window !== 'undefined' && window.supabaseClient) {
                return window.supabaseClient;
            }
            if (typeof window !== 'undefined' && window.supabase && typeof SUPABASE_URL !== 'undefined' && typeof SUPABASE_ANON_KEY !== 'undefined') {
                try {
                    window.supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
                    return window.supabaseClient;
                } catch (e) {
                    console.error('Failed to initialize Supabase client:', e);
                }
            }
            return null;
        },

        /**
         * Safely inspects current session without logging credentials.
         */
        async getSession() {
            const client = this.getClient();
            if (!client) {
                return { session: null, user: null, error: 'Supabase client not initialized' };
            }

            try {
                const { data, error } = await client.auth.getSession();
                if (error) throw error;
                return { session: data?.session || null, user: data?.session?.user || null, error: null };
            } catch (err) {
                return { session: null, user: null, error: err.message || 'Session lookup failed' };
            }
        },

        /**
         * Verifies whether an authenticated user is an authorized administrator
         * by querying the protected public.admin_users table in Supabase.
         * Row Level Security ensures users can only read their own row.
         */
        async verifyAdminAuthorization(userId) {
            const client = this.getClient();
            if (!client || !userId) {
                return { isAuthorized: false, adminRecord: null, error: 'Client or user ID missing' };
            }

            try {
                const { data, error } = await client
                    .from('admin_users')
                    .select('id, email, created_at')
                    .eq('id', userId)
                    .maybeSingle();

                if (error) {
                    console.error('Error verifying admin authorization:', error);
                    return { isAuthorized: false, adminRecord: null, error: error.message };
                }

                if (data && data.id === userId) {
                    return { isAuthorized: true, adminRecord: data, error: null };
                }

                // Authenticated user exists, but no row found in admin_users
                return { isAuthorized: false, adminRecord: null, error: 'User is not an authorized administrator' };
            } catch (err) {
                return { isAuthorized: false, adminRecord: null, error: err.message || 'Verification failed' };
            }
        },

        /**
         * Authenticates administrator using Supabase email + password,
         * then checks database authorization against public.admin_users table.
         * Shows generic friendly error ("Incorrect email or password") without revealing which field is wrong.
         * If not an admin in admin_users, immediately signs out and returns unauthorized error.
         */
        async signIn(email, password) {
            const client = this.getClient();
            if (!client) {
                return {
                    success: false,
                    error: 'Authentication service not available. Please try again later.'
                };
            }

            const cleanEmail = (email || '').trim().toLowerCase();
            const cleanPassword = password || '';

            if (!cleanEmail || !cleanPassword) {
                return {
                    success: false,
                    error: 'Incorrect email or password.'
                };
            }

            try {
                const { data, error } = await client.auth.signInWithPassword({
                    email: cleanEmail,
                    password: cleanPassword
                });

                if (error) {
                    if (error.status === 429) {
                        return {
                            success: false,
                            error: 'Too many attempts. Please wait a moment and try again.'
                        };
                    }
                    // Friendly generic message - never reveal which field was wrong
                    return {
                        success: false,
                        error: 'Incorrect email or password.'
                    };
                }

                if (!data?.session || !data?.user) {
                    return {
                        success: false,
                        error: 'Incorrect email or password.'
                    };
                }

                // Query admin_users for the user's own id
                const authCheck = await this.verifyAdminAuthorization(data.user.id);

                if (!authCheck.isAuthorized) {
                    // Sign the user out immediately
                    await client.auth.signOut();
                    return {
                        success: false,
                        error: 'You are not authorized to access the admin area.'
                    };
                }

                return {
                    success: true,
                    user: data.user,
                    session: data.session,
                    adminRecord: authCheck.adminRecord
                };
            } catch (err) {
                return {
                    success: false,
                    error: 'An unexpected error occurred during sign-in. Please try again.'
                };
            }
        },

        /**
         * Signs out the current user and redirects to login page.
         */
        async signOut(redirectUrl = 'login.html') {
            const client = this.getClient();
            if (client) {
                try {
                    await client.auth.signOut();
                } catch (err) {
                    console.error('Error during sign out:', err);
                }
            }
            if (redirectUrl) {
                window.location.href = redirectUrl;
            }
        },

        /**
         * Route guard for admin dashboard:
         * Runs session check and admin_users check on load.
         * If they fail, redirects to loginUrl (default: 'login.html').
         * If both pass, returns { session, user, adminRecord }.
         */
        async requireAdminAuth(loginUrl = 'login.html') {
            const { session, user, error } = await this.getSession();
            if (!session || !user) {
                window.location.replace(loginUrl);
                return null;
            }

            // Verify administrator authorization in public.admin_users
            const authCheck = await this.verifyAdminAuthorization(user.id);

            if (!authCheck.isAuthorized) {
                // Not authorized: purge session and redirect
                await this.signOut(null);
                window.location.replace(loginUrl + '?error=unauthorized');
                return null;
            }

            return {
                session,
                user,
                adminRecord: authCheck.adminRecord
            };
        },

        /**
         * Route guard for login page:
         * If user is already logged in as an admin, redirects them to dashboardUrl (default: 'index.html').
         * If logged in as non-admin, signs out to clear state.
         */
        async redirectIfAuthenticated(dashboardUrl = 'index.html') {
            const { session, user } = await this.getSession();
            if (session && user) {
                const authCheck = await this.verifyAdminAuthorization(user.id);
                if (authCheck.isAuthorized) {
                    window.location.replace(dashboardUrl);
                    return session;
                } else {
                    // Stale or unauthorized session: clear it
                    await this.signOut(null);
                    return null;
                }
            }
            return null;
        }
    };

    window.AdminAuth = AdminAuth;
})(window);

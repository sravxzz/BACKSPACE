/**
 * BACKSPACE.CO - Supabase Client Initialization
 * 
 * INSTRUCTIONS:
 * 1. Open your Supabase Dashboard: https://supabase.com/dashboard/project/vqkevzxzorpxrbxxvjcl
 * 2. Navigate to: Project Settings (gear icon) -> API
 * 3. Under "Project API keys", copy the value for "anon" / "public".
 * 4. Replace 'YOUR_SUPABASE_ANON_KEY_HERE' below with your copied anon key.
 * 
 * ⚠️ SECURITY WARNING:
 * NEVER insert your 'service_role' (secret) key here or anywhere in front-end code!
 * The anon key is designed to be public and works with Row Level Security (RLS).
 * The service_role key bypasses all RLS checks and must NEVER be exposed to the browser.
 */

// Supabase Project URL
const SUPABASE_URL = 'https://vqkevzxzorpxrbxxvjcl.supabase.co';

// >>> INSERT YOUR SUPABASE ANON / PUBLISHABLE KEY HERE <<<
const SUPABASE_ANON_KEY = 'YOUR_SUPABASE_ANON_KEY_HERE';

let supabaseClient = null;

// Initialize Supabase client if library is loaded and key is provided
if (typeof window.supabase === 'undefined') {
    console.warn('⚠️ Supabase library (@supabase/supabase-js) is not loaded. Verify script tag in index.html.');
} else if (!SUPABASE_ANON_KEY || SUPABASE_ANON_KEY === 'YOUR_SUPABASE_ANON_KEY_HERE') {
    console.info('ℹ️ Supabase client configuration ready. Please add your publishable (anon) key in js/supabase-client.js.');
} else {
    try {
        supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
        console.log('✅ Supabase client initialized successfully.');
    } catch (err) {
        console.error('❌ Failed to initialize Supabase client:', err);
    }
}

// Expose client globally for use throughout the application
window.supabaseClient = supabaseClient;

/**
 * Harmless connection test helper.
 * 
 * Verifies that the client library is responsive and can check auth session state
 * WITHOUT reading, inserting, modifying, or deleting any business data or database tables.
 * 
 * Usage in browser DevTools Console:
 *   await testSupabaseConnection()
 */
window.testSupabaseConnection = async function() {
    if (!window.supabaseClient) {
        console.warn('⚠️ testSupabaseConnection: Supabase client is not initialized yet. Please insert your publishable anon key into js/supabase-client.js.');
        return { 
            success: false, 
            message: 'Supabase client not initialized. Please add your anon key in js/supabase-client.js.' 
        };
    }

    try {
        // Harmless session check: interacts solely with client auth state in localStorage
        const { data, error } = await window.supabaseClient.auth.getSession();
        if (error) {
            console.error('❌ Supabase connection test returned an error:', error.message);
            return { success: false, error: error.message };
        }

        console.log('✅ Supabase client is responsive! Auth session check succeeded:', data.session ? 'Active session found' : 'No active session (expected for guest visitor)');
        console.log('ℹ️ Note: Successful client initialization confirms connectivity and key format, but does not prove database permissions, tables, or Row Level Security (RLS) policies are configured.');
        return { success: true, data };
    } catch (err) {
        console.error('❌ Unexpected error during Supabase connection test:', err);
        return { success: false, error: err };
    }
};

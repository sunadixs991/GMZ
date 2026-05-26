import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.SUPABASE_URL;
const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl) {
  // If no URL at all, create a dummy client to avoid crashing imports.
  // Most API calls will fail without a valid URL; callers should handle errors.
  // Throwing here previously caused the server runtime to crash during deploy when envs were missing.
  console.warn("SUPABASE_URL is not set — Supabase client will be unusable until configured.");
}

// Prefer the service role key on the server for admin operations. If unavailable (e.g. envs not set in deployment),
// fall back to the public anon key so read-only operations (if allowed by RLS) can still work.
const supabaseKey = serviceRoleKey ?? anonKey ?? "";

export const supabase = createClient(supabaseUrl ?? "", supabaseKey);

import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.SUPABASE_URL;
const supabasePublicUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (typeof window === "undefined") {
  if (!supabaseUrl) {
    console.warn("SUPABASE_URL is not set — server Supabase client will be unusable until configured.");
  }
  if (!serviceRoleKey) {
    console.warn("SUPABASE_SERVICE_ROLE_KEY is not set — server Supabase client will be unusable until configured.");
  }
} else {
  if (!supabasePublicUrl) {
    console.warn("NEXT_PUBLIC_SUPABASE_URL is not set — browser Supabase client will be unusable until configured.");
  }
  if (!anonKey) {
    console.warn("NEXT_PUBLIC_SUPABASE_ANON_KEY is not set — browser Supabase client will be unusable until configured.");
  }
}

export const supabase = typeof window !== "undefined" && supabasePublicUrl && anonKey
  ? createClient(supabasePublicUrl, anonKey)
  : (null as any);

export const supabaseServer = typeof window === "undefined" && supabaseUrl && serviceRoleKey
  ? createClient(supabaseUrl, serviceRoleKey)
  : (null as any);

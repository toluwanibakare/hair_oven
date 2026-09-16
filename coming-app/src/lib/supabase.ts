import { createClient } from "@supabase/supabase-js";

const supabaseUrl =
  process.env.NEXT_PUBLIC_SUPABASE_URL || "https://khdhimbitewshbjvshes.supabase.co";

const supabaseAnonKey =
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ||
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtoZGhpbWJpdGV3c2hianZzaGVzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODk1NDc4NzAsImV4cCI6MjEwNTEyMzg3MH0.PqlCP61TdXstIMXvtmuZW9dExy4wOOcX4_HYXaVbn-0";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

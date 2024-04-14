import { createClient, SupabaseClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://btgxjeehbfsjpkaizzcb.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ0Z3hqZWVoYmZzanBrYWl6emNiIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTExNTgxMDksImV4cCI6MjAwNjczNDEwOX0.uvtV6EKTL5NvAABCiDmth9H4ix3aaObEIfeiYLrkwww';

let supabase: SupabaseClient | any;

if (!supabaseUrl || !supabaseKey) {
  console.error("Supabase URL or anonymous key is missing. Make sure environment variables are set.");
} else 
  supabase = createClient(supabaseUrl, supabaseKey);


export default supabase;

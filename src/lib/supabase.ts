import { createClient } from "@supabase/supabase-js";
import AsyncStorage from "@react-native-async-storage/async-storage";
import "react-native-url-polyfill/auto";

const supabaseUrl = "https://urmdnooxuzyemuxjfihv.supabase.co";
const supabaseKey =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVybWRub294dXp5ZW11eGpmaWh2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzAwNjgzMDgsImV4cCI6MTk4NTY0NDMwOH0.8SnSgY0mOvUFWbZQZX8RNCzpGtJ8TNDAgyw3pdrOASc";

export const supabase = createClient(supabaseUrl, supabaseKey, {
    auth: {
        storage: AsyncStorage as any,
        autoRefreshToken: true,
        persistSession: true,
        detectSessionInUrl: false, // Prevents Supabase from evaluating window.location.href, breaking mobile
    },
});

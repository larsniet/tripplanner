import { createClient } from "@supabase/supabase-js";
import AsyncStorage from "@react-native-async-storage/async-storage";
import "react-native-url-polyfill/auto";

const supabaseUrl = process.env.EXPO_PUBLIC_SUPABASE_URL || ""; // If the env var is not working, you can hardcode the url here
const supabaseKey = process.env.EXPO_PUBLIC_SUPABASE_KEY || ""; // If the env var is not working, you can hardcode the key here

export const supabase = createClient(supabaseUrl, supabaseKey, {
    auth: {
        storage: AsyncStorage as any,
        autoRefreshToken: true,
        persistSession: true,
        detectSessionInUrl: false, // Prevents Supabase from evaluating window.location.href, breaking mobile
    },
});

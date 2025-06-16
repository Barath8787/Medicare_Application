// src/supabaseClient.js
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://uvoptyzqdipmhdxxpvht.supabase.co'; // ✅ Replace this with your actual project URL
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV2b3B0eXpxZGlwbWhkeHhwdmh0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk4ODMxMjksImV4cCI6MjA2NTQ1OTEyOX0.1OWDMvwWdi9Bwmafaiz_r23wJrDGaPBtTs5rRUtTUYY';       // ✅ Replace this with your actual anon key

export const supabase = createClient(supabaseUrl, supabaseKey);

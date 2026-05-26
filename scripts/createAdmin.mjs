import bcrypt from 'bcryptjs';
import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!SUPABASE_URL || !SUPABASE_KEY) {
  console.error('Error: SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY must be set.');
  process.exit(1);
}

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

const [, , username, password] = process.argv;

if (!username || !password) {
  console.error('Usage: node scripts/createAdmin.mjs <username> <password>');
  process.exit(1);
}

(async () => {
  try {
    const hash = await bcrypt.hash(password, 10);
    const { data, error } = await supabase.from('admins').insert([
      { username, password_hash: hash },
    ]);

    if (error) {
      console.error('Supabase error:', error);
      process.exit(1);
    }

    console.log('Admin user created:', data);
    process.exit(0);
  } catch (err) {
    console.error('Unexpected error:', err);
    process.exit(1);
  }
})();

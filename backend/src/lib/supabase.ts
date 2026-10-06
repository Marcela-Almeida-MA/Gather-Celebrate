import { createClient } from '@supabase/supabase-js'
import { env } from '../config/env.js'

if (!env.supabaseUrl) {
  throw new Error('SUPABASE_URL não configurada')
}

if (!env.supabaseServiceRoleKey) {
  throw new Error('SUPABASE_SERVICE_ROLE_KEY não configurada')
}

export const supabase = createClient(
  env.supabaseUrl,
  env.supabaseServiceRoleKey,
  {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
    },
  }
)
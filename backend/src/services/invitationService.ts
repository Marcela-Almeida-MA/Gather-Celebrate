import { supabase } from '../lib/supabase.js'

export interface CreateInvitationInput {
  event_type_id?: string
  theme_id?: string
  slug: string
  title: string
  description?: string
  story?: string
  event_date?: string
  event_time?: string
  location_name?: string
  location_address?: string
  is_online?: boolean
  online_platform?: string
  online_url?: string
  pix_key?: string
  pix_holder_name?: string
  status?: 'draft' | 'published' | 'archived'
}

export async function createInvitation(
  userId: string,
  input: CreateInvitationInput
) {
  const { data, error } = await supabase
    .from('invitations')
    .insert({
      user_id: userId,
      ...input,
    })
    .select()
    .single()

  if (error) {
    throw new Error(`Erro ao criar convite: ${error.message}`)
  }

  return data
}
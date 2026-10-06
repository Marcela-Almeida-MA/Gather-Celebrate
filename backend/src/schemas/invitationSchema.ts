import { z } from 'zod'

export const createInvitationSchema = z.object({
  event_type_id: z.string().uuid().optional(),

  theme_id: z.string().uuid().optional(),

  slug: z
    .string()
    .min(3, 'O slug deve ter pelo menos 3 caracteres')
    .max(100, 'O slug deve ter no máximo 100 caracteres')
    .regex(
      /^[a-z0-9-]+$/,
      'O slug deve conter apenas letras minúsculas, números e hífens'
    ),

  title: z
    .string()
    .min(1, 'O título é obrigatório')
    .max(200, 'O título deve ter no máximo 200 caracteres'),

  description: z.string().max(1000).optional(),

  story: z.string().optional(),

  event_date: z.string().optional(),

  event_time: z.string().optional(),

  location_name: z.string().max(200).optional(),

  location_address: z.string().max(500).optional(),

  is_online: z.boolean().optional(),

  online_platform: z.string().max(100).optional(),

  online_url: z.string().url().optional(),

  pix_key: z.string().max(200).optional(),

  pix_holder_name: z.string().max(200).optional(),

  status: z
    .enum(['draft', 'published', 'archived'])
    .optional(),
})
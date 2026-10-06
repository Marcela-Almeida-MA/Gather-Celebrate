import { Request, Response } from 'express'
import { ZodError } from 'zod'

import { createInvitation } from '../services/invitationService.js'
import { createInvitationSchema } from '../schemas/invitationSchema.js'

export async function createInvitationController(
  req: Request,
  res: Response
) {
  try {
    if (!req.user) {
      return res.status(401).json({
        success: false,
        message: 'Usuário não autenticado.',
      })
    }

    const userId = req.user.id

    const input = createInvitationSchema.parse(req.body)

    const invitation = await createInvitation(userId, input)

    return res.status(201).json({
      success: true,
      invitation,
    })
  } catch (error) {
    if (error instanceof ZodError) {
      return res.status(400).json({
        success: false,
        message: 'Dados do convite inválidos.',
        errors: error.flatten().fieldErrors,
      })
    }

    console.error(error)

    return res.status(500).json({
      success: false,
      message: 'Erro ao criar convite.',
    })
  }
}
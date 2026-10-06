import { Request, Response, NextFunction } from 'express'
import { supabase } from '../lib/supabase.js'

declare global {
  namespace Express {
    interface Request {
      user?: {
        id: string
        email?: string
      }
    }
  }
}

export async function authMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const authorization = req.headers.authorization

    if (!authorization) {
      return res.status(401).json({
        success: false,
        message: 'Token de autenticação não informado.',
      })
    }

    const [type, token] = authorization.split(' ')

    if (type !== 'Bearer' || !token) {
      return res.status(401).json({
        success: false,
        message: 'Token de autenticação inválido.',
      })
    }

    const {
      data: { user },
      error,
    } = await supabase.auth.getUser(token)

    if (error || !user) {
      return res.status(401).json({
        success: false,
        message: 'Usuário não autenticado.',
      })
    }

    req.user = {
      id: user.id,
      email: user.email,
    }

    next()
  } catch (error) {
    console.error(error)

    return res.status(500).json({
      success: false,
      message: 'Erro ao validar autenticação.',
    })
  }
}
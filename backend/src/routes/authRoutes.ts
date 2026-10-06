import { Router } from 'express'
import { authMiddleware } from '../middlewares/authMiddleware.js'

const router = Router()

router.get('/me', authMiddleware, (req, res) => {
  if (!req.user) {
    return res.status(401).json({
      success: false,
      message: 'Usuário não autenticado.',
    })
  }

  res.json({
    success: true,
    user: req.user,
  })
})

export default router
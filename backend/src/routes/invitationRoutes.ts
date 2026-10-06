import { Router } from 'express'

import {
  createInvitationController,
} from '../controllers/invitationController.js'

import {
  authMiddleware,
} from '../middlewares/authMiddleware.js'

const router = Router()

router.post(
  '/',
  authMiddleware,
  createInvitationController
)

export default router
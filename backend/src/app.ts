import express from 'express'
import cors from 'cors'
import authRoutes from './routes/authRoutes.js'
import invitationRoutes from './routes/invitationRoutes.js'

const app = express()

app.use(cors())
app.use(express.json())

app.get('/api/health', (_req, res) => {
  res.json({
    success: true,
    message: 'Backend do Convite Digital funcionando!',
  })
})

app.use('/api/auth', authRoutes)
app.use('/api/invitations', invitationRoutes)

export default app
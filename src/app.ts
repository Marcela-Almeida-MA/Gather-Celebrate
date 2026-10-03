import express from 'express'
import cors from 'cors'

const app = express()

app.use(cors())
app.use(express.json())

app.get('/api/health', (_req, res) => {
  res.json({
    success: true,
    message: 'Backend do Convite Digital funcionando!',
  })
})

export default app
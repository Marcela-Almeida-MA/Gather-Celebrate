import app from './app.js'
import { env } from './config/env.js'

const PORT = env.port

app.listen(PORT, () => {
  console.log(`🚀 Backend rodando em http://localhost:${PORT}`)
})
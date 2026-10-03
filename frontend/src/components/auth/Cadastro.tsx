import { FormEvent, useState } from 'react'
import { cadastrar } from '../../services/auth/authService'

export default function Cadastro() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')

  async function handleSubmit(event: FormEvent) {
    event.preventDefault()

    setLoading(true)
    setMessage('')

    try {
      await cadastrar(name, email, password)

      setMessage(
        'Cadastro realizado! Verifique seu e-mail para confirmar a conta.'
      )

      setName('')
      setEmail('')
      setPassword('')
    } catch (error) {
      if (error instanceof Error) {
        setMessage(error.message)
      } else {
        setMessage('Não foi possível realizar o cadastro.')
      }
    } finally {
      setLoading(false)
    }
  }

  return (
    <div>
      <h1>Criar minha conta</h1>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Nome</label>

          <input
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
            required
          />
        </div>

        <div>
          <label>E-mail</label>

          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />
        </div>

        <div>
          <label>Senha</label>

          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            minLength={6}
            required
          />
        </div>

        <button type="submit" disabled={loading}>
          {loading ? 'Criando conta...' : 'Cadastrar'}
        </button>
      </form>

      {message && <p>{message}</p>}
    </div>
  )
}
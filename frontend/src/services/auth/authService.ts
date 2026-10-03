import { supabase } from '../../lib/supabase'

export async function cadastrar(
  name: string,
  email: string,
  password: string
) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        name,
      },
    },
  })

  if (error) {
    throw error
  }

  return data
}

export async function login(
  email: string,
  password: string
) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  })

  if (error) {
    throw error
  }

  return data
}

export async function logout() {
  const { error } = await supabase.auth.signOut()

  if (error) {
    throw error
  }
}

export async function usuarioAtual() {
  const { data, error } = await supabase.auth.getUser()

  if (error) {
    return null
  }

  return data.user
}
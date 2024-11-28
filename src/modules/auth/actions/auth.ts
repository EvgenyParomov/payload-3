'use server'

import { z } from 'zod'

const userSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
})

export async function login(formData: unknown) {
  const validatedFields = userSchema.safeParse(formData)

  if (!validatedFields.success) {
    return { error: 'Invalid fields' }
  }

  // Here you would typically verify the user's credentials
  // and create a session. For this example, we'll just return a success message.
  return { success: 'Logged in successfully' }
}

export async function register(formData: unknown) {
  const validatedFields = userSchema.safeParse(formData)

  if (!validatedFields.success) {
    return { error: 'Invalid fields' }
  }

  // Here you would typically create a new user in your database
  // For this example, we'll just return a success message.
  return { success: 'Registered successfully' }
}


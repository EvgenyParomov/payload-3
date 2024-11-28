'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import { Button } from "@/shared/ui/button"
import { Input } from "@/shared/ui/input"
import { Label } from "@/shared/ui/label"
import { Alert, AlertDescription } from "@/shared/ui/alert"
import {login} from "../actions/auth";

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
})

export type FormLoginData = z.infer<typeof  schema>

export function LoginForm() {
  const [message, setMessage] = useState<string | null>(null)
  const { register, handleSubmit, formState: { errors } } = useForm<FormLoginData>({
    resolver: zodResolver(schema),
  })

  const onSubmit = async (data: FormLoginData) => {
    const result = await login(data)
    if (result.error) {
      setMessage(result.error)
    } else if (result.success) {
      setMessage(result.success)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <Label htmlFor="email">Email</Label>
        <Input id="email" type="email" {...register('email')} />
        {errors.email && <p className="text-red-500">{errors.email.message?.toString()}</p>}
      </div>
      <div>
        <Label htmlFor="password">Password</Label>
        <Input id="password" type="password" {...register('password')} />
        {errors.password && <p className="text-red-500">{errors.password.message?.toString()}</p>}
      </div>
      <Button type="submit">Login</Button>
      {message && (
        <Alert>
          <AlertDescription>{message}</AlertDescription>
        </Alert>
      )}
    </form>
  )
}


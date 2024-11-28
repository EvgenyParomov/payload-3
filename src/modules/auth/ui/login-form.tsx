'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import { Button } from "@/shared/ui/button"
import { Input } from "@/shared/ui/input"
import { Label } from "@/shared/ui/label"
import { Alert, AlertDescription } from "@/shared/ui/alert"
import { appFetch } from "@/shared/api";
import { useRouter } from "next/navigation";

const schema = z.object({
  email: z.string().email(),
  password: z.string(),
});

export type FormLoginData = z.infer<typeof schema>;

export function LoginForm() {
  const [message, setMessage] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormLoginData>({
    resolver: zodResolver(schema),
  });

  const router = useRouter();

  const onSubmit = async (data: FormLoginData) => {
    await appFetch("api/users/login", { json: data })
      .then(() => router.push("/"))
      .catch((error) => {
        setMessage(error.message);
      });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <Label htmlFor="email">Email</Label>
        <Input id="email" type="email" {...register("email")} />
        {errors.email && (
          <p className="text-red-500">{errors.email.message?.toString()}</p>
        )}
      </div>
      <div>
        <Label htmlFor="password">Password</Label>
        <Input id="password" type="password" {...register("password")} />
        {errors.password && (
          <p className="text-red-500">{errors.password.message?.toString()}</p>
        )}
      </div>
      <Button type="submit">Login</Button>
      {message && (
        <Alert>
          <AlertDescription>{message}</AlertDescription>
        </Alert>
      )}
    </form>
  );
}


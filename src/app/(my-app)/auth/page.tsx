import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/shared/ui/tabs";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/shared/ui/card";
import {LoginForm} from "@/modules/auth/ui/login-form";
import {RegisterForm} from "@/modules/auth/ui/register-form";


export default function AuthPage() {
  return (
      <div className="container mx-auto py-10">
        <Tabs defaultValue="login" className="w-[400px] mx-auto">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="login">Login</TabsTrigger>
            <TabsTrigger value="register">Register</TabsTrigger>
          </TabsList>
          <TabsContent value="login">
            <Card>
              <CardHeader>
                <CardTitle>Login</CardTitle>
                <CardDescription>Enter your credentials to login.</CardDescription>
              </CardHeader>
              <CardContent>
                <LoginForm />
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="register">
            <Card>
              <CardHeader>
                <CardTitle>Register</CardTitle>
                <CardDescription>Create a new account.</CardDescription>
              </CardHeader>
              <CardContent>
                <RegisterForm />
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
  )
}


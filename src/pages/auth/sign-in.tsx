import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Helmet } from "react-helmet-async"; 
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { toast } from "sonner";
import { Link } from 'react-router-dom'

const signInForm = z.object({
    email: z.string().email()
})

type SignInForm = z.infer<typeof signInForm>
export function SignIn() {

    const { register, handleSubmit, formState: { isSubmitting} } = useForm<SignInForm>()

    async function handleSignIn(data: SignInForm) {
        console.log(data)
        await new Promise((resolve) => setTimeout(resolve, 2000))

        toast.success('We sent an authentication link to your email.', {
            action: {
                label: 'Resend',
                onClick: () => handleSignIn(data),
            }
        })
    }

    return (
        <>
            <Helmet title="Login" />
            <div className="p-8">
                <Button variant="ghost" asChild className="absolute right-8 top-8">
                    <Link to="/sign-up">New establishment</Link>
                </Button>
                <div className="w-[340px] flex flex-col justify-center gap-6">
                    <div className="flex flex-col gap-2 text-center">
                        <h1 className="text-2xl font-semibold tracking-tight">Acess Dashboard</h1>
                        <p className="text-sm text-muted-foreground">
                            track your sales through the partner dashboard
                        </p>
                    </div>

                    <form className="space-y-4" onSubmit={handleSubmit(handleSignIn)}>
                        <div className="space-y-2">
                            <Label htmlFor="email">Your E-mail</Label>
                            <Input
                                id="email"
                                type="email"
                                {...register('email')}
                            />
                        </div>
                        <Button
                            type="submit"
                            className="w-full"
                            disabled={isSubmitting}>
                            Access
                        </Button>
                    </form>
                </div>

            </div>
        </>
    )
    
}
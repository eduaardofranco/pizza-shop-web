import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Helmet } from "react-helmet-async"; 
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { toast } from "sonner";
import { Link, useNavigate } from "react-router-dom";

const signUpForm = z.object({
    restaurantName: z.string(),
    managerName: z.string(),
    phone: z.string(),
    email: z.string().email(),
})

type signUpForm = z.infer<typeof signUpForm>

export function SignUp() {

    const navigate = useNavigate()


    const { register, handleSubmit, formState: { isSubmitting} } = useForm<signUpForm>()

    async function handlesignUp(data: signUpForm) {
        try {
            await new Promise((resolve) => setTimeout(resolve, 2000))
            toast.success('Restaurant successfully registered!', {
                action: {
                    label: 'Login',
                    onClick: () => navigate('/sign-in'),
                }
            })
        } catch (error) {
            toast.error('Error when registering restaurant')
        }

    }

    return (
        <>
            <Helmet title="Register" />
            <div className="p-8">
            <Button variant="ghost" asChild className="absolute right-8 top-8">
                    <Link to="/sign-in">Login</Link>
                </Button>
                <div className="w-[340px] flex flex-col justify-center gap-6">
                    <div className="flex flex-col gap-2 text-center">
                        <h1 className="text-2xl font-semibold tracking-tight">Register your account</h1>
                        <p className="text-sm text-muted-foreground">
                        Become a partner and start your sales
                        </p>
                    </div>

                    <form className="space-y-4" onSubmit={handleSubmit(handlesignUp)}>
                        <div className="space-y-2">
                            <Label htmlFor="restaurantName">Stablishment's name</Label>
                            <Input
                                id="restaurantName"
                                type="text"
                                {...register('restaurantName')}
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="managerName">Your Name</Label>
                            <Input
                                id="managerName"
                                type="text"
                                {...register('managerName')}
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="email">Your E-mail</Label>
                            <Input
                                id="email"
                                type="email"
                                {...register('email')}
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="phone">Phone</Label>
                            <Input
                                id="phone"
                                type="tel"
                                {...register('phone')}
                            />
                        </div>
                        <Button
                            type="submit"
                            className="w-full"
                            disabled={isSubmitting}>
                            Create
                        </Button>
                        <p className="px-6 text-center text-sm leading-relaxed text-muted-foreground">
                            By continuing you agree to our <a className="underline underline-offset-4" href="#">terms of service</a> and <a className="underline underline-offset-4" href="#">privacy policies</a>
                        </p>
                    </form>
                </div>

            </div>
        </>
    )
    
}
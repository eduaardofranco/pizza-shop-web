import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Helmet } from "react-helmet-async";

export function SignIn() {
    return (
        <>
            <Helmet title="Login" />
            <div className="p-8">
                <div className="w-[340px] flex flex-col justify-center gap-6">
                    <div className="flex flex-col gap-2 text-center">
                        <h1 className="text-2xl font-semibold tracking-tight">Acess Dashboard</h1>
                        <p className="text-sm text-muted-foreground">
                            track your sales through the partner dashboard
                        </p>
                    </div>

                    <form className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="email">Your E-mail</Label>
                            <Input id="email" type="email" />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="password">Password</Label>
                            <Input id="password" type="password" />
                        </div>
                        <Button type="submit" className="w-full">Acess</Button>
                    </form>
                </div>

            </div>
        </>
    )
    
}
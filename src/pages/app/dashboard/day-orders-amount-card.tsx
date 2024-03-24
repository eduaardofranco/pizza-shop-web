import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Utensils } from "lucide-react";

export function DayOrdersAmountCard() {
    return(
        <Card>
            <CardHeader className="flex-row items-center justify-between pb-2" space-y-0>
                <CardTitle className="text-base font-semibold">Orders (day)</CardTitle>
                <Utensils className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent className="space-y-1">
                <span className="text-2xl font-bold tracking-tighter">17</span>
                <p className="text-xs text-muted-foreground">
                    <span className="text-rose-500 dar:text-rose-400">
                        -2%
                    </span>{ ' '}
                    compared to yesterday
                </p>
            </CardContent>
        </Card>
    )
}
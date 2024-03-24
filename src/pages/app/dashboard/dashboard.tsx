import { Helmet } from "react-helmet-async";
import { MonthRevenueCard } from "./month-revenue-card";
import { MonthOrdersAmountCard } from "./month-orders-amount-card";
import { DayOrdersAmountCard } from "./day-orders-amount-card";
import { MonthCancelOrdersAmout } from "./month-cancel-orders-amount-card";

export function Dashboard() {
    return (
        <>
            <Helmet title="DashBoard" />
            <div className="flex flex-col gap-4">
                <h1 className="text-3xl font-bold tracking-tighter">Dashboard</h1>
            </div>

            <div className="grid grid-cols-4 gap-4">
                <MonthRevenueCard />
                <MonthOrdersAmountCard />
                <DayOrdersAmountCard />
                <MonthCancelOrdersAmout />
            </div>
        </>
    )
}
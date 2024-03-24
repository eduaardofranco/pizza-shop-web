import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ArrowRight, Search, X } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { OrderTableRow } from "./orders-table-row";
import { OrderTableFilters } from "./order-table-filters";
import { Pagination } from "@/components/pagination";

export function Orders() {
    return(
       <>
        <Helmet title="Orders" />
        <div className="flex flex-col gap-4">
            <h1 className="text-3xl font-bold tracking-tighter">Orders</h1>
            <div className="space-y-2 5">
                <OrderTableFilters />
                <div className="border rounded-md">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="w-[64px]"></TableHead>
                                <TableHead className="w-[140-px]">Id</TableHead>
                                <TableHead className="w-[180px]">Placed at</TableHead>
                                <TableHead className="w-[140px]">Status</TableHead>
                                <TableHead>Customer</TableHead>
                                <TableHead className="w-[140px]">Order Total</TableHead>
                                <TableHead className="w-[164px]"></TableHead>
                                <TableHead className="w-[132px]"></TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {Array.from({ length: 10}).map((a,i) => {
                                return(
                                    <OrderTableRow key={i}  />
                                    )
                                })}
                        </TableBody>
                    </Table>
                </div>
            </div>
            <Pagination perPage={10} totalCount={100} pageIndex={0} />
        </div>
       </>
    )
}
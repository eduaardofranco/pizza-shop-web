import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ArrowRight, Search, X } from "lucide-react";
import { Helmet } from "react-helmet-async";

export function Orders() {
    return(
       <>
        <Helmet title="Orders" />
        <div className="flex flex-col gap-4">
            <h1 className="text-3xl font-bold tracking-tighter">Orders</h1>
        </div>
        <div className="space-y-2 5">
            <form className="flex items-center gap-2">
                <span className="text-sm font-semibold">Filters:</span>
                <Input placeholder="Customer's Name" className="h-8 w-[320px]" />
            </form>
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
                                <TableRow key={i}>
                            <TableCell>
                                <Button variant="outline" size="xs">
                                    <Search className="h-3 w-3" />
                                    <span className="sr-only">Order Details</span>
                                </Button>
                            </TableCell>
                            <TableCell className="font-mono txt-sm font-medium">20153</TableCell>
                            <TableCell className="text-muted-foreground">15 minutes ago</TableCell>
                            <TableCell>
                                <div className="flex items-center gap-2">
                                    <span className="h-2 w-2 rounded-full bg-slate-400"></span>
                                    <span className="font-medium text-muted-foreground">Pending</span>
                                </div>
                            </TableCell>
                            <TableCell className="font-medium">
                                Eduardo Franco
                            </TableCell>
                            <TableCell className="font-medium">
                                €47.90
                            </TableCell>
                            <TableCell>
                                <Button variant="outline" size="xs" className="">
                                    <ArrowRight className="mr-2 h-3 w-3" />
                                    Approve
                                </Button>
                            </TableCell>
                            <TableCell>
                                <Button variant="ghost" size="xs" className="">
                                    <X className="mr-2 h-3 w-3" />
                                    Cancel
                                </Button>
                            </TableCell>
                            <TableCell></TableCell>
                        </TableRow>
                            )
                        })}
                    </TableBody>
                </Table>
            </div>
        </div>
       </>
    )
}
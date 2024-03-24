import { DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Table, TableBody, TableCell, TableFooter, TableHead, TableHeader, TableRow } from "@/components/ui/table";


export function OrderDetail() {
    return(
        <DialogContent>
            <DialogHeader>
                <DialogTitle>Order: 12321334</DialogTitle>
                <DialogDescription>Order's Detail</DialogDescription>
            </DialogHeader>
            <div className="space-y-6">
                <Table>
                    <TableBody>
                        <TableRow>
                            <TableCell className="text-muted-foreground">Status</TableCell>
                            <TableCell className="flex justify-end">
                                <div className="flex items-center gap-2">
                                    <span className="h-2 w-2 rounded-full bg-slate-400"></span>
                                    <span className="font-medium text-muted-foreground">Pending</span>
                                </div>
                            </TableCell>
                        </TableRow>

                        <TableRow>
                            <TableCell className="text-muted-foreground">Customer</TableCell>
                            <TableCell className="flex justify-end">
                                Edaurdo Franco
                            </TableCell>
                        </TableRow>

                        <TableRow>
                            <TableCell className="text-muted-foreground">Phone</TableCell>
                            <TableCell className=" flex justify-end">
                                (096) 078 983322
                            </TableCell>
                        </TableRow>

                        <TableRow>
                            <TableCell className="text-muted-foreground">E-mail</TableCell>
                            <TableCell className=" flex justify-end">
                                eduardo.franco@gmail.com
                            </TableCell>
                        </TableRow>

                        <TableRow>
                            <TableCell className="text-muted-foreground">Placed at</TableCell>
                            <TableCell className=" flex justify-end">
                                5 minutes ago
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>

                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Item</TableHead>
                            <TableHead className="text-right">Quantity</TableHead>
                            <TableHead className="text-right">Price</TableHead>
                            <TableHead className="text-right">Subtotal</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow>
                            <TableCell>Xis Tudo</TableCell>
                            <TableCell className="text-right">2</TableCell>
                            <TableCell className="text-right">€10.70</TableCell>
                            <TableCell className="text-right">€21.40</TableCell>
                        </TableRow>

                        <TableRow>
                            <TableCell>Cachorro Quente</TableCell>
                            <TableCell className="text-right">4</TableCell>
                            <TableCell className="text-right">€10</TableCell>
                            <TableCell className="text-right">€40</TableCell>
                        </TableRow>
                    </TableBody>
                    <TableFooter>
                        <TableRow>
                            <TableCell colSpan={3}>
                                Total
                            </TableCell>
                            <TableCell className="text-right font-medium">
                                €61.40
                            </TableCell>

                        </TableRow>
                    </TableFooter>
                </Table>
            </div>
        </DialogContent>
    )
}
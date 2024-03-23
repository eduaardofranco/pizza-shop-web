import { Button } from "@/components/ui/button";
import { TableCell, TableRow } from "@/components/ui/table";
import { ArrowRight, Search, X } from "lucide-react";

export function OrderTableRow() {
    return(
        <TableRow>
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
}
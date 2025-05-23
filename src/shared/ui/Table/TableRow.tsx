import { forwardRef } from "react";

export const TableRow = forwardRef<HTMLTableRowElement, React.HTMLAttributes<HTMLTableRowElement>>(
  ({ className = "", ...props }, ref) => (
    <tr ref={ref} className={`border-b transition-colors hover:bg-muted/50 h-14 ${className}`} {...props} />
  ),
);
TableRow.displayName = "TableRow";

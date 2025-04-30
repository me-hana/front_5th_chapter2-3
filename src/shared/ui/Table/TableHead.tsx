import { forwardRef } from "react";

export const TableHead = forwardRef<HTMLTableCellElement, React.ThHTMLAttributes<HTMLTableCellElement>>(
  ({ className = "", ...props }, ref) => (
    <th ref={ref} className={`h-10 px-2 text-left font-medium text-muted-foreground ${className}`} {...props} />
  ),
);
TableHead.displayName = "TableHead";

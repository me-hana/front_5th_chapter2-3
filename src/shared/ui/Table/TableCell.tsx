import { forwardRef } from "react";

export const TableCell = forwardRef<HTMLTableCellElement, React.TdHTMLAttributes<HTMLTableCellElement>>(
  ({ className = "", ...props }, ref) => <td ref={ref} className={`p-2 align-middle ${className}`} {...props} />,
);
TableCell.displayName = "TableCell";

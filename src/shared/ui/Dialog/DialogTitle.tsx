import { forwardRef } from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";

export const DialogTitle = forwardRef<HTMLHeadingElement, React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>>(
  ({ className = "", ...props }, ref) => (
    <DialogPrimitive.Title
      ref={ref}
      className={`text-lg font-semibold leading-none tracking-tight ${className}`}
      {...props}
    />
  ),
);
DialogTitle.displayName = "DialogTitle";

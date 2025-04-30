import { forwardRef } from "react";
import { DivProps } from "./card.type";

export const CardHeader = forwardRef<HTMLDivElement, DivProps>(({ className = "", ...props }, ref) => (
  <div ref={ref} className={`flex flex-col space-y-1.5 p-6 ${className}`} {...props} />
));
CardHeader.displayName = "CardHeader";

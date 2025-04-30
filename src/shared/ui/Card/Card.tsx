import { forwardRef } from "react";
import { DivProps } from "./card.type";

export const Card = forwardRef<HTMLDivElement, DivProps>(({ className = "", ...props }, ref) => (
  <div ref={ref} className={`rounded-lg border bg-card text-card-foreground shadow-sm ${className}`} {...props} />
));
Card.displayName = "Card";

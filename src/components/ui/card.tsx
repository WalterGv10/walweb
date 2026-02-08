import * as React from "react";
import { cn } from "@/lib/utils";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    variant?: "default" | "glass";
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
    ({ className, variant = "default", ...props }, ref) => {
        return (
            <div
                ref={ref}
                className={cn(
                    "rounded-lg",
                    variant === "glass" && "backdrop-blur-md bg-white/5 border border-white/10",
                    variant === "default" && "bg-slate-900 border border-slate-800",
                    className
                )}
                {...props}
            />
        );
    }
);
Card.displayName = "Card";

export { Card };

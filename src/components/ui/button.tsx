import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "default" | "ghost";
    size?: "default" | "sm" | "lg";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "default", size = "default", ...props }, ref) => {
        return (
            <button
                className={cn(
                    "inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none",
                    variant === "default" && "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500",
                    variant === "ghost" && "bg-transparent text-white hover:bg-white/10",
                    size === "default" && "px-4 py-2 text-sm",
                    size === "sm" && "px-3 py-1.5 text-xs",
                    size === "lg" && "px-6 py-3 text-base",
                    className
                )}
                ref={ref}
                {...props}
            />
        );
    }
);
Button.displayName = "Button";

export { Button };

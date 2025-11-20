import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
    "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
    {
        variants: {
            variant: {
                primary:
                    "bg-primary text-white hover:bg-primary/90 active:scale-95 shadow-lg hover:shadow-xl",
                secondary:
                    "bg-secondary text-white hover:bg-secondary/90 active:scale-95 shadow-lg hover:shadow-xl",
                outline:
                    "border-2 border-primary text-primary hover:bg-primary hover:text-white active:scale-95",
                ghost:
                    "hover:bg-primary/10 hover:text-primary active:scale-95",
                link:
                    "text-primary underline-offset-4 hover:underline",
            },
            size: {
                sm: "h-9 px-4 text-xs",
                md: "h-11 px-6",
                lg: "h-13 px-8 text-base",
                icon: "h-10 w-10",
            },
            fullWidth: {
                true: "w-full",
            },
        },
        defaultVariants: {
            variant: "primary",
            size: "md",
        },
    }
);

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
    asChild?: boolean;
    href?: string;
    loading?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, size, fullWidth, loading, children, href, ...props }, ref) => {
        if (href) {
            return (
                <a
                    href={href}
                    className={cn(buttonVariants({ variant, size, fullWidth, className }))}
                >
                    {loading ? (
                        <>
                            <div className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                            Loading...
                        </>
                    ) : (
                        children
                    )}
                </a>
            );
        }

        return (
            <button
                className={cn(buttonVariants({ variant, size, fullWidth, className }))}
                ref={ref}
                disabled={loading || props.disabled}
                {...props}
            >
                {loading ? (
                    <>
                        <div className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                        Loading...
                    </>
                ) : (
                    children
                )}
            </button>
        );
    }
);

Button.displayName = "Button";

export { Button, buttonVariants };

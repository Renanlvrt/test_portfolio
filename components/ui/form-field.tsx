"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface InputProps
    extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: string;
    helperText?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
    ({ className, type, label, error, helperText, ...props }, ref) => {
        const id = React.useId();
        const inputId = props.id || id;

        return (
            <div className="w-full space-y-2">
                {label && (
                    <label
                        htmlFor={inputId}
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                        {label}
                        {props.required && <span className="text-red-500 ml-1">*</span>}
                    </label>
                )}
                <input
                    type={type}
                    className={cn(
                        "flex h-11 w-full rounded-lg border border-border bg-transparent px-4 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:border-transparent disabled:cursor-not-allowed disabled:opacity-50 transition-all",
                        error && "border-red-500 focus-visible:ring-red-500",
                        className
                    )}
                    ref={ref}
                    id={inputId}
                    {...props}
                />
                {error && <p className="text-sm text-red-500">{error}</p>}
                {helperText && !error && (
                    <p className="text-sm text-muted-foreground">{helperText}</p>
                )}
            </div>
        );
    }
);
Input.displayName = "Input";

export interface TextareaProps
    extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    label?: string;
    error?: string;
    helperText?: string;
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
    ({ className, label, error, helperText, ...props }, ref) => {
        const id = React.useId();
        const textareaId = props.id || id;

        return (
            <div className="w-full space-y-2">
                {label && (
                    <label
                        htmlFor={textareaId}
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                        {label}
                        {props.required && <span className="text-red-500 ml-1">*</span>}
                    </label>
                )}
                <textarea
                    className={cn(
                        "flex min-h-[80px] w-full rounded-lg border border-border bg-transparent px-4 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:border-transparent disabled:cursor-not-allowed disabled:opacity-50 resize-y transition-all",
                        error && "border-red-500 focus-visible:ring-red-500",
                        className
                    )}
                    ref={ref}
                    id={textareaId}
                    {...props}
                />
                {error && <p className="text-sm text-red-500">{error}</p>}
                {helperText && !error && (
                    <p className="text-sm text-muted-foreground">{helperText}</p>
                )}
            </div>
        );
    }
);
Textarea.displayName = "Textarea";

export interface SelectProps
    extends React.SelectHTMLAttributes<HTMLSelectElement> {
    label?: string;
    error?: string;
    helperText?: string;
    options: string[];
}

const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
    ({ className, label, error, helperText, options, ...props }, ref) => {
        const id = React.useId();
        const selectId = props.id || id;

        return (
            <div className="w-full space-y-2">
                {label && (
                    <label
                        htmlFor={selectId}
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                        {label}
                        {props.required && <span className="text-red-500 ml-1">*</span>}
                    </label>
                )}
                <select
                    className={cn(
                        "flex h-11 w-full rounded-lg border border-border bg-transparent px-4 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:border-transparent disabled:cursor-not-allowed disabled:opacity-50 transition-all",
                        error && "border-red-500 focus-visible:ring-red-500",
                        className
                    )}
                    ref={ref}
                    id={selectId}
                    {...props}
                >
                    {options.map((option) => (
                        <option key={option} value={option}>
                            {option}
                        </option>
                    ))}
                </select>
                {error && <p className="text-sm text-red-500">{error}</p>}
                {helperText && !error && (
                    <p className="text-sm text-muted-foreground">{helperText}</p>
                )}
            </div>
        );
    }
);
Select.displayName = "Select";

export { Input, Textarea, Select };

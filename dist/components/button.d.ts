import * as React from "react";
declare const buttonVariants: (props?: ({
    variant?: "destructive" | "link" | "ghost" | "primary" | "secondary" | "tertiary" | "destructiveLight" | null | undefined;
    size?: "small" | "medium" | "large" | null | undefined;
    contentType?: "icon" | "default" | null | undefined;
} & import("class-variance-authority/types").ClassProp) | undefined) => string;
declare function Button({ className, variant, size, contentType, asChild, ...props }: React.ComponentProps<"button"> & {
    variant?: "primary" | "secondary" | "tertiary" | "ghost" | "destructive" | "destructiveLight" | "link";
    size?: "small" | "medium" | "large";
    contentType?: "default" | "icon";
    asChild?: boolean;
}): import("react/jsx-runtime").JSX.Element;
export { Button, buttonVariants };

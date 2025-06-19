import * as React from "react";
declare const buttonVariants: (props?: ({
    variant?: "destructive" | "link" | "primary" | "secondary" | "tertiary" | "ghost" | "destructiveLight" | null | undefined;
    size?: "small" | "medium" | "large" | null | undefined;
    contentType?: "default" | "icon" | null | undefined;
} & import("class-variance-authority/types").ClassProp) | undefined) => string;
declare function Button({ className, variant, size, contentType, asChild, ...props }: React.ComponentProps<"button"> & {
    variant?: "primary" | "secondary" | "tertiary" | "ghost" | "destructive" | "destructiveLight" | "link";
    size?: "small" | "medium" | "large";
    contentType?: "default" | "icon";
    asChild?: boolean;
}): import("react/jsx-runtime").JSX.Element;
export { Button, buttonVariants };

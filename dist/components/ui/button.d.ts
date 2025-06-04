import * as React from "react";
export declare const buttonVariants: (props?: ({
    variant?: "destructive" | "link" | "primary" | "outline" | "secondary" | "ghost" | null | undefined;
    contentType?: "default" | "icon" | null | undefined;
    size?: "md" | "sm" | "lg" | null | undefined;
} & import("class-variance-authority/types").ClassProp) | undefined) => string;
export declare const Button: React.FC<React.ComponentProps<"button"> & {
    asChild?: boolean;
    variant?: "destructive" | "link" | "primary" | "outline" | "secondary" | "ghost";
    size?: "sm" | "md" | "lg";
    contentType?: "default" | "icon";
}>;

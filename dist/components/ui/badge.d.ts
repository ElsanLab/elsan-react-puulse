import * as React from "react";
declare const badgeVariants: (props?: ({
    variant?: "info" | "success" | "warning" | "destructive" | "neutral" | null | undefined;
} & import("class-variance-authority/types").ClassProp) | undefined) => string;
declare function Badge({ className, variant, asChild, ...props }: React.ComponentProps<"span"> & {
    variant?: "neutral" | "info" | "success" | "warning" | "destructive";
    asChild?: boolean;
}): import("react/jsx-runtime").JSX.Element;
export { Badge, badgeVariants };

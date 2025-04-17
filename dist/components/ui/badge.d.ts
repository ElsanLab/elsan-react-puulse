import * as React from "react";
import { type VariantProps } from "class-variance-authority";
/** CHANGES FROM DEFAULT SHADCN
 *
 * - removed "default", "secondary", "destructive" & "outline" variants
 * - added "neutral", "info", "success", "warning" variants
 * - set "neutral" as default variant
 * - fixed prefix placement
 */
declare const badgeVariants: (props?: ({
    variant?: "info" | "success" | "warning" | "destructive" | "neutral" | "primary" | null | undefined;
} & import("class-variance-authority/types").ClassProp) | undefined) => string;
declare function Badge({ className, variant, asChild, ...props }: React.ComponentProps<"span"> & VariantProps<typeof badgeVariants> & {
    asChild?: boolean;
}): import("react/jsx-runtime").JSX.Element;
export { Badge, badgeVariants };

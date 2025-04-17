import * as React from "react";
import { type VariantProps } from "class-variance-authority";
/** CHANGES FROM DEFAULT SHADCN
 *
 * - removed "default" variant
 * - added "info", "success", "warning" variants
 * - set "info" as default variant
 * - removed "text-muted-foreground" from AlertDescription className
 * - fixed prefix placement
 */
declare const alertVariants: (props?: ({
    variant?: "info" | "success" | "warning" | "destructive" | null | undefined;
} & import("class-variance-authority/types").ClassProp) | undefined) => string;
declare function Alert({ className, variant, ...props }: React.ComponentProps<"div"> & VariantProps<typeof alertVariants>): import("react/jsx-runtime").JSX.Element;
declare function AlertTitle({ className, ...props }: React.ComponentProps<"div">): import("react/jsx-runtime").JSX.Element;
declare function AlertDescription({ className, ...props }: React.ComponentProps<"div">): import("react/jsx-runtime").JSX.Element;
export { Alert, AlertTitle, AlertDescription };

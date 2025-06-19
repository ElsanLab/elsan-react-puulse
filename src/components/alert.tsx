import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

/* CHANGES FROM DEFAULT SHADCN
 *
 * - removed "default" variant
 * - added "info", "success", "warning" variants
 * - set "info" as default variant
 * - removed "text-muted-foreground" from AlertDescription className
 */

const alertVariants = cva(
  "ep:relative ep:w-full ep:rounded-lg ep:border ep:px-4 ep:py-3 ep:text-sm ep:grid ep:has-[>svg]:grid-cols-[calc(var(--spacing)*4)_1fr] ep:grid-cols-[0_1fr] ep:has-[>svg]:gap-x-3 ep:gap-y-0.5 ep:items-start ep:[&>svg]:size-4 ep:[&>svg]:translate-y-0.5 ep:[&>svg]:text-current",
  {
    variants: {
      variant: {
        info: "ep:bg-info ep:border-info-border ep:text-info-foreground",
        success:
          "ep:bg-success ep:border-success-border ep:text-success-foreground",
        warning:
          "ep:bg-warning ep:border-warning-border ep:text-warning-foreground",
        destructive:
          "ep:bg-destructive-light ep:border-destructive-light-border ep:text-destructive-light-foreground",
      },
    },
    defaultVariants: {
      variant: "info",
    },
  }
);

function Alert({
  className,
  variant,
  ...props
}: React.ComponentProps<"div"> & {
  variant?: "info" | "success" | "warning" | "destructive";
}) {
  return (
    <div
      data-slot="alert"
      role="alert"
      className={cn(alertVariants({ variant }), className)}
      {...props}
    />
  );
}

function AlertTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-title"
      className={cn(
        "ep:col-start-2 ep:line-clamp-1 ep:min-h-4 ep:font-medium ep:tracking-tight",
        className
      )}
      {...props}
    />
  );
}

function AlertDescription({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-description"
      className={cn(
        "ep:col-start-2 ep:grid ep:justify-items-start ep:gap-1 ep:text-sm ep:[&_p]:leading-relaxed",
        className
      )}
      {...props}
    />
  );
}

export { Alert, AlertTitle, AlertDescription };

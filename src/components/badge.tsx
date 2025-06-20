import * as React from "react";
import { Slot as SlotPrimitive } from "radix-ui";
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils";

/* CHANGES FROM DEFAULT SHADCN
 *
 * - removed "default", "secondary", "destructive" & "outline" variants
 * - added "neutral", "info", "success", "warning" variants
 * - set "neutral" as default variant
 * - fixed prefix placement
 */

const badgeVariants = cva(
  "ep:inline-flex ep:items-center ep:justify-center ep:rounded-sm ep:border ep:px-2 ep:py-0.5 ep:text-xs ep:font-medium ep:w-fit ep:whitespace-nowrap ep:shrink-0 ep:[&>svg]:size-3 ep:gap-1 ep:[&>svg]:pointer-events-none ep:focus-visible:border-ring ep:focus-visible:ring-ring/50 ep:focus-visible:ring-[3px] ep:aria-invalid:ring-destructive/20 ep:dark:aria-invalid:ring-destructive/40 ep:aria-invalid:border-destructive ep:transition-[color,box-shadow] ep:overflow-hidden",
  {
    variants: {
      variant: {
        neutral:
          "ep:bg-secondary ep:border-secondary-border ep:text-secondary-foreground",
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
      variant: "neutral",
    },
  }
);

function Badge({
  className,
  variant,
  asChild = false,
  ...props
}: React.ComponentProps<"span"> & {
  variant?: "neutral" | "info" | "success" | "warning" | "destructive";
  asChild?: boolean;
}) {
  const Comp = asChild ? SlotPrimitive.Slot : "span";

  return (
    <Comp
      data-slot="badge"
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    />
  );
}

export { Badge, badgeVariants };

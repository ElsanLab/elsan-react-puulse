import * as React from "react";
import * as LabelPrimitive from "@radix-ui/react-label";

import { cn } from "@/lib/utils";

/* CHANGES FROM DEFAULT SHADCN
 *
 * Added `required` prop
 * remove disabled state management (not used in Puulse)
 *
 */

function Label({
  className,
  required,
  children,
  ...props
}: React.ComponentProps<typeof LabelPrimitive.Root> & {
  required?: boolean;
}) {
  return (
    <LabelPrimitive.Root
      data-slot="label"
      className={cn(
        "ep:flex ep:items-center ep:gap-2 ep:text-sm ep:font-normal ep:leading-5 ep:select-none",
        className
      )}
      {...props}
    >
      {required && <span className="ep:text-destructive">*</span>}
      {children}
    </LabelPrimitive.Root>
  );
}

export { Label };

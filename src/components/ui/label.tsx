import * as React from "react";
import * as LabelPrimitive from "@radix-ui/react-label";

import { cn } from "@/lib/utils";

/* CHANGES FROM DEFAULT SHADCN
 *
 * Added `required` prop
 * fixed prefix placement
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
        "ep:flex ep:items-center ep:gap-2 ep:text-sm ep:leading-none ep:font-medium ep:select-none ep:group-data-[disabled=true]:pointer-events-none ep:group-data-[disabled=true]:opacity-50 ep:peer-disabled:cursor-not-allowed ep:peer-disabled:opacity-50",
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

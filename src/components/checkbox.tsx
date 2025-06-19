import * as React from "react";
import { Checkbox as CheckboxPrimitive } from "radix-ui";
import { CheckIcon } from "lucide-react";

import { cn } from "@/lib/utils";

/* 
CHANGES
  - change radius: rounded-[4px] -> rounded-sm
*/

function Checkbox({
  className,
  ...props
}: React.ComponentProps<typeof CheckboxPrimitive.Root>) {
  return (
    <CheckboxPrimitive.Root
      data-slot="checkbox"
      className={cn(
        "ep:peer ep:border-border ep:dark:bg-input/30 ep:data-[state=checked]:bg-primary ep:data-[state=checked]:text-primary-foreground ep:dark:data-[state=checked]:bg-primary ep:data-[state=checked]:border-primary ep:focus-visible:border-ring ep:focus-visible:ring-ring/50 ep:aria-invalid:ring-destructive/20 ep:dark:aria-invalid:ring-destructive/40 ep:aria-invalid:border-destructive ep:size-4 ep:shrink-0 ep:rounded-sm ep:border ep:shadow-xs ep:transition-shadow ep:outline-none ep:focus-visible:ring-[3px] ep:disabled:cursor-not-allowed ep:disabled:opacity-50",
        className
      )}
      {...props}
    >
      <CheckboxPrimitive.Indicator
        data-slot="checkbox-indicator"
        className="ep:flex ep:items-center ep:justify-center ep:text-current ep:transition-none"
      >
        <CheckIcon className="ep:size-3.5" />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  );
}

export { Checkbox };

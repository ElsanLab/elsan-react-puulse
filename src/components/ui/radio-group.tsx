import * as React from "react";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import { CircleCheck } from "lucide-react";

import { cn } from "@/lib/utils";

/* CHANGES FROM DEFAULT SHADCN
 *
 * Indicator changed to CircleCheck size-3 instead of Circle size-2
 * Added text-primary-foreground to Indicator
 * fixed prefix placement
 *
 */

function RadioGroup({
  className,
  ...props
}: React.ComponentProps<typeof RadioGroupPrimitive.Root>) {
  return (
    <RadioGroupPrimitive.Root
      data-slot="radio-group"
      className={cn("ep:grid ep:gap-3", className)}
      {...props}
    />
  );
}

function RadioGroupItem({
  className,
  ...props
}: React.ComponentProps<typeof RadioGroupPrimitive.Item>) {
  return (
    <RadioGroupPrimitive.Item
      data-slot="radio-group-item"
      className={cn(
        "ep:border-input ep:text-primary ep:focus-visible:border-ring ep:focus-visible:ring-ring/50 ep:aria-invalid:ring-destructive/20 ep:dark:aria-invalid:ring-destructive/40 ep:aria-invalid:border-destructive ep:dark:bg-input/30 ep:aspect-square ep:size-4 ep:shrink-0 ep:rounded-full ep:border ep:shadow-xs ep:transition-[color,box-shadow] ep:outline-none ep:focus-visible:ring-[3px] ep:disabled:cursor-not-allowed ep:disabled:opacity-50",
        className
      )}
      {...props}
    >
      <RadioGroupPrimitive.Indicator
        data-slot="radio-group-indicator"
        className="ep:relative ep:flex ep:items-center ep:justify-center"
      >
        <CircleCheck className="ep:fill-primary ep:text-primary-foreground ep:absolute ep:top-1/2 ep:left-1/2 ep:size-4 ep:-translate-x-1/2 ep:-translate-y-1/2" />
      </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
  );
}

export { RadioGroup, RadioGroupItem };

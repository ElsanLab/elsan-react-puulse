import * as React from "react";
import * as ScrollAreaPrimitive from "@radix-ui/react-scroll-area";

import { cn } from "@/lib/utils";

/** CHANGES FROM DEFAULT SHADCN
 *
 * fixed prefix placement
 *
 */

function ScrollArea({
  className,
  children,
  ...props
}: React.ComponentProps<typeof ScrollAreaPrimitive.Root>) {
  return (
    <ScrollAreaPrimitive.Root
      data-slot="scroll-area"
      className={cn("ep:relative", className)}
      {...props}
    >
      <ScrollAreaPrimitive.Viewport
        data-slot="scroll-area-viewport"
        className="ep:focus-visible:ring-ring/50 ep:size-full ep:rounded-[inherit] ep:transition-[color,box-shadow] ep:outline-none ep:focus-visible:ring-[3px] ep:focus-visible:outline-1"
      >
        {children}
      </ScrollAreaPrimitive.Viewport>
      <ScrollBar />
      <ScrollAreaPrimitive.Corner />
    </ScrollAreaPrimitive.Root>
  );
}

function ScrollBar({
  className,
  orientation = "vertical",
  ...props
}: React.ComponentProps<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>) {
  return (
    <ScrollAreaPrimitive.ScrollAreaScrollbar
      data-slot="scroll-area-scrollbar"
      orientation={orientation}
      className={cn(
        "ep:flex ep:touch-none ep:p-px ep:transition-colors ep:select-none",
        orientation === "vertical" &&
          "ep:h-full ep:w-2.5 ep:border-l ep:border-l-transparent",
        orientation === "horizontal" &&
          "ep:h-2.5 ep:flex-col ep:border-t ep:border-t-transparent",
        className
      )}
      {...props}
    >
      <ScrollAreaPrimitive.ScrollAreaThumb
        data-slot="scroll-area-thumb"
        className="ep:bg-border ep:relative ep:flex-1 ep:rounded-full"
      />
    </ScrollAreaPrimitive.ScrollAreaScrollbar>
  );
}

export { ScrollArea, ScrollBar };

import * as React from "react";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";

import { cn } from "@/lib/utils";

/** CHANGES FROM DEFAULT SHADCN
 *
 * Changed background to bg-neutral instead of bg-primary
 * Changed text color to neutral-foreground instead of primary-foreground
 * Changed arrow color to neutral instead of bg-primary (bg-neutral + fill-neutral)
 * fixed prefix placement
 *
 */

function TooltipProvider({
  delayDuration = 0,
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Provider>) {
  return (
    <TooltipPrimitive.Provider
      data-slot="tooltip-provider"
      delayDuration={delayDuration}
      {...props}
    />
  );
}

function Tooltip({
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Root>) {
  return (
    <TooltipProvider>
      <TooltipPrimitive.Root data-slot="tooltip" {...props} />
    </TooltipProvider>
  );
}

function TooltipTrigger({
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Trigger>) {
  return <TooltipPrimitive.Trigger data-slot="tooltip-trigger" {...props} />;
}

function TooltipContent({
  className,
  sideOffset = 0,
  children,
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Content>) {
  return (
    <TooltipPrimitive.Portal>
      <TooltipPrimitive.Content
        data-slot="tooltip-content"
        sideOffset={sideOffset}
        className={cn(
          "ep:bg-neutral ep:text-neutral-foreground ep:animate-in ep:fade-in-0 ep:zoom-in-95 ep:data-[state=closed]:animate-out ep:data-[state=closed]:fade-out-0 ep:data-[state=closed]:zoom-out-95 ep:data-[side=bottom]:slide-in-from-top-2 ep:data-[side=left]:slide-in-from-right-2 ep:data-[side=right]:slide-in-from-left-2 ep:data-[side=top]:slide-in-from-bottom-2 ep:z-50 ep:w-fit ep:origin-(--radix-tooltip-content-transform-origin) ep:rounded-md ep:px-3 ep:py-1.5 ep:text-xs ep:text-balance",
          className
        )}
        {...props}
      >
        {children}
        <TooltipPrimitive.Arrow className="ep:bg-neutral ep:fill-neutral ep:z-50 ep:size-2.5 ep:translate-y-[calc(-50%_-_2px)] ep:rotate-45 ep:rounded-[2px]" />
      </TooltipPrimitive.Content>
    </TooltipPrimitive.Portal>
  );
}

export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider };

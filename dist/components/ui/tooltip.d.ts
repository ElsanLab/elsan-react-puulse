import * as React from "react";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";
/** CHANGES FROM DEFAULT SHADCN
 *
 * Changed background to bg-neutral instead of bg-primary
 * Changed text color to neutral-foreground instead of primary-foreground
 * Changed arrow color to neutral instead of bg-primary (bg-neutral + fill-neutral)
 * fixed prefix placement
 *
 */
declare function TooltipProvider({ delayDuration, ...props }: React.ComponentProps<typeof TooltipPrimitive.Provider>): import("react/jsx-runtime").JSX.Element;
declare function Tooltip({ ...props }: React.ComponentProps<typeof TooltipPrimitive.Root>): import("react/jsx-runtime").JSX.Element;
declare function TooltipTrigger({ ...props }: React.ComponentProps<typeof TooltipPrimitive.Trigger>): import("react/jsx-runtime").JSX.Element;
declare function TooltipContent({ className, sideOffset, children, ...props }: React.ComponentProps<typeof TooltipPrimitive.Content>): import("react/jsx-runtime").JSX.Element;
export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider };

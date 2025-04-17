import * as React from "react";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
/** CHANGES FROM DEFAULT SHADCN
 *
 * Indicator changed to CircleCheck size-3 instead of Circle size-2
 * Added text-primary-foreground to Indicator
 * fixed prefix placement
 *
 */
declare function RadioGroup({ className, ...props }: React.ComponentProps<typeof RadioGroupPrimitive.Root>): import("react/jsx-runtime").JSX.Element;
declare function RadioGroupItem({ className, ...props }: React.ComponentProps<typeof RadioGroupPrimitive.Item>): import("react/jsx-runtime").JSX.Element;
export { RadioGroup, RadioGroupItem };

import * as React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
/** CHANGES FROM DEFAULT SHADCN
 *
 * fixed prefix placement
 *
 */
declare function Checkbox({ className, ...props }: React.ComponentProps<typeof CheckboxPrimitive.Root>): import("react/jsx-runtime").JSX.Element;
export { Checkbox };

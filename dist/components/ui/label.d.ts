import * as React from "react";
import * as LabelPrimitive from "@radix-ui/react-label";
/** CHANGES FROM DEFAULT SHADCN
 *
 * Added `required` prop
 * fixed prefix placement
 *
 */
declare function Label({ className, required, children, ...props }: React.ComponentProps<typeof LabelPrimitive.Root> & {
    required?: boolean;
}): import("react/jsx-runtime").JSX.Element;
export { Label };

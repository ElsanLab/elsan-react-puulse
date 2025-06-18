import * as React from "react";
import { Label as LabelPrimitive } from "radix-ui";
declare function Label({ className, required, children, ...props }: React.ComponentProps<typeof LabelPrimitive.Root> & {
    required?: boolean;
}): import("react/jsx-runtime").JSX.Element;
export { Label };

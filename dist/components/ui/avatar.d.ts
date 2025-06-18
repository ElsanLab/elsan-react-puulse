import * as React from "react";
import { Avatar as AvatarPrimitive } from "radix-ui";
declare function Avatar({ className, size, ...props }: React.ComponentProps<typeof AvatarPrimitive.Root> & {
    size?: "md" | "sm";
}): import("react/jsx-runtime").JSX.Element;
declare function AvatarImage({ className, ...props }: React.ComponentProps<typeof AvatarPrimitive.Image>): import("react/jsx-runtime").JSX.Element;
declare function AvatarFallback({ className, variant, ...props }: React.ComponentProps<typeof AvatarPrimitive.Fallback> & {
    variant?: "info" | "success" | "warning" | "destructive";
}): import("react/jsx-runtime").JSX.Element;
export { Avatar, AvatarImage, AvatarFallback };

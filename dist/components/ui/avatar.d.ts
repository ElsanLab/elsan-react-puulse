import * as React from "react";
import * as AvatarPrimitive from "@radix-ui/react-avatar";
declare const Avatar: React.FC<React.ComponentPropsWithRef<typeof AvatarPrimitive.Root>>;
declare function AvatarImage({ className, ...props }: React.ComponentPropsWithRef<typeof AvatarPrimitive.Image>): import("react/jsx-runtime").JSX.Element;
declare function AvatarFallback({ className, ...props }: React.ComponentProps<typeof AvatarPrimitive.Fallback>): import("react/jsx-runtime").JSX.Element;
export { Avatar, AvatarImage, AvatarFallback };

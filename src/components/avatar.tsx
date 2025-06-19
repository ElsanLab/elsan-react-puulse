import * as React from "react";
import { Avatar as AvatarPrimitive } from "radix-ui";

import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";

/* CHANGES FROM DEFAULT SHADCN
 *
 * Added size variant to Avatar
 * Added color variants to AvatarFallback
 *
 */
const avatarVariants = cva(
  "ep:relative ep:flex ep:shrink-0 ep:overflow-hidden ep:rounded-sm",
  {
    variants: {
      size: {
        md: "ep:size-10",
        sm: "ep:size-8",
      },
    },
    defaultVariants: {
      size: "md",
    },
  }
);

function Avatar({
  className,
  size,
  ...props
}: React.ComponentProps<typeof AvatarPrimitive.Root> & {
  size?: "md" | "sm";
}) {
  return (
    <AvatarPrimitive.Root
      data-slot="avatar"
      className={cn(avatarVariants({ size }), className)}
      {...props}
    />
  );
}

function AvatarImage({
  className,
  ...props
}: React.ComponentProps<typeof AvatarPrimitive.Image>) {
  return (
    <AvatarPrimitive.Image
      data-slot="avatar-image"
      className={cn("ep:aspect-square ep:size-full", className)}
      {...props}
    />
  );
}

const fallbackVariants = cva(
  "ep:flex ep:size-full ep:items-center ep:justify-center ep:rounded-sm",
  {
    variants: {
      variant: {
        info: "ep:bg-info ep:text-info-foreground",
        success: "ep:bg-success ep:text-success-foreground",
        warning: "ep:bg-warning ep:text-warning-foreground",
        destructive:
          "ep:bg-destructive-light ep:text-destructive-light-foreground",
      },
    },
    defaultVariants: {
      variant: "info",
    },
  }
);

function AvatarFallback({
  className,
  variant,
  ...props
}: React.ComponentProps<typeof AvatarPrimitive.Fallback> & {
  variant?: "info" | "success" | "warning" | "destructive";
}) {
  return (
    <AvatarPrimitive.Fallback
      data-slot="avatar-fallback"
      className={cn(fallbackVariants({ variant }), className)}
      {...props}
    />
  );
}

export { Avatar, AvatarImage, AvatarFallback };

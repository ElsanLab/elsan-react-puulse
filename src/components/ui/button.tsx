import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center cursor-pointer justify-center gap-2 whitespace-nowrap rounded-md text-sm font-semibol transition-[color,box-shadow] disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        primary:
          "bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",
        destructive:
          "bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40",
        outline:
          "border border-input bg-transparent shadow-xs hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      contentType: {
        default: "",
        icon: "",
      },
      size: {
        sm: "",
        md: "",
        lg: "",
        // icon: "size-9",
      },
    },
    compoundVariants: [
      {
        size: "sm",
        contentType: "default",
        className: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
      },
      {
        size: "md",
        contentType: "default",
        className: "h-9 px-4 py-2 has-[>svg]:px-3",
      },
      {
        size: "lg",
        contentType: "default",
        className: "h-10 rounded-md px-6 has-[>svg]:px-4",
      },
      {
        size: "sm",
        contentType: "icon",
        className: "size-8",
      },
      {
        size: "md",
        contentType: "icon",
        className: "size-9",
      },
      {
        size: "lg",
        contentType: "icon",
        className: "size-10",
      },
    ],
    defaultVariants: {
      variant: "primary",
      size: "md",
      contentType: "default",
    },
  }
);

function Button({
  className,
  variant,
  size,
  contentType,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, contentType, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };

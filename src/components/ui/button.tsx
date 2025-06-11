import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

/*CHANGES
 - variants:
  - default changed to primary
  - tertiary & destructiveLight created
 - size:
  - changed to "small", "medium", "large"
  - handled as compound with content variant
- content variant created
  - default means text + icon
  - icon means only icon
  - handle size in a compound

- added cursor-pointer
*/

const buttonVariants = cva(
  "ep:inline-flex ep:items-center ep:justify-center ep:rounded-md ep:whitespace-nowrap ep:cursor-pointer ep:text-sm ep:font-medium ep:transition-all ep:disabled:pointer-events-none ep:disabled:opacity-50 ep:[&_svg]:pointer-events-none ep:[&_svg:not([class*=size-])]:size-4 ep:shrink-0 ep:[&_svg]:shrink-0 ep:outline-none ep:focus-visible:border-ring ep:focus-visible:ring-ring/50 ep:focus-visible:ring-[3px] ep:aria-invalid:ring-destructive/20 ep:dark:aria-invalid:ring-destructive/40 ep:aria-invalid:border-destructive ep:disabled:opacity-50 ep:disabled:pointer-events-none",
  {
    variants: {
      variant: {
        primary:
          "ep:bg-primary ep:text-primary-foreground ep:hover:bg-gradient-to-b ep:hover:from-[var(--accent-hover)] ep:hover:from-0% ep:hover:to-[var(--accent-hover)] ep:hover:to-100%",
        secondary:
          "ep:bg-secondary ep:text-primary-light-foreground ep:hover:bg-gradient-to-b ep:hover:from-[var(--accent-hover)] ep:hover:from-0% ep:hover:to-[var(--accent-hover)] ep:hover:to-100%",
        tertiary:
          "ep:bg-secondary ep:text-foreground ep:hover:text-primary-light-foreground ep:hover:bg-gradient-to-b ep:hover:from-[var(--accent-hover)] ep:hover:from-0% ep:hover:to-[var(--accent-hover)] ep:hover:to-100%",
        ghost:
          "ep:bg-transparent ep:text-foreground ep:hover:bg-gradient-to-b ep:hover:from-[var(--accent-hover)] ep:hover:from-0% ep:hover:to-[var(--accent-hover)] ep:hover:to-100%",
        destructive:
          "ep:bg-destructive ep:text-destructive-foreground ep:hover:bg-gradient-to-b ep:hover:from-[var(--accent-hover)] ep:hover:from-0% ep:hover:to-[var(--accent-hover)] ep:hover:to-100%",
        destructiveLight:
          "ep:bg-destructive-light ep:text-destructive-light-foreground ep:hover:bg-gradient-to-b ep:hover:from-[var(--accent-hover)] ep:hover:from-0% ep:hover:to-[var(--accent-hover)] ep:hover:to-100%",
        link: "ep:bg-transparent ep:text-primary-light-foreground ep:hover:underline ep:underline-offset-4",
      },
      size: {
        small: "",
        medium: "",
        large: "",
      },
      content: {
        default: "",
        icon: "",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "medium",
      content: "default",
    },
    compoundVariants: [
      {
        size: "small",
        content: "default",
        className: "ep:px-2 ep:h-8 ep:gap-1",
      },
      {
        size: "small",
        content: "icon",
        className: "ep:size-8",
      },
      {
        size: "medium",
        content: "default",
        className: "ep:h-9 ep:px-3 ep:gap-2",
      },
      {
        size: "medium",
        content: "icon",
        className: "ep:size-9",
      },
      {
        size: "large",
        content: "default",
        className: "ep:h-10 ep:px-3 ep:gap-2",
      },
      {
        size: "large",
        content: "icon",
        className: "ep:size-10",
      },
    ],
  }
);

function Button({
  className,
  variant,
  size,
  content,
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
      className={cn(buttonVariants({ variant, size, content, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };

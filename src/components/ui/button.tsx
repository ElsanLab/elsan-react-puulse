import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

/** CHANGES FROM DEFAULT SHADCN
 *
 * Changed variants to 'primary', 'destructive', 'outline', 'secondary', 'ghost', 'link'
 * Changed sizes to 'sm', 'md', 'lg'
 * Added contentType variant & compounds with size+contentType
 * fixed prefix placement
 *
 */

const buttonVariants = cva(
  "ep:inline-flex ep:items-center ep:justify-center ep:gap-2 ep:whitespace-nowrap ep:rounded-md ep:text-sm ep:font-medium ep:transition-all ep:disabled:pointer-events-none ep:disabled:opacity-50 ep:[&_svg]:pointer-events-none ep:[&_svg:not([class*=size-])]:size-4 ep:shrink-0 ep:[&_svg]:shrink-0 ep:outline-none ep:focus-visible:border-ring ep:focus-visible:ring-ring/50 ep:focus-visible:ring-[3px] ep:aria-invalid:ring-destructive/20 ep:dark:aria-invalid:ring-destructive/40 ep:aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        primary:
          "ep:bg-primary ep:text-primary-foreground ep:shadow-xs ep:hover:bg-primary/90",
        destructive:
          "ep:bg-destructive ep:text-white ep:shadow-xs ep:hover:bg-destructive/90 ep:focus-visible:ring-destructive/20 ep:dark:focus-visible:ring-destructive/40",
        outline:
          "ep:border ep:border-input ep:bg-transparent ep:shadow-xs ep:hover:bg-accent ep:hover:text-accent-foreground",
        secondary:
          "ep:bg-secondary ep:text-secondary-foreground ep:shadow-xs ep:hover:bg-secondary/80",
        ghost: "ep:hover:bg-accent ep:hover:text-accent-foreground",
        link: "ep:text-primary ep:underline-offset-4 ep:hover:underline",
      },
      contentType: {
        default: "",
        icon: "",
      },
      size: {
        sm: "",
        md: "",
        lg: "",
      },
    },
    compoundVariants: [
      {
        size: "sm",
        contentType: "default",
        className:
          "ep:h-8 ep:rounded-md ep:gap-1.5 ep:px-3 ep:has-[>svg]:px-2.5",
      },
      {
        size: "md",
        contentType: "default",
        className: "ep:h-9 ep:px-4 ep:py-2 ep:has-[>svg]:px-3",
      },
      {
        size: "lg",
        contentType: "default",
        className: "ep:h-10 ep:rounded-md ep:px-6 ep:has-[>svg]:px-4",
      },
      {
        size: "sm",
        contentType: "icon",
        className: "ep:size-8",
      },
      {
        size: "md",
        contentType: "icon",
        className: "ep:size-9",
      },
      {
        size: "lg",
        contentType: "icon",
        className: "ep:size-10",
      },
    ],
    defaultVariants: {
      variant: "primary",
      size: "md",
      contentType: "default",
    },
  }
);

interface ButtonProps
  extends React.ComponentProps<"button">,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  className,
  variant,
  size,
  contentType,
  asChild = false,
  ...props
}) => {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, contentType, size, className }))}
      {...props}
    />
  );
};

export { Button, buttonVariants };
export type { ButtonProps };

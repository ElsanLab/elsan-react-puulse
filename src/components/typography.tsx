import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";
import { Slot as SlotPrimitive } from "radix-ui";

const variants = cva("", {
  variants: {
    variant: {
      heading2XL: "ep:heading2XL",
      headingXL: "ep:headingXL",
      headingLG: "ep:headingLG",
      headingMD: "ep:headingMD",
      headingSM: "ep:headingSM",
      headingXS: "ep:headingXS",
      heading2XS: "ep:heading2XS",
      bodyLG: "ep:bodyLG",
      bodyMD: "ep:bodyMD",
      bodySM: "ep:bodySM",
      bodyXS: "ep:bodyXS",
      assetSM: "ep:assetSM",
      assetXS: "ep:assetXS",
    },
  },

  defaultVariants: {
    variant: "bodyMD",
  },
});

function Typography({
  variant = "bodyMD",
  asChild = false,
  className,
  ...props
}: {
  asChild: boolean;
  className?: string;
  variant?:
    | "heading2XL"
    | "headingXL"
    | "headingLG"
    | "headingMD"
    | "headingSM"
    | "headingXS"
    | "heading2XS"
    | "bodyLG"
    | "bodyMD"
    | "bodySM"
    | "bodyXS"
    | "assetSM"
    | "assetXS";
}) {
  const Comp = asChild ? SlotPrimitive.Slot : "span";

  return <Comp className={cn(variants({ variant, className }))} {...props} />;
}

export { Typography, variants as typographyVariants };

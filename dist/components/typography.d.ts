declare const variants: (props?: ({
    variant?: "heading2XL" | "headingXL" | "headingLG" | "headingMD" | "headingSM" | "headingXS" | "heading2XS" | "bodyLG" | "bodyMD" | "bodySM" | "bodyXS" | "assetSM" | "assetXS" | null | undefined;
} & import("class-variance-authority/types").ClassProp) | undefined) => string;
declare function Typography({ variant, asChild, className, ...props }: {
    asChild: boolean;
    className?: string;
    variant?: "heading2XL" | "headingXL" | "headingLG" | "headingMD" | "headingSM" | "headingXS" | "heading2XS" | "bodyLG" | "bodyMD" | "bodySM" | "bodyXS" | "assetSM" | "assetXS";
}): import("react/jsx-runtime").JSX.Element;
export { Typography, variants as typographyVariants };

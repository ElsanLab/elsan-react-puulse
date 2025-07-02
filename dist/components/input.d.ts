import * as React from "react";
declare function Input({ className, type, ...props }: React.ComponentProps<"input"> & {
    left?: React.ReactNode;
    right?: React.ReactNode;
}): import("react/jsx-runtime").JSX.Element;
declare function CustomizableInput({ className, left, right, ...props }: React.ComponentProps<typeof Input> & {
    left?: React.ReactNode;
    right?: React.ReactNode;
}): import("react/jsx-runtime").JSX.Element;
declare function InputRenderer({ left, right, ...props }: React.ComponentProps<typeof CustomizableInput>): import("react/jsx-runtime").JSX.Element;
export { InputRenderer as Input };

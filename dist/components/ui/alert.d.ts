import * as React from "react";
declare function Alert({ className, variant, ...props }: React.ComponentProps<"div"> & {
    variant?: "info" | "success" | "warning" | "destructive";
}): import("react/jsx-runtime").JSX.Element;
declare function AlertTitle({ className, ...props }: React.ComponentProps<"div">): import("react/jsx-runtime").JSX.Element;
declare function AlertDescription({ className, ...props }: React.ComponentProps<"div">): import("react/jsx-runtime").JSX.Element;
export { Alert, AlertTitle, AlertDescription };

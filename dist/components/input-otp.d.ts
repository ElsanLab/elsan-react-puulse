import * as React from "react";
import { unstable_OneTimePasswordField as OneTimePasswordField } from "radix-ui";
import { Separator } from "./separator";
declare function OTPField({ children, className, name, ...props }: React.ComponentProps<typeof OneTimePasswordField.Root> & {}): import("react/jsx-runtime").JSX.Element;
declare function OTPGroup({ className, ...props }: React.ComponentProps<"div">): import("react/jsx-runtime").JSX.Element;
declare function OTPInput({ className, ...props }: React.ComponentProps<typeof OneTimePasswordField.Input>): import("react/jsx-runtime").JSX.Element;
declare function OTPSeparator({ className, ...props }: React.ComponentProps<typeof Separator>): import("react/jsx-runtime").JSX.Element;
export { OTPField, OTPGroup, OTPInput, OTPSeparator };

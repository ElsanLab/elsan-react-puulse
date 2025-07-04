import * as React from "react";
import { unstable_OneTimePasswordField as OneTimePasswordField } from "radix-ui";
import { cn } from "@/lib/utils";
import { Separator } from "./separator";

/*
CHANGES
 - based on radix's OneTimePasswordField (unstable): https://www.radix-ui.com/primitives/docs/components/one-time-password-field
*/

function OTPField({
  children,
  className,
  name,
  ...props
}: React.ComponentProps<typeof OneTimePasswordField.Root> & {}) {
  return (
    <OneTimePasswordField.Root
      {...props}
      className={cn(
        "ep:flex ep:w-fit ep:items-center ep:gap-2 ep:has-disabled:opacity-50",
        className
      )}
    >
      <OneTimePasswordField.HiddenInput name={name} />
      {children}
    </OneTimePasswordField.Root>
  );
}

function OTPGroup({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div className={cn("ep:flex ep:items-center", className)} {...props} />
  );
}

function OTPInput({
  className,
  ...props
}: React.ComponentProps<typeof OneTimePasswordField.Input>) {
  return (
    <OneTimePasswordField.Input
      {...props}
      className={cn(
        "ep:focus:border-ring ep:focus:ring-ring/50 ep:focus:aria-invalid:ring-destructive/20 ep:aria-invalid:border-destructive ep:focus:aria-invalid:border-destructive ep:border-border ep:relative ep:size-9 ep:border-y ep:border-r ep:text-sm ep:shadow-xs ep:transition-all ep:outline-none ep:first:rounded-l-md ep:first:border-l ep:last:rounded-r-md ep:focus:z-10 ep:focus:ring-[3px] ep:text-center ep:text-input-foreground",
        className
      )}
    />
  );
}

function OTPSeparator({
  className,
  ...props
}: React.ComponentProps<typeof Separator>) {
  return <Separator className={cn("ep:max-w-4", className)} {...props} />;
}

export { OTPField, OTPGroup, OTPInput, OTPSeparator };

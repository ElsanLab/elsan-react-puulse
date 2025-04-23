import * as React from "react";
import { OTPInput, OTPInputContext } from "input-otp";
import { MinusIcon } from "lucide-react";

import { cn } from "@/lib/utils";

/* CHANGES FROM DEFAULT SHADCN
 *
 * fixed prefix placement
 *
 */

function InputOTP({
  className,
  containerClassName,
  ...props
}: React.ComponentProps<typeof OTPInput> & {
  containerClassName?: string;
}) {
  return (
    <OTPInput
      data-slot="input-otp"
      containerClassName={cn(
        "ep:flex ep:items-center ep:gap-2 ep:has-disabled:opacity-50",
        containerClassName
      )}
      className={cn("ep:disabled:cursor-not-allowed", className)}
      {...props}
    />
  );
}

function InputOTPGroup({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="input-otp-group"
      className={cn("ep:flex ep:items-center", className)}
      {...props}
    />
  );
}

function InputOTPSlot({
  index,
  className,
  ...props
}: React.ComponentProps<"div"> & {
  index: number;
}) {
  const inputOTPContext = React.useContext(OTPInputContext);
  const { char, hasFakeCaret, isActive } = inputOTPContext?.slots[index] ?? {};

  return (
    <div
      data-slot="input-otp-slot"
      data-active={isActive}
      className={cn(
        "ep:data-[active=true]:border-ring ep:data-[active=true]:ring-ring/50 ep:data-[active=true]:aria-invalid:ring-destructive/20 ep:dark:data-[active=true]:aria-invalid:ring-destructive/40 ep:aria-invalid:border-destructive ep:data-[active=true]:aria-invalid:border-destructive ep:dark:bg-input/30 ep:border-input ep:relative ep:flex ep:h-9 ep:w-9 ep:items-center ep:justify-center ep:border-y ep:border-r ep:text-sm ep:shadow-xs ep:transition-all ep:outline-none ep:first:rounded-l-md ep:first:border-l ep:last:rounded-r-md ep:data-[active=true]:z-10 ep:data-[active=true]:ring-[3px]",
        className
      )}
      {...props}
    >
      {char}
      {hasFakeCaret && (
        <div className="ep:pointer-events-none ep:absolute ep:inset-0 ep:flex ep:items-center ep:justify-center">
          <div className="ep:animate-caret-blink ep:bg-foreground ep:h-4 ep:w-px ep:duration-1000" />
        </div>
      )}
    </div>
  );
}

function InputOTPSeparator({ ...props }: React.ComponentProps<"div">) {
  return (
    <div data-slot="input-otp-separator" role="separator" {...props}>
      <MinusIcon />
    </div>
  );
}

export { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator };

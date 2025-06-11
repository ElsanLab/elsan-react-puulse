import * as React from "react";

import { cn } from "@/lib/utils";

/* 

CHANGES

 - border-border instead of border-input
 - ep:focus-visible:border-primary-light-border instead of ep:focus-visible:border-ring
 - ep:focus-visible:ring-[2px] instead of ep:focus-visible:ring-[3px]
 - ep:rounded-sm instead of ep:rounded-md

*/

function Input({
  className,
  type,
  icon,
  ...props
}: { icon: React.ReactNode | undefined } & React.ComponentProps<"input">) {
  return (
    <div className="ep:relative ep:flex ep:gap-2">
      <input
        type={type}
        data-slot="input"
        className={cn(
          "ep:file:text-foreground ep:placeholder:text-muted-foreground ep:selection:bg-primary ep:selection:text-primary-foreground ep:dark:bg-input/30 ep:border-border ep:flex ep:h-9 ep:w-full ep:min-w-0 ep:rounded-sm ep:border ep:bg-transparent ep:py-1 ep:text-base ep:shadow-xs ep:transition-[color,box-shadow] ep:outline-none ep:file:inline-flex ep:file:h-7 ep:file:border-0 ep:file:bg-transparent ep:file:text-sm ep:file:font-medium ep:disabled:pointer-events-none ep:disabled:cursor-not-allowed ep:disabled:opacity-50 ep:md:text-sm",
          "ep:focus-visible:border-primary-light-border ep:focus-visible:ring-ring ep:focus-visible:ring-[2px]",
          "ep:aria-invalid:ring-destructive/20 ep:dark:aria-invalid:ring-destructive/40 ep:aria-invalid:border-destructive",
          {
            "ep:pl-10 pr-3": !!icon,
            "ep:px-3": !icon,
          },
          className
        )}
        {...props}
      />
      {icon && (
        <div className="ep:absolute ep:top-1/2 ep:left-0 ep:size-8.5 ep:items-center ep:justify-center ep:flex ep:-translate-y-1/2 ep:border-r ep:border-border ep:text-input-foreground ep:[&_svg:not([class*=size-])]:size-4">
          {icon}
        </div>
      )}
    </div>
  );
}

export { Input };

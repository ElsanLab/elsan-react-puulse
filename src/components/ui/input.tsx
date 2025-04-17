import * as React from "react";

import { cn } from "@/lib/utils";

/** CHANGES FROM DEFAULT SHADCN
 *
 * fixed prefix placement
 *
 */

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "ep:file:text-foreground ep:placeholder:text-muted-foreground ep:selection:bg-primary ep:selection:text-primary-foreground ep:dark:bg-input/30 ep:border-input ep:flex ep:h-9 ep:w-full ep:min-w-0 ep:rounded-md ep:border ep:bg-transparent ep:px-3 ep:py-1 ep:text-base ep:shadow-xs ep:transition-[color,box-shadow] ep:outline-none ep:file:inline-flex ep:file:h-7 ep:file:border-0 ep:file:bg-transparent ep:file:text-sm ep:file:font-medium ep:disabled:pointer-events-none ep:disabled:cursor-not-allowed ep:disabled:opacity-50 ep:md:text-sm",
        "ep:focus-visible:border-ring ep:focus-visible:ring-ring/50 ep:focus-visible:ring-[3px]",
        "ep:aria-invalid:ring-destructive/20 ep:dark:aria-invalid:ring-destructive/40 ep:aria-invalid:border-destructive",
        className
      )}
      {...props}
    />
  );
}

export { Input };

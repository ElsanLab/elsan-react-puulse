import * as React from "react";

import { cn } from "@/lib/utils";

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "ep:border-border ep:placeholder:text-muted-foreground ep:focus-visible:border-ring ep:focus-visible:ring-ring/50 ep:aria-invalid:ring-destructive/20 ep:dark:aria-invalid:ring-destructive/40 ep:aria-invalid:border-destructive ep:dark:bg-input/30 ep:flex ep:field-sizing-content ep:min-h-16 ep:w-full ep:rounded-sm ep:border ep:bg-transparent ep:px-3 ep:py-2 ep:text-base ep:shadow-xs ep:transition-[color,box-shadow] ep:outline-none ep:focus-visible:ring-[3px] ep:disabled:cursor-not-allowed ep:disabled:opacity-50 ep:md:text-sm",
        className
      )}
      {...props}
    />
  );
}

export { Textarea };

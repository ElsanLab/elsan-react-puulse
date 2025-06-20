import * as React from "react";

import { cn } from "@/lib/utils";
import { Separator as SeparatorPrimitive } from "radix-ui";

function Separator({
  className,
  orientation = "horizontal",
  decorative = true,
  ...props
}: React.ComponentProps<typeof SeparatorPrimitive.Root>) {
  return (
    <SeparatorPrimitive.Root
      data-slot="separator"
      decorative={decorative}
      orientation={orientation}
      className={cn(
        "ep:bg-border ep:shrink-0 ep:data-[orientation=horizontal]:h-px ep:data-[orientation=horizontal]:w-full ep:data-[orientation=vertical]:h-full ep:data-[orientation=vertical]:w-px",
        className
      )}
      {...props}
    />
  );
}

export { Separator };

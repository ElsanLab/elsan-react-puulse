import * as React from "react";
import { Tabs as TabsPrimitive } from "radix-ui";

import { cn } from "@/lib/utils";

function Tabs({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Root>) {
  return (
    <TabsPrimitive.Root
      data-slot="tabs"
      className={cn("ep:flex ep:flex-col ep:gap-2", className)}
      {...props}
    />
  );
}

function TabsList({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.List>) {
  return (
    <TabsPrimitive.List
      data-slot="tabs-list"
      className={cn(
        "ep:bg-muted ep:text-muted-foreground ep:inline-flex ep:h-9 ep:w-fit ep:items-center ep:justify-center ep:rounded-lg ep:p-[3px]",
        className
      )}
      {...props}
    />
  );
}

function TabsTrigger({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Trigger>) {
  return (
    <TabsPrimitive.Trigger
      data-slot="tabs-trigger"
      className={cn(
        "ep:focus-visible:border-ring ep:focus-visible:ring-ring/50 ep:focus-visible:outline-ring ep:text-foreground ep:inline-flex ep:h-[calc(100%-1px)] ep:flex-1 ep:items-center ep:justify-center ep:gap-1.5 ep:rounded-sm ep:border ep:border-transparent ep:px-2 ep:py-1 ep:text-sm ep:font-medium ep:whitespace-nowrap  ep:focus-visible:ring-[3px] ep:focus-visible:outline-1 ep:disabled:pointer-events-none ep:disabled:opacity-50 ep:[&_svg]:pointer-events-none ep:[&_svg]:shrink-0 ep:[&_svg:not([class*=size-])]:size-4",
        "ep:data-[state=active]:bg-primary ep:data-[state=active]:text-primary-foreground ep:hover:bg-accent ep:active:text-primary",
        className
      )}
      {...props}
    />
  );
}

function TabsContent({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Content>) {
  return (
    <TabsPrimitive.Content
      data-slot="tabs-content"
      className={cn("ep:flex-1 ep:outline-none", className)}
      {...props}
    />
  );
}

export { Tabs, TabsList, TabsTrigger, TabsContent };

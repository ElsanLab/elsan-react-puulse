"use client";

import * as React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";

import { cn } from "@/lib/utils";

/** CHANGES FROM DEFAULT SHADCN
 *
 * TabsTrigger state active changed background to bg-primary instead of bg-background
 * TabsTrigger state active changed text color to text-foreground instead of text-primary
 *
 * fixed prefix placement
 *
 */

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
        "ep:data-[state=active]:bg-primary ep:data-[state=active]:text-primary-foreground ep:dark:data-[state=active]:text-primary-foreground ep:focus-visible:border-ring ep:focus-visible:ring-ring/50 ep:focus-visible:outline-ring ep:dark:data-[state=active]:border-input ep:dark:data-[state=active]:bg-input/30 ep:text-foreground ep:dark:text-muted-foreground ep:inline-flex ep:h-[calc(100%-1px)] ep:flex-1 ep:items-center ep:justify-center ep:gap-1.5 ep:rounded-md ep:border ep:border-transparent ep:px-2 ep:py-1 ep:text-sm ep:font-medium ep:whitespace-nowrap ep:transition-[color,box-shadow] ep:focus-visible:ring-[3px] ep:focus-visible:outline-1 ep:disabled:pointer-events-none ep:disabled:opacity-50 ep:data-[state=active]:shadow-sm ep:[&_svg]:pointer-events-none ep:[&_svg]:shrink-0 ep:[&_svg:not([class*=size-])]:size-4",
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

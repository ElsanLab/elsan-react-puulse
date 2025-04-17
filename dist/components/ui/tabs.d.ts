import * as React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";
/** CHANGES FROM DEFAULT SHADCN
 *
 * TabsTrigger state active changed background to bg-primary instead of bg-background
 * TabsTrigger state active changed text color to text-foreground instead of text-primary
 *
 * fixed prefix placement
 *
 */
declare function Tabs({ className, ...props }: React.ComponentProps<typeof TabsPrimitive.Root>): import("react/jsx-runtime").JSX.Element;
declare function TabsList({ className, ...props }: React.ComponentProps<typeof TabsPrimitive.List>): import("react/jsx-runtime").JSX.Element;
declare function TabsTrigger({ className, ...props }: React.ComponentProps<typeof TabsPrimitive.Trigger>): import("react/jsx-runtime").JSX.Element;
declare function TabsContent({ className, ...props }: React.ComponentProps<typeof TabsPrimitive.Content>): import("react/jsx-runtime").JSX.Element;
export { Tabs, TabsList, TabsTrigger, TabsContent };

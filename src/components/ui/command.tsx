import * as React from "react";
import { Command as CommandPrimitive } from "cmdk";
import { SearchIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

/** CHANGES FROM DEFAULT SHADCN
 *
 * fixed prefix placement
 *
 */

function Command({
  className,
  ...props
}: React.ComponentProps<typeof CommandPrimitive>) {
  return (
    <CommandPrimitive
      data-slot="command"
      className={cn(
        "ep:bg-popover ep:text-popover-foreground ep:flex ep:h-full ep:w-full ep:flex-col ep:overflow-hidden ep:rounded-md",
        className
      )}
      {...props}
    />
  );
}

function CommandDialog({
  title = "Command Palette",
  description = "Search for a command to run...",
  children,
  ...props
}: React.ComponentProps<typeof Dialog> & {
  title?: string;
  description?: string;
}) {
  return (
    <Dialog {...props}>
      <DialogHeader className="ep:sr-only">
        <DialogTitle>{title}</DialogTitle>
        <DialogDescription>{description}</DialogDescription>
      </DialogHeader>
      <DialogContent className="ep:overflow-hidden ep:p-0">
        <Command className="ep:[&_[cmdk-group-heading]]:text-muted-foreground ep:**:data-[slot=command-input-wrapper]:h-12 ep:[&_[cmdk-group-heading]]:px-2 ep:[&_[cmdk-group-heading]]:font-medium ep:[&_[cmdk-group]]:px-2 ep:[&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 ep:[&_[cmdk-input-wrapper]_svg]:h-5 ep:[&_[cmdk-input-wrapper]_svg]:w-5 ep:[&_[cmdk-input]]:h-12 ep:[&_[cmdk-item]]:px-2 ep:[&_[cmdk-item]]:py-3 ep:[&_[cmdk-item]_svg]:h-5 ep:[&_[cmdk-item]_svg]:w-5">
          {children}
        </Command>
      </DialogContent>
    </Dialog>
  );
}

function CommandInput({
  className,
  ...props
}: React.ComponentProps<typeof CommandPrimitive.Input>) {
  return (
    <div
      data-slot="command-input-wrapper"
      className="ep:flex ep:h-9 ep:items-center ep:gap-2 ep:border-b ep:px-3"
    >
      <SearchIcon className="ep:size-4 ep:shrink-0 ep:opacity-50" />
      <CommandPrimitive.Input
        data-slot="command-input"
        className={cn(
          "ep:placeholder:text-muted-foreground ep:flex ep:h-10 ep:w-full ep:rounded-md ep:bg-transparent ep:py-3 ep:text-sm ep:outline-hidden ep:disabled:cursor-not-allowed ep:disabled:opacity-50",
          className
        )}
        {...props}
      />
    </div>
  );
}

function CommandList({
  className,
  ...props
}: React.ComponentProps<typeof CommandPrimitive.List>) {
  return (
    <CommandPrimitive.List
      data-slot="command-list"
      className={cn(
        "ep:max-h-[300px] ep:scroll-py-1 ep:overflow-x-hidden ep:overflow-y-auto",
        className
      )}
      {...props}
    />
  );
}

function CommandEmpty({
  ...props
}: React.ComponentProps<typeof CommandPrimitive.Empty>) {
  return (
    <CommandPrimitive.Empty
      data-slot="command-empty"
      className="ep:py-6 ep:text-center ep:text-sm"
      {...props}
    />
  );
}

function CommandGroup({
  className,
  ...props
}: React.ComponentProps<typeof CommandPrimitive.Group>) {
  return (
    <CommandPrimitive.Group
      data-slot="command-group"
      className={cn(
        "ep:text-foreground ep:[&_[cmdk-group-heading]]:text-muted-foreground ep:overflow-hidden ep:p-1 ep:[&_[cmdk-group-heading]]:px-2 ep:[&_[cmdk-group-heading]]:py-1.5 ep:[&_[cmdk-group-heading]]:text-xs ep:[&_[cmdk-group-heading]]:font-medium",
        className
      )}
      {...props}
    />
  );
}

function CommandSeparator({
  className,
  ...props
}: React.ComponentProps<typeof CommandPrimitive.Separator>) {
  return (
    <CommandPrimitive.Separator
      data-slot="command-separator"
      className={cn("ep:bg-border ep:-mx-1 ep:h-px", className)}
      {...props}
    />
  );
}

function CommandItem({
  className,
  ...props
}: React.ComponentProps<typeof CommandPrimitive.Item>) {
  return (
    <CommandPrimitive.Item
      data-slot="command-item"
      className={cn(
        "ep:data-[selected=true]:bg-accent ep:data-[selected=true]:text-accent-foreground ep:[&_svg:not([class*=text-])]:text-muted-foreground ep:relative ep:flex ep:cursor-default ep:items-center ep:gap-2 ep:rounded-sm ep:px-2 ep:py-1.5 ep:text-sm ep:outline-hidden ep:select-none ep:data-[disabled=true]:pointer-events-none ep:data-[disabled=true]:opacity-50 ep:[&_svg]:pointer-events-none ep:[&_svg]:shrink-0 ep:[&_svg:not([class*=size-])]:size-4",
        className
      )}
      {...props}
    />
  );
}

function CommandShortcut({
  className,
  ...props
}: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="command-shortcut"
      className={cn(
        "ep:text-muted-foreground ep:ml-auto ep:text-xs ep:tracking-widest",
        className
      )}
      {...props}
    />
  );
}

export {
  Command,
  CommandDialog,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandShortcut,
  CommandSeparator,
};

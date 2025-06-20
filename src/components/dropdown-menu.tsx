import * as React from "react"
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu"
import { CheckIcon, ChevronRightIcon, CircleIcon } from "lucide-react"

import { cn } from "@/lib/utils"

function DropdownMenu({
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Root>) {
  return <DropdownMenuPrimitive.Root data-slot="dropdown-menu" {...props} />
}

function DropdownMenuPortal({
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Portal>) {
  return (
    <DropdownMenuPrimitive.Portal data-slot="dropdown-menu-portal" {...props} />
  )
}

function DropdownMenuTrigger({
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Trigger>) {
  return (
    <DropdownMenuPrimitive.Trigger
      data-slot="dropdown-menu-trigger"
      {...props}
    />
  )
}

function DropdownMenuContent({
  className,
  sideOffset = 4,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Content>) {
  return (
    <DropdownMenuPrimitive.Portal>
      <DropdownMenuPrimitive.Content
        data-slot="dropdown-menu-content"
        sideOffset={sideOffset}
        className={cn(
          "ep:bg-popover ep:text-popover-foreground ep:data-[state=open]:animate-in ep:data-[state=closed]:animate-out ep:data-[state=closed]:fade-out-0 ep:data-[state=open]:fade-in-0 ep:data-[state=closed]:zoom-out-95 ep:data-[state=open]:zoom-in-95 ep:data-[side=bottom]:slide-in-from-top-2 ep:data-[side=left]:slide-in-from-right-2 ep:data-[side=right]:slide-in-from-left-2 ep:data-[side=top]:slide-in-from-bottom-2 ep:z-50 ep:max-h-(--radix-dropdown-menu-content-available-height) ep:min-w-[8rem] ep:origin-(--radix-dropdown-menu-content-transform-origin) ep:overflow-x-hidden ep:overflow-y-auto ep:rounded-md ep:border ep:p-1 ep:shadow-md",
          className
        )}
        {...props}
      />
    </DropdownMenuPrimitive.Portal>
  )
}

function DropdownMenuGroup({
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Group>) {
  return (
    <DropdownMenuPrimitive.Group data-slot="dropdown-menu-group" {...props} />
  )
}

function DropdownMenuItem({
  className,
  inset,
  variant = "default",
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Item> & {
  inset?: boolean
  variant?: "default" | "destructive"
}) {
  return (
    <DropdownMenuPrimitive.Item
      data-slot="dropdown-menu-item"
      data-inset={inset}
      data-variant={variant}
      className={cn(
        "ep:focus:bg-accent ep:focus:text-accent-foreground ep:data-[variant=destructive]:text-destructive ep:data-[variant=destructive]:focus:bg-destructive/10 ep:dark:data-[variant=destructive]:focus:bg-destructive/20 ep:data-[variant=destructive]:focus:text-destructive ep:data-[variant=destructive]:*:[svg]:!text-destructive ep:[&_svg:not([class*=text-])]:text-muted-foreground ep:relative ep:flex ep:cursor-default ep:items-center ep:gap-2 ep:rounded-sm ep:px-2 ep:py-1.5 ep:text-sm ep:outline-hidden ep:select-none ep:data-[disabled]:pointer-events-none ep:data-[disabled]:opacity-50 ep:data-[inset]:pl-8 ep:[&_svg]:pointer-events-none ep:[&_svg]:shrink-0 ep:[&_svg:not([class*=size-])]:size-4",
        className
      )}
      {...props}
    />
  )
}

function DropdownMenuCheckboxItem({
  className,
  children,
  checked,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.CheckboxItem>) {
  return (
    <DropdownMenuPrimitive.CheckboxItem
      data-slot="dropdown-menu-checkbox-item"
      className={cn(
        "ep:focus:bg-accent ep:focus:text-accent-foreground ep:relative ep:flex ep:cursor-default ep:items-center ep:gap-2 ep:rounded-sm ep:py-1.5 ep:pr-2 ep:pl-8 ep:text-sm ep:outline-hidden ep:select-none ep:data-[disabled]:pointer-events-none ep:data-[disabled]:opacity-50 ep:[&_svg]:pointer-events-none ep:[&_svg]:shrink-0 ep:[&_svg:not([class*=size-])]:size-4",
        className
      )}
      checked={checked}
      {...props}
    >
      <span className="ep:pointer-events-none ep:absolute ep:left-2 ep:flex ep:size-3.5 ep:items-center ep:justify-center">
        <DropdownMenuPrimitive.ItemIndicator>
          <CheckIcon className="ep:size-4" />
        </DropdownMenuPrimitive.ItemIndicator>
      </span>
      {children}
    </DropdownMenuPrimitive.CheckboxItem>
  )
}

function DropdownMenuRadioGroup({
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.RadioGroup>) {
  return (
    <DropdownMenuPrimitive.RadioGroup
      data-slot="dropdown-menu-radio-group"
      {...props}
    />
  )
}

function DropdownMenuRadioItem({
  className,
  children,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.RadioItem>) {
  return (
    <DropdownMenuPrimitive.RadioItem
      data-slot="dropdown-menu-radio-item"
      className={cn(
        "ep:focus:bg-accent ep:focus:text-accent-foreground ep:relative ep:flex ep:cursor-default ep:items-center ep:gap-2 ep:rounded-sm ep:py-1.5 ep:pr-2 ep:pl-8 ep:text-sm ep:outline-hidden ep:select-none ep:data-[disabled]:pointer-events-none ep:data-[disabled]:opacity-50 ep:[&_svg]:pointer-events-none ep:[&_svg]:shrink-0 ep:[&_svg:not([class*=size-])]:size-4",
        className
      )}
      {...props}
    >
      <span className="ep:pointer-events-none ep:absolute ep:left-2 ep:flex ep:size-3.5 ep:items-center ep:justify-center">
        <DropdownMenuPrimitive.ItemIndicator>
          <CircleIcon className="ep:size-2 ep:fill-current" />
        </DropdownMenuPrimitive.ItemIndicator>
      </span>
      {children}
    </DropdownMenuPrimitive.RadioItem>
  )
}

function DropdownMenuLabel({
  className,
  inset,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Label> & {
  inset?: boolean
}) {
  return (
    <DropdownMenuPrimitive.Label
      data-slot="dropdown-menu-label"
      data-inset={inset}
      className={cn(
        "ep:px-2 ep:py-1.5 ep:text-sm ep:font-medium ep:data-[inset]:pl-8",
        className
      )}
      {...props}
    />
  )
}

function DropdownMenuSeparator({
  className,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Separator>) {
  return (
    <DropdownMenuPrimitive.Separator
      data-slot="dropdown-menu-separator"
      className={cn("ep:bg-border ep:-mx-1 ep:my-1 ep:h-px", className)}
      {...props}
    />
  )
}

function DropdownMenuShortcut({
  className,
  ...props
}: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="dropdown-menu-shortcut"
      className={cn(
        "ep:text-muted-foreground ep:ml-auto ep:text-xs ep:tracking-widest",
        className
      )}
      {...props}
    />
  )
}

function DropdownMenuSub({
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Sub>) {
  return <DropdownMenuPrimitive.Sub data-slot="dropdown-menu-sub" {...props} />
}

function DropdownMenuSubTrigger({
  className,
  inset,
  children,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.SubTrigger> & {
  inset?: boolean
}) {
  return (
    <DropdownMenuPrimitive.SubTrigger
      data-slot="dropdown-menu-sub-trigger"
      data-inset={inset}
      className={cn(
        "ep:focus:bg-accent ep:focus:text-accent-foreground ep:data-[state=open]:bg-accent ep:data-[state=open]:text-accent-foreground ep:flex ep:cursor-default ep:items-center ep:rounded-sm ep:px-2 ep:py-1.5 ep:text-sm ep:outline-hidden ep:select-none ep:data-[inset]:pl-8",
        className
      )}
      {...props}
    >
      {children}
      <ChevronRightIcon className="ep:ml-auto ep:size-4" />
    </DropdownMenuPrimitive.SubTrigger>
  )
}

function DropdownMenuSubContent({
  className,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.SubContent>) {
  return (
    <DropdownMenuPrimitive.SubContent
      data-slot="dropdown-menu-sub-content"
      className={cn(
        "ep:bg-popover ep:text-popover-foreground ep:data-[state=open]:animate-in ep:data-[state=closed]:animate-out ep:data-[state=closed]:fade-out-0 ep:data-[state=open]:fade-in-0 ep:data-[state=closed]:zoom-out-95 ep:data-[state=open]:zoom-in-95 ep:data-[side=bottom]:slide-in-from-top-2 ep:data-[side=left]:slide-in-from-right-2 ep:data-[side=right]:slide-in-from-left-2 ep:data-[side=top]:slide-in-from-bottom-2 ep:z-50 ep:min-w-[8rem] ep:origin-(--radix-dropdown-menu-content-transform-origin) ep:overflow-hidden ep:rounded-md ep:border ep:p-1 ep:shadow-lg",
        className
      )}
      {...props}
    />
  )
}

export {
  DropdownMenu,
  DropdownMenuPortal,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
}

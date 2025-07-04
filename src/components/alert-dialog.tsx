import * as React from "react";
import * as AlertDialogPrimitive from "@radix-ui/react-alert-dialog";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/button";

/* CHANGES FROM DEFAULT SHADCN
 *
 * - AlertDialogCancel : change variant to "ghost"
 * - AlertDialogAction : add variant prop with "primary" and "destructive" options
 */

function AlertDialog({
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Root>) {
  return <AlertDialogPrimitive.Root data-slot="alert-dialog" {...props} />;
}

function AlertDialogTrigger({
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Trigger>) {
  return (
    <AlertDialogPrimitive.Trigger data-slot="alert-dialog-trigger" {...props} />
  );
}

function AlertDialogPortal({
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Portal>) {
  return (
    <AlertDialogPrimitive.Portal data-slot="alert-dialog-portal" {...props} />
  );
}

function AlertDialogOverlay({
  className,
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Overlay>) {
  return (
    <AlertDialogPrimitive.Overlay
      data-slot="alert-dialog-overlay"
      className={cn(
        "ep:data-[state=open]:animate-in ep:data-[state=closed]:animate-out ep:data-[state=closed]:fade-out-0 ep:data-[state=open]:fade-in-0 ep:fixed ep:inset-0 ep:z-50 ep:bg-black/50",
        className
      )}
      {...props}
    />
  );
}

function AlertDialogContent({
  className,
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Content>) {
  return (
    <AlertDialogPortal>
      <AlertDialogOverlay />
      <AlertDialogPrimitive.Content
        data-slot="alert-dialog-content"
        className={cn(
          "ep:bg-background ep:data-[state=open]:animate-in ep:data-[state=closed]:animate-out ep:data-[state=closed]:fade-out-0 ep:data-[state=open]:fade-in-0 ep:data-[state=closed]:zoom-out-95 ep:data-[state=open]:zoom-in-95 ep:fixed ep:top-[50%] ep:left-[50%] ep:z-50 ep:grid ep:w-full ep:max-w-[calc(100%-2rem)] ep:translate-x-[-50%] ep:translate-y-[-50%] ep:gap-4 ep:rounded-lg ep:border ep:p-6 ep:shadow-lg ep:duration-200 ep:sm:max-w-lg",
          className
        )}
        {...props}
      />
    </AlertDialogPortal>
  );
}

function AlertDialogHeader({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-dialog-header"
      className={cn(
        "ep:flex ep:flex-col ep:gap-2 ep:text-center ep:sm:text-left",
        className
      )}
      {...props}
    />
  );
}

function AlertDialogFooter({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-dialog-footer"
      className={cn(
        "ep:flex ep:flex-col-reverse ep:gap-2 ep:sm:flex-row ep:sm:justify-end",
        className
      )}
      {...props}
    />
  );
}

function AlertDialogTitle({
  className,
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Title>) {
  return (
    <AlertDialogPrimitive.Title
      data-slot="alert-dialog-title"
      className={cn("ep:text-lg ep:font-semibold", className)}
      {...props}
    />
  );
}

function AlertDialogDescription({
  className,
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Description>) {
  return (
    <AlertDialogPrimitive.Description
      data-slot="alert-dialog-description"
      className={cn("ep:text-muted-foreground ep:text-sm", className)}
      {...props}
    />
  );
}

function AlertDialogAction({
  variant = "primary",
  className,
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Action> & {
  variant?:
    | "primary"
    | "destructive"
}) {
  return (
    <AlertDialogPrimitive.Action
      className={cn(buttonVariants({ variant: variant }), className)}
      {...props}
    />
  );
}

function AlertDialogCancel({
  className,
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Cancel>) {
  return (
    <AlertDialogPrimitive.Cancel
      className={cn(buttonVariants({ variant: "ghost" }), className)}
      {...props}
    />
  );
}

export {
  AlertDialog,
  AlertDialogPortal,
  AlertDialogOverlay,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogAction,
  AlertDialogCancel,
};

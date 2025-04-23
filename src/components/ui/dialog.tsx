"use client";

import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { XIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";

/* CHANGES FROM DEFAULT SHADCN
 *
 * Added size variants, with md as default size
 * fixed prefix placement
 *
 */

function Dialog({
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Root>) {
  return <DialogPrimitive.Root data-slot="dialog" {...props} />;
}

function DialogTrigger({
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Trigger>) {
  return <DialogPrimitive.Trigger data-slot="dialog-trigger" {...props} />;
}

function DialogPortal({
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Portal>) {
  return <DialogPrimitive.Portal data-slot="dialog-portal" {...props} />;
}

function DialogClose({
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Close>) {
  return <DialogPrimitive.Close data-slot="dialog-close" {...props} />;
}

function DialogOverlay({
  className,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Overlay>) {
  return (
    <DialogPrimitive.Overlay
      data-slot="dialog-overlay"
      className={cn(
        "ep:data-[state=open]:animate-in ep:data-[state=closed]:animate-out ep:data-[state=closed]:fade-out-0 ep:data-[state=open]:fade-in-0 ep:fixed ep:inset-0 ep:z-50 ep:bg-black/50",
        className
      )}
      {...props}
    />
  );
}

const dialogVariants = cva(
  "ep:bg-background ep:data-[state=open]:animate-in ep:data-[state=closed]:animate-out ep:data-[state=closed]:fade-out-0 ep:data-[state=open]:fade-in-0 ep:data-[state=closed]:zoom-out-95 ep:data-[state=open]:zoom-in-95 ep:fixed ep:top-[50%] ep:left-[50%] ep:z-50 ep:grid ep:w-full ep:max-w-[calc(100%-2rem)] ep:translate-x-[-50%] ep:translate-y-[-50%] ep:gap-4 ep:rounded-lg ep:border ep:p-6 ep:shadow-lg ep:duration-200 ep:sm:max-w-lg",
  {
    variants: {
      size: {
        sm: "ep:w-full ep:sm:w-dialog-sm",
        md: "ep:w-full ep:sm:w-dialog-md",
        lg: "ep:w-full ep:md:w-dialog-lg",
        xl: "ep:w-full ep:lg:w-dialog-xl",
      },
    },
    defaultVariants: {
      size: "md",
    },
  }
);

function DialogContent({
  size = "md",
  className,
  children,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Content> & {
  size?: "sm" | "md" | "lg" | "xl";
}) {
  return (
    <DialogPortal data-slot="dialog-portal">
      <DialogOverlay />
      <DialogPrimitive.Content
        data-slot="dialog-content"
        className={cn(dialogVariants({ size }), className)}
        {...props}
      >
        {children}
        <DialogPrimitive.Close className="ep:ring-offset-background focus:ep:ring-ring data-[state=open]:ep:bg-accent data-[state=open]:ep:text-muted-foreground ep:absolute ep:top-4 ep:right-4 ep:rounded-xs ep:opacity-70 ep:transition-opacity hover:ep:opacity-100 focus:ep:ring-2 focus:ep:ring-offset-2 focus:ep:outline-hidden disabled:ep:pointer-events-none [&_svg]:ep:pointer-events-none [&_svg]:ep:shrink-0 [&_svg:not([class*=size-])]:ep:size-4">
          <XIcon />
          <span className="ep:sr-only">Close</span>
        </DialogPrimitive.Close>
      </DialogPrimitive.Content>
    </DialogPortal>
  );
}

function DialogHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="dialog-header"
      className={cn(
        "ep:flex ep:flex-col ep:gap-2 ep:text-center sm:ep:text-left",
        className
      )}
      {...props}
    />
  );
}

function DialogFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="dialog-footer"
      className={cn(
        "ep:flex ep:flex-col-reverse ep:gap-2 ep:sm:flex-row ep:sm:justify-end",
        className
      )}
      {...props}
    />
  );
}

function DialogTitle({
  className,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Title>) {
  return (
    <DialogPrimitive.Title
      data-slot="dialog-title"
      className={cn("ep:text-lg ep:leading-none ep:font-semibold", className)}
      {...props}
    />
  );
}

function DialogDescription({
  className,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Description>) {
  return (
    <DialogPrimitive.Description
      data-slot="dialog-description"
      className={cn("ep:text-muted-foreground ep:text-sm", className)}
      {...props}
    />
  );
}

export {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
};

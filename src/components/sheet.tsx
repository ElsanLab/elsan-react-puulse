import * as React from "react";
import * as SheetPrimitive from "@radix-ui/react-dialog";
import { XIcon } from "lucide-react";

import { cn } from "@/lib/utils";

/* CHANGES FROM DEFAULT SHADCN
 *
 * - add SheetBody
 * - remove side prop and styles
 */

function Sheet({ ...props }: React.ComponentProps<typeof SheetPrimitive.Root>) {
  return <SheetPrimitive.Root data-slot="sheet" {...props} />;
}

function SheetTrigger({
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Trigger>) {
  return <SheetPrimitive.Trigger data-slot="sheet-trigger" {...props} />;
}

function SheetClose({
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Close>) {
  return <SheetPrimitive.Close data-slot="sheet-close" {...props} />;
}

function SheetPortal({
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Portal>) {
  return <SheetPrimitive.Portal data-slot="sheet-portal" {...props} />;
}

function SheetOverlay({
  className,
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Overlay>) {
  return (
    <SheetPrimitive.Overlay
      data-slot="sheet-overlay"
      className={cn(
        "ep:data-[state=open]:animate-in ep:data-[state=closed]:animate-out ep:data-[state=closed]:fade-out-0 ep:data-[state=open]:fade-in-0 ep:fixed ep:inset-0 ep:z-50 ep:bg-black/50",
        className
      )}
      {...props}
    />
  );
}

function SheetContent({
  className,
  size = "tight",
  children,
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Content> & {
  size?: "tight" | "mid" | "full";
}) {
  return (
    <SheetPortal>
      <SheetOverlay />
      <SheetPrimitive.Content
        data-slot="sheet-content"
        className={cn(
          "ep:bg-background ep:data-[state=open]:animate-in ep:data-[state=closed]:animate-out ep:fixed ep:z-50 ep:flex ep:flex-col ep:gap-4 ep:shadow-lg ep:transition ep:ease-in-out ep:data-[state=closed]:duration-300 ep:data-[state=open]:duration-500",
          "ep:data-[state=closed]:slide-out-to-right ep:data-[state=open]:slide-in-from-right ep:inset-y-0 ep:right-0 ep:h-full ep:border-l ep:w-[90%]",
          size === "tight" && "ep:md:w-1/3",
          size === "mid" && "ep:md:w-1/2",
          size === "full" && "ep:md:w-full",
          className
        )}
        {...props}
      >
        {children}
        <SheetPrimitive.Close className="ep:ring-offset-background ep:focus:ring-ring ep:data-[state=open]:bg-secondary ep:absolute ep:top-4 ep:right-4 ep:rounded-xs ep:opacity-70 ep:transition-opacity ep:hover:opacity-100 ep:focus:ring-2 ep:focus:ring-offset-2 ep:focus:outline-hidden ep:disabled:pointer-events-none">
          <XIcon className="ep:size-4" />
          <span className="ep:sr-only">Close</span>
        </SheetPrimitive.Close>
      </SheetPrimitive.Content>
    </SheetPortal>
  );
}

function SheetHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="sheet-header"
      className={cn("ep:flex ep:flex-col ep:gap-1.5 ep:px-4 ep:pt-4", className)}
      {...props}
    />
  );
}

function SheetBody({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="sheet-body"
      className={cn("ep:flex-1 ep:px-4 ep:pb-4 ep:overflow-y-auto", className)}
      {...props}
    />
  );
}

function SheetFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="sheet-footer"
      className={cn(
        "ep:mt-auto ep:flex ep:flex-col ep:gap-2 ep:px-4 ep:pb-4",
        className
      )}
      {...props}
    />
  );
}

function SheetTitle({
  className,
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Title>) {
  return (
    <SheetPrimitive.Title
      data-slot="sheet-title"
      className={cn("ep:text-foreground ep:font-semibold", className)}
      {...props}
    />
  );
}

function SheetDescription({
  className,
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Description>) {
  return (
    <SheetPrimitive.Description
      data-slot="sheet-description"
      className={cn("ep:text-muted-foreground ep:text-sm", className)}
      {...props}
    />
  );
}

export {
  Sheet,
  SheetTrigger,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetBody,
  SheetFooter,
  SheetTitle,
  SheetDescription,
};

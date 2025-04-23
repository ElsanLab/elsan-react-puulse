import * as React from "react";
import * as SheetPrimitive from "@radix-ui/react-dialog";
import { XIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { ScrollArea } from "./scroll-area";

/* CHANGES FROM DEFAULT SHADCN
 *
 * Created SheetBody component
 * Added size variant
 * Changed padding handling
 * fixed prefix placement
 *
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
  children,
  side = "right",
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Content> & {
  side?: "top" | "right" | "bottom" | "left";
}) {
  return (
    <SheetPortal>
      <SheetOverlay />
      <SheetPrimitive.Content
        data-slot="sheet-content"
        className={cn(
          "ep:bg-background ep:data-[state=open]:animate-in ep:data-[state=closed]:animate-out ep:fixed ep:z-50 ep:flex ep:flex-col ep:gap-4 ep:shadow-lg ep:transition ep:ease-in-out ep:data-[state=closed]:duration-300 ep:data-[state=open]:duration-500",
          side === "right" &&
            "ep:data-[state=closed]:slide-out-to-right ep:data-[state=open]:slide-in-from-right ep:inset-y-0 ep:right-0 ep:h-full ep:w-3/4 ep:border-l ep:sm:max-w-sm",
          side === "left" &&
            "ep:data-[state=closed]:slide-out-to-left ep:data-[state=open]:slide-in-from-left ep:inset-y-0 ep:left-0 ep:h-full ep:w-3/4 ep:border-r ep:sm:max-w-sm",
          side === "top" &&
            "ep:data-[state=closed]:slide-out-to-top ep:data-[state=open]:slide-in-from-top ep:inset-x-0 ep:top-0 ep:h-auto ep:border-b",
          side === "bottom" &&
            "ep:data-[state=closed]:slide-out-to-bottom ep:data-[state=open]:slide-in-from-bottom ep:inset-x-0 ep:bottom-0 ep:h-auto ep:border-t",
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
      className={cn(
        "ep:flex ep:flex-col ep:gap-1.5 ep:mx-6 ep:mt-6",
        className
      )}
      {...props}
    />
  );
}

function SheetBody(props: React.ComponentProps<"div">) {
  return (
    <ScrollArea className="ep:flex-1 ep:overflow-y-auto">
      <div className="ep:flex-1 ep:mx-6" {...props} />
    </ScrollArea>
  );
}

function SheetFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="sheet-footer"
      className={cn(
        "ep:mt-auto ep:flex ep:flex-col ep:gap-2 ep:mx-6 ep:mb-6",
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

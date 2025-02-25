/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import {
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import {
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from "../ui/sheet";
import { ScrollArea } from "../ui/scroll-area";
import { cn } from "../../lib/utils";

type VersatileDialogModeProps = {
  mode?: "drawer" | "dialog";
  size?: "sm" | "md" | "lg" | "xl";
};

const VersatileDialogContext = React.createContext<VersatileDialogModeProps>({
  mode: "drawer",
  size: "md",
});

type VersatileDialogHandle = {
  open: () => void;
  close: () => void;
};

const VersatileDialog = React.forwardRef<
  VersatileDialogHandle,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Root> &
    VersatileDialogModeProps
>(({ mode = "drawer", size = "md", ...props }, ref) => {
  const [opened, setOpened] = React.useState(props.defaultOpen ?? false);

  const handleOpenChange = (open: boolean) => {
    setOpened(open);
    props.onOpenChange?.(open);
  };

  React.useImperativeHandle(ref, () => ({
    open: () => setOpened(true),
    close: () => setOpened(false),
  }));

  return (
    <VersatileDialogContext.Provider value={{ mode, size }}>
      <DialogPrimitive.Root
        {...props}
        open={opened}
        onOpenChange={handleOpenChange}
      />
    </VersatileDialogContext.Provider>
  );
});

const VersatileDialogTrigger = DialogPrimitive.Trigger;

const VersatileDialogContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>
>(({ className, children, ...props }, ref) => {
  const { mode, size } = React.useContext(VersatileDialogContext);

  switch (mode) {
    case "drawer":
      return (
        <SheetContent
          ref={ref}
          {...props}
          className={cn(className, "flex flex-col")}
          side="right"
          size={size}
        >
          {children}
        </SheetContent>
      );
    case "dialog":
      return (
        <DialogContent ref={ref} {...props} className={className} size={size}>
          {children}
        </DialogContent>
      );
    default:
      return null;
  }
});

const VersatileDialogHeader: React.FC<React.HTMLAttributes<HTMLDivElement>> = (
  props
) => {
  const { mode } = React.useContext(VersatileDialogContext);
  const Component = mode === "drawer" ? SheetHeader : DialogHeader;

  return <Component {...props} />;
};

const VersatileDialogBody: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  children,
  ...props
}) => {
  const { mode } = React.useContext(VersatileDialogContext);

  switch (mode) {
    case "dialog":
      return <React.Fragment {...props}>{children}</React.Fragment>;
    case "drawer":
      return (
        <ScrollArea className="flex-1">
          <div className="flex-1 mx-6">{children}</div>
        </ScrollArea>
      );
    default:
      return null;
  }
};

const VersatileDialogFooter: React.FC<React.HTMLAttributes<HTMLDivElement>> = (
  props
) => {
  const { mode } = React.useContext(VersatileDialogContext);
  const Component = mode === "drawer" ? SheetFooter : DialogFooter;

  return <Component {...props} />;
};

const VersatileDialogTitle = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ ...props }, ref) => {
  const { mode } = React.useContext(VersatileDialogContext);

  let Component = null;
  const componentProps: any = { ...props };

  switch (mode) {
    case "drawer":
      Component = SheetTitle;
      componentProps.side = "right";
      break;
    case "dialog":
      Component = DialogTitle;
      break;
    default:
      return null;
  }

  return <Component ref={ref} {...props} />;
});

const VersatileDialogDescription = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ ...props }, ref) => {
  const { mode } = React.useContext(VersatileDialogContext);

  let Component = null;
  const componentProps: any = { ...props };

  switch (mode) {
    case "drawer":
      Component = SheetDescription;
      componentProps.side = "right";
      break;
    case "dialog":
      Component = DialogDescription;
      break;
    default:
      return null;
  }

  return <Component ref={ref} {...props} />;
});

const VersatileDialogClose = DialogPrimitive.Close;

export {
  VersatileDialogHandle,
  VersatileDialog,
  VersatileDialogTrigger,
  VersatileDialogContent,
  VersatileDialogHeader,
  VersatileDialogBody,
  VersatileDialogFooter,
  VersatileDialogTitle,
  VersatileDialogDescription,
  VersatileDialogClose,
};

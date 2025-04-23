/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import {
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetBody,
  SheetTitle,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

export type DialogWrapperModeProps = {
  mode?: "sheet" | "dialog";
  size?: "sm" | "md" | "lg" | "xl";
};

const DialogWrapperContext = React.createContext<DialogWrapperModeProps>({
  mode: "sheet",
});

const DialogWrapper: React.FC<
  React.ComponentProps<typeof DialogPrimitive.Root> & {
    mode: "sheet" | "dialog";
    open: () => void;
    close: () => void;
    ref: React.Ref<unknown>;
  }
> = ({ mode = "sheet", ref, ...props }) => {
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
    <DialogWrapperContext.Provider value={{ mode }}>
      <DialogPrimitive.Root
        {...props}
        open={opened}
        onOpenChange={handleOpenChange}
      />
    </DialogWrapperContext.Provider>
  );
};

const DialogWrapperTrigger = DialogPrimitive.Trigger;

const DialogWrapperContent: React.FC<
  React.ComponentProps<typeof DialogPrimitive.Content> & {
    size: "sm" | "md" | "lg" | "xl";
  }
> = ({ className, children, ...props }) => {
  const { mode } = React.useContext(DialogWrapperContext);

  switch (mode) {
    case "sheet":
      return (
        <SheetContent
          {...props}
          className={cn(className, "ep:flex ep:flex-col")}
          side="right"
        >
          {children}
        </SheetContent>
      );
    case "dialog":
      return (
        <DialogContent {...props} className={className}>
          {children}
        </DialogContent>
      );
    default:
      return null;
  }
};

const DialogWrapperHeader: React.FC<React.HTMLAttributes<HTMLDivElement>> = (
  props
) => {
  const { mode } = React.useContext(DialogWrapperContext);
  const Component = mode === "sheet" ? SheetHeader : DialogHeader;

  return <Component {...props} />;
};

const DialogWrapperBody: React.FC<React.HTMLAttributes<HTMLDivElement>> = (
  props
) => {
  const { mode } = React.useContext(DialogWrapperContext);

  switch (mode) {
    case "dialog":
      return <React.Fragment {...props} />;
    case "sheet":
      return <SheetBody {...props} />;
    default:
      return null;
  }
};

const DialogWrapperFooter: React.FC<React.HTMLAttributes<HTMLDivElement>> = (
  props
) => {
  const { mode } = React.useContext(DialogWrapperContext);
  const Component = mode === "sheet" ? SheetFooter : DialogFooter;

  return <Component {...props} />;
};

const DialogWrapperTitle: React.FC<
  React.ComponentProps<typeof DialogPrimitive.Title>
> = (props) => {
  const { mode } = React.useContext(DialogWrapperContext);

  let Component = null;
  const componentProps: any = { ...props };

  switch (mode) {
    case "sheet":
      Component = SheetTitle;
      componentProps.side = "right";
      break;
    case "dialog":
      Component = DialogTitle;
      break;
    default:
      return null;
  }

  return <Component {...props} />;
};

const DialogWrapperDescription: React.FC<
  React.ComponentProps<typeof DialogPrimitive.Description>
> = ({ ...props }) => {
  const { mode } = React.useContext(DialogWrapperContext);

  let Component = null;
  const componentProps: any = { ...props };

  switch (mode) {
    case "sheet":
      Component = SheetDescription;
      componentProps.side = "right";
      break;
    case "dialog":
      Component = DialogDescription;
      break;
    default:
      return null;
  }

  return Component && <Component {...props} />;
};

const DialogWrapperClose = DialogPrimitive.Close;

export {
  DialogWrapper,
  DialogWrapperTrigger,
  DialogWrapperContent,
  DialogWrapperHeader,
  DialogWrapperBody,
  DialogWrapperFooter,
  DialogWrapperTitle,
  DialogWrapperDescription,
  DialogWrapperClose,
};

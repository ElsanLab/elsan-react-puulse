import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
export type DialogWrapperModeProps = {
    mode?: "sheet" | "dialog";
    size?: "sm" | "md" | "lg" | "xl";
};
declare const DialogWrapper: React.FC<React.ComponentProps<typeof DialogPrimitive.Root> & {
    mode: "sheet" | "dialog";
    open: () => void;
    close: () => void;
    ref: React.Ref<unknown>;
}>;
declare const DialogWrapperTrigger: React.ForwardRefExoticComponent<DialogPrimitive.DialogTriggerProps & React.RefAttributes<HTMLButtonElement>>;
declare const DialogWrapperContent: React.FC<React.ComponentProps<typeof DialogPrimitive.Content> & {
    size: "sm" | "md" | "lg" | "xl";
}>;
declare const DialogWrapperHeader: React.FC<React.HTMLAttributes<HTMLDivElement>>;
declare const DialogWrapperBody: React.FC<React.HTMLAttributes<HTMLDivElement>>;
declare const DialogWrapperFooter: React.FC<React.HTMLAttributes<HTMLDivElement>>;
declare const DialogWrapperTitle: React.FC<React.ComponentProps<typeof DialogPrimitive.Title>>;
declare const DialogWrapperDescription: React.FC<React.ComponentProps<typeof DialogPrimitive.Description>>;
declare const DialogWrapperClose: React.ForwardRefExoticComponent<DialogPrimitive.DialogCloseProps & React.RefAttributes<HTMLButtonElement>>;
export { DialogWrapper, DialogWrapperTrigger, DialogWrapperContent, DialogWrapperHeader, DialogWrapperBody, DialogWrapperFooter, DialogWrapperTitle, DialogWrapperDescription, DialogWrapperClose, };

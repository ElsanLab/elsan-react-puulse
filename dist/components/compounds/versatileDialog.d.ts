import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
type VersatileDialogModeProps = {
    mode?: "drawer" | "dialog";
    size?: "sm" | "md" | "lg" | "xl";
};
type VersatileDialogHandle = {
    open: () => void;
    close: () => void;
};
declare const VersatileDialog: React.ForwardRefExoticComponent<DialogPrimitive.DialogProps & VersatileDialogModeProps & React.RefAttributes<VersatileDialogHandle>>;
declare const VersatileDialogTrigger: React.ForwardRefExoticComponent<DialogPrimitive.DialogTriggerProps & React.RefAttributes<HTMLButtonElement>>;
declare const VersatileDialogContent: React.ForwardRefExoticComponent<Omit<DialogPrimitive.DialogContentProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
declare const VersatileDialogHeader: React.FC<React.HTMLAttributes<HTMLDivElement>>;
declare const VersatileDialogBody: React.FC<React.HTMLAttributes<HTMLDivElement>>;
declare const VersatileDialogFooter: React.FC<React.HTMLAttributes<HTMLDivElement>>;
declare const VersatileDialogTitle: React.ForwardRefExoticComponent<Omit<DialogPrimitive.DialogTitleProps & React.RefAttributes<HTMLHeadingElement>, "ref"> & React.RefAttributes<HTMLHeadingElement>>;
declare const VersatileDialogDescription: React.ForwardRefExoticComponent<Omit<DialogPrimitive.DialogDescriptionProps & React.RefAttributes<HTMLParagraphElement>, "ref"> & React.RefAttributes<HTMLParagraphElement>>;
declare const VersatileDialogClose: React.ForwardRefExoticComponent<DialogPrimitive.DialogCloseProps & React.RefAttributes<HTMLButtonElement>>;
export { VersatileDialogHandle, VersatileDialog, VersatileDialogTrigger, VersatileDialogContent, VersatileDialogHeader, VersatileDialogBody, VersatileDialogFooter, VersatileDialogTitle, VersatileDialogDescription, VersatileDialogClose, };
//# sourceMappingURL=versatileDialog.d.ts.map
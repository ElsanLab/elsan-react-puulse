import * as AvatarPrimitive from '@radix-ui/react-avatar';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { ClassProp } from 'class-variance-authority/types';
import { ClassValue } from 'clsx';
import { ColorPickerBaseProps } from 'node_modules/react-colorful/dist/types';
import { Command as Command_2 } from 'cmdk';
import { DayPickerProps } from 'react-day-picker';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import { JSX } from 'react/jsx-runtime';
import * as LabelPrimitive from '@radix-ui/react-label';
import { Locale } from 'date-fns';
import { OTPInput } from 'input-otp';
import * as PopoverPrimitive from '@radix-ui/react-popover';
import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';
import * as React_2 from 'react';
import * as RPNInput from 'react-phone-number-input';
import * as ScrollAreaPrimitive from '@radix-ui/react-scroll-area';
import * as TabsPrimitive from '@radix-ui/react-tabs';
import { ToasterProps } from 'sonner';
import * as TooltipPrimitive from '@radix-ui/react-tooltip';

export declare function Alert({ className, variant, ...props }: React_2.ComponentProps<"div"> & {
    variant?: "info" | "success" | "warning" | "destructive";
}): JSX.Element;

export declare function AlertDescription({ className, ...props }: React_2.ComponentProps<"div">): JSX.Element;

export declare function AlertTitle({ className, ...props }: React_2.ComponentProps<"div">): JSX.Element;

export declare function Avatar({ className, size, ...props }: React_2.ComponentProps<typeof AvatarPrimitive.Root> & {
    size?: "md" | "sm";
}): JSX.Element;

export declare function AvatarFallback({ className, variant, ...props }: React_2.ComponentProps<typeof AvatarPrimitive.Fallback> & {
    variant?: "info" | "success" | "warning" | "destructive";
}): JSX.Element;

export declare function AvatarImage({ className, ...props }: React_2.ComponentProps<typeof AvatarPrimitive.Image>): JSX.Element;

export declare function Badge({ className, variant, asChild, ...props }: React_2.ComponentProps<"span"> & {
    variant?: "neutral" | "info" | "success" | "warning" | "destructive";
    asChild?: boolean;
}): JSX.Element;

export declare const Button: React_2.FC<React_2.ComponentProps<"button"> & {
    asChild?: boolean;
    variant?: "destructive" | "link" | "primary" | "outline" | "secondary" | "ghost";
    size?: "sm" | "md" | "lg";
    contentType?: "default" | "icon";
}>;

export declare const buttonVariants: (props?: ({
    variant?: "destructive" | "link" | "primary" | "outline" | "secondary" | "ghost" | null | undefined;
    contentType?: "default" | "icon" | null | undefined;
    size?: "md" | "sm" | "lg" | null | undefined;
} & ClassProp) | undefined) => string;

export declare function Calendar({ className, showOutsideDays, showYearSwitcher, yearRange, numberOfMonths, locale, ...props }: DayPickerProps & {
    yearRange?: number;
    showYearSwitcher?: boolean;
    monthsClassName?: string;
    monthCaptionClassName?: string;
    weekdaysClassName?: string;
    weekdayClassName?: string;
    monthClassName?: string;
    captionClassName?: string;
    captionLabelClassName?: string;
    buttonNextClassName?: string;
    buttonPreviousClassName?: string;
    navClassName?: string;
    monthGridClassName?: string;
    weekClassName?: string;
    dayClassName?: string;
    dayButtonClassName?: string;
    rangeStartClassName?: string;
    rangeEndClassName?: string;
    selectedClassName?: string;
    todayClassName?: string;
    outsideClassName?: string;
    disabledClassName?: string;
    rangeMiddleClassName?: string;
    hiddenClassName?: string;
}): JSX.Element;

export declare namespace Calendar {
    var displayName: string;
}

export declare function Checkbox({ className, ...props }: React_2.ComponentProps<typeof CheckboxPrimitive.Root>): JSX.Element;

export declare function cn(...inputs: ClassValue[]): string;

export declare const ColorPicker: React.FC<ColorPickerBaseProps<string> & {
    className?: string;
}>;

export declare function Command({ className, ...props }: React_2.ComponentProps<typeof Command_2>): JSX.Element;

export declare function CommandDialog({ title, description, children, ...props }: React_2.ComponentProps<typeof Dialog> & {
    title?: string;
    description?: string;
}): JSX.Element;

export declare function CommandEmpty({ ...props }: React_2.ComponentProps<typeof Command_2.Empty>): JSX.Element;

export declare function CommandGroup({ className, ...props }: React_2.ComponentProps<typeof Command_2.Group>): JSX.Element;

export declare function CommandInput({ className, ...props }: React_2.ComponentProps<typeof Command_2.Input>): JSX.Element;

export declare function CommandItem({ className, ...props }: React_2.ComponentProps<typeof Command_2.Item>): JSX.Element;

export declare function CommandList({ className, ...props }: React_2.ComponentProps<typeof Command_2.List>): JSX.Element;

export declare function CommandSeparator({ className, ...props }: React_2.ComponentProps<typeof Command_2.Separator>): JSX.Element;

export declare function CommandShortcut({ className, ...props }: React_2.ComponentProps<"span">): JSX.Element;

export declare const DatePicker: React_2.FC<{
    placeholder?: string;
    dateFormat?: string;
    locale?: Locale;
    selected?: Date | undefined;
    onSelect?: (date: Date) => void | undefined;
    min?: Date | undefined;
    max?: Date | undefined;
}>;

export declare const DatePickerTrigger: typeof PopoverTrigger;

export declare function Dialog({ ...props }: React_2.ComponentProps<typeof DialogPrimitive.Root>): JSX.Element;

export declare function DialogClose({ ...props }: React_2.ComponentProps<typeof DialogPrimitive.Close>): JSX.Element;

export declare function DialogContent({ size, className, children, ...props }: React_2.ComponentProps<typeof DialogPrimitive.Content> & {
    size?: "sm" | "md" | "lg" | "xl";
}): JSX.Element;

export declare function DialogDescription({ className, ...props }: React_2.ComponentProps<typeof DialogPrimitive.Description>): JSX.Element;

export declare function DialogFooter({ className, ...props }: React_2.ComponentProps<"div">): JSX.Element;

export declare function DialogHeader({ className, ...props }: React_2.ComponentProps<"div">): JSX.Element;

export declare function DialogOverlay({ className, ...props }: React_2.ComponentProps<typeof DialogPrimitive.Overlay>): JSX.Element;

export declare function DialogPortal({ ...props }: React_2.ComponentProps<typeof DialogPrimitive.Portal>): JSX.Element;

export declare function DialogTitle({ className, ...props }: React_2.ComponentProps<typeof DialogPrimitive.Title>): JSX.Element;

export declare function DialogTrigger({ ...props }: React_2.ComponentProps<typeof DialogPrimitive.Trigger>): JSX.Element;

export declare const DialogWrapper: React_2.FC<React_2.ComponentProps<typeof DialogPrimitive.Root> & {
    mode: "sheet" | "dialog";
    open: () => void;
    close: () => void;
    ref: React_2.Ref<unknown>;
}>;

export declare const DialogWrapperBody: React_2.FC<React_2.HTMLAttributes<HTMLDivElement>>;

export declare const DialogWrapperClose: React_2.ForwardRefExoticComponent<DialogPrimitive.DialogCloseProps & React_2.RefAttributes<HTMLButtonElement>>;

export declare const DialogWrapperContent: React_2.FC<React_2.ComponentProps<typeof DialogPrimitive.Content> & {
    size: "sm" | "md" | "lg" | "xl";
}>;

export declare const DialogWrapperDescription: React_2.FC<React_2.ComponentProps<typeof DialogPrimitive.Description>>;

export declare const DialogWrapperFooter: React_2.FC<React_2.HTMLAttributes<HTMLDivElement>>;

export declare const DialogWrapperHeader: React_2.FC<React_2.HTMLAttributes<HTMLDivElement>>;

export declare const DialogWrapperTitle: React_2.FC<React_2.ComponentProps<typeof DialogPrimitive.Title>>;

export declare const DialogWrapperTrigger: React_2.ForwardRefExoticComponent<DialogPrimitive.DialogTriggerProps & React_2.RefAttributes<HTMLButtonElement>>;

export declare const FormValidationMessage: React.FC<React.HTMLAttributes<HTMLDivElement>>;

export declare const HelperText: React.FC<React.HTMLAttributes<HTMLParagraphElement>>;

export declare function Input({ className, type, ...props }: React_2.ComponentProps<"input">): JSX.Element;

export declare function InputOTP({ className, containerClassName, ...props }: React_2.ComponentProps<typeof OTPInput> & {
    containerClassName?: string;
}): JSX.Element;

export declare function InputOTPGroup({ className, ...props }: React_2.ComponentProps<"div">): JSX.Element;

export declare function InputOTPSeparator({ ...props }: React_2.ComponentProps<"div">): JSX.Element;

export declare function InputOTPSlot({ index, className, ...props }: React_2.ComponentProps<"div"> & {
    index: number;
}): JSX.Element;

export declare function Label({ className, required, children, ...props }: React_2.ComponentProps<typeof LabelPrimitive.Root> & {
    required?: boolean;
}): JSX.Element;

export declare const NumberPicker: React.FC<Omit<React.ComponentProps<"input">, "type"> & {
    min?: number;
    max?: number;
    step?: number;
}>;

export declare const PasswordInput: React.FC<Omit<React.ComponentProps<"input">, "type">>;

export declare const PhoneNumberInput: React_2.FC<Omit<React_2.ComponentProps<"input">, "onChange" | "value" | "ref" | "type"> & Omit<RPNInput.Props<typeof RPNInput.default>, "onChange"> & {
    onChange?: (value: RPNInput.Value) => void;
    internationalization?: boolean;
}>;

export declare function Popover({ ...props }: React_2.ComponentProps<typeof PopoverPrimitive.Root>): JSX.Element;

export declare function PopoverAnchor({ ...props }: React_2.ComponentProps<typeof PopoverPrimitive.Anchor>): JSX.Element;

export declare function PopoverContent({ className, align, sideOffset, ...props }: React_2.ComponentProps<typeof PopoverPrimitive.Content>): JSX.Element;

export declare function PopoverTrigger({ ...props }: React_2.ComponentProps<typeof PopoverPrimitive.Trigger>): JSX.Element;

export declare function RadioGroup({ className, ...props }: React_2.ComponentProps<typeof RadioGroupPrimitive.Root>): JSX.Element;

export declare function RadioGroupItem({ className, ...props }: React_2.ComponentProps<typeof RadioGroupPrimitive.Item>): JSX.Element;

export declare function ScrollArea({ className, children, ...props }: React_2.ComponentProps<typeof ScrollAreaPrimitive.Root>): JSX.Element;

export declare function ScrollBar({ className, orientation, ...props }: React_2.ComponentProps<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>): JSX.Element;

export declare const Select: React.FC<{
    options: SelectOption[];
    placeholder?: string;
    onChange: (value: string | string[] | null) => void;
    isMulti?: boolean;
    value?: string | string[] | null;
    isClearable?: boolean;
    isDisabled?: boolean;
    isSearchable?: boolean;
}>;

export declare type SelectOption = {
    label: string;
    value: string;
};

export declare function Sheet({ ...props }: React_2.ComponentProps<typeof DialogPrimitive.Root>): JSX.Element;

export declare function SheetBody(props: React_2.ComponentProps<"div">): JSX.Element;

export declare function SheetClose({ ...props }: React_2.ComponentProps<typeof DialogPrimitive.Close>): JSX.Element;

export declare function SheetContent({ className, children, side, ...props }: React_2.ComponentProps<typeof DialogPrimitive.Content> & {
    side?: "top" | "right" | "bottom" | "left";
}): JSX.Element;

export declare function SheetDescription({ className, ...props }: React_2.ComponentProps<typeof DialogPrimitive.Description>): JSX.Element;

export declare function SheetFooter({ className, ...props }: React_2.ComponentProps<"div">): JSX.Element;

export declare function SheetHeader({ className, ...props }: React_2.ComponentProps<"div">): JSX.Element;

export declare function SheetTitle({ className, ...props }: React_2.ComponentProps<typeof DialogPrimitive.Title>): JSX.Element;

export declare function SheetTrigger({ ...props }: React_2.ComponentProps<typeof DialogPrimitive.Trigger>): JSX.Element;

export declare function Tabs({ className, ...props }: React_2.ComponentProps<typeof TabsPrimitive.Root>): JSX.Element;

export declare function TabsContent({ className, ...props }: React_2.ComponentProps<typeof TabsPrimitive.Content>): JSX.Element;

export declare function TabsList({ className, ...props }: React_2.ComponentProps<typeof TabsPrimitive.List>): JSX.Element;

export declare function TabsTrigger({ className, ...props }: React_2.ComponentProps<typeof TabsPrimitive.Trigger>): JSX.Element;

export declare const TimePicker: React.FC<Omit<React.ComponentProps<typeof Input>, "type">>;

export declare const Toaster: ({ ...props }: ToasterProps) => JSX.Element;

export declare function Tooltip({ ...props }: React_2.ComponentProps<typeof TooltipPrimitive.Root>): JSX.Element;

export declare function TooltipContent({ className, sideOffset, children, ...props }: React_2.ComponentProps<typeof TooltipPrimitive.Content>): JSX.Element;

export declare function TooltipProvider({ delayDuration, ...props }: React_2.ComponentProps<typeof TooltipPrimitive.Provider>): JSX.Element;

export declare function TooltipTrigger({ ...props }: React_2.ComponentProps<typeof TooltipPrimitive.Trigger>): JSX.Element;

export { }

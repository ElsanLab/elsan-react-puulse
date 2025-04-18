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
import { VariantProps } from 'class-variance-authority';

export declare function Alert({ className, variant, ...props }: React_2.ComponentProps<"div"> & VariantProps<typeof alertVariants>): JSX.Element;

export declare function AlertDescription({ className, ...props }: React_2.ComponentProps<"div">): JSX.Element;

export declare function AlertTitle({ className, ...props }: React_2.ComponentProps<"div">): JSX.Element;

/** CHANGES FROM DEFAULT SHADCN
 *
 * - removed "default" variant
 * - added "info", "success", "warning" variants
 * - set "info" as default variant
 * - removed "text-muted-foreground" from AlertDescription className
 * - fixed prefix placement
 */
declare const alertVariants: (props?: ({
    variant?: "info" | "success" | "warning" | "destructive" | null | undefined;
} & ClassProp) | undefined) => string;

/** CHANGES FROM DEFAULT SHADCN
 *
 * None
 */
export declare function Avatar({ className, ...props }: React_2.ComponentProps<typeof AvatarPrimitive.Root>): JSX.Element;

export declare function AvatarFallback({ className, ...props }: React_2.ComponentProps<typeof AvatarPrimitive.Fallback>): JSX.Element;

export declare function AvatarImage({ className, ...props }: React_2.ComponentProps<typeof AvatarPrimitive.Image>): JSX.Element;

export declare function Badge({ className, variant, asChild, ...props }: React_2.ComponentProps<"span"> & VariantProps<typeof badgeVariants> & {
    asChild?: boolean;
}): JSX.Element;

/** CHANGES FROM DEFAULT SHADCN
 *
 * - removed "default", "secondary", "destructive" & "outline" variants
 * - added "neutral", "info", "success", "warning" variants
 * - set "neutral" as default variant
 * - fixed prefix placement
 */
declare const badgeVariants: (props?: ({
    variant?: "info" | "success" | "warning" | "destructive" | "neutral" | "primary" | null | undefined;
} & ClassProp) | undefined) => string;

export declare const Button: React_2.FC<ButtonProps>;

declare interface ButtonProps extends React_2.ComponentProps<"button">, VariantProps<typeof buttonVariants> {
    asChild?: boolean;
}

/** CHANGES FROM DEFAULT SHADCN
 *
 * Changed variants to 'primary', 'destructive', 'outline', 'secondary', 'ghost', 'link'
 * Changed sizes to 'sm', 'md', 'lg'
 * Added contentType variant & compounds with size+contentType
 * fixed prefix placement
 *
 */
declare const buttonVariants: (props?: ({
    variant?: "destructive" | "link" | "primary" | "outline" | "secondary" | "ghost" | null | undefined;
    contentType?: "default" | "icon" | null | undefined;
    size?: "sm" | "md" | "lg" | null | undefined;
} & ClassProp) | undefined) => string;

export declare function Calendar({ className, showOutsideDays, showYearSwitcher, yearRange, numberOfMonths, locale, ...props }: CalendarProps): JSX.Element;

export declare namespace Calendar {
    var displayName: string;
}

/** CHANGES FROM DEFAULT SHADCN
 *
 * Everything
 *
 */
declare type CalendarProps = DayPickerProps & {
    /**
     * In the year view, the number of years to display at once.
     * @default 12
     */
    yearRange?: number;
    /**
     * Wether to show the year switcher in the caption.
     * @default true
     */
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
};

/** CHANGES FROM DEFAULT SHADCN
 *
 * fixed prefix placement
 *
 */
export declare function Checkbox({ className, ...props }: React_2.ComponentProps<typeof CheckboxPrimitive.Root>): JSX.Element;

export declare function cn(...inputs: ClassValue[]): string;

export declare const ColorPicker: React.FC<ColorPickerProps>;

declare type ColorPickerProps = ColorPickerBaseProps<string> & {
    className?: string;
};

/** CHANGES FROM DEFAULT SHADCN
 *
 * fixed prefix placement
 *
 */
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

export declare const DatePicker: React_2.FC<DatePickerProps>;

declare type DatePickerProps = {
    placeholder?: string;
    dateFormat?: string;
    locale?: Locale;
    selected?: Date | undefined;
    onSelect?: (date: Date) => void | undefined;
    min?: Date | undefined;
    max?: Date | undefined;
};

export declare const DatePickerTrigger: typeof PopoverTrigger;

/** CHANGES FROM DEFAULT SHADCN
 *
 * Added size variants, with md as default size
 * fixed prefix placement
 *
 */
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

export declare const HelperText: React.FC<HelperTextProps>;

declare type HelperTextProps = React.HTMLAttributes<HTMLParagraphElement>;

/** CHANGES FROM DEFAULT SHADCN
 *
 * fixed prefix placement
 *
 */
export declare function Input({ className, type, ...props }: React_2.ComponentProps<"input">): JSX.Element;

/** CHANGES FROM DEFAULT SHADCN
 *
 * fixed prefix placement
 *
 */
export declare function InputOTP({ className, containerClassName, ...props }: React_2.ComponentProps<typeof OTPInput> & {
    containerClassName?: string;
}): JSX.Element;

export declare function InputOTPGroup({ className, ...props }: React_2.ComponentProps<"div">): JSX.Element;

export declare function InputOTPSeparator({ ...props }: React_2.ComponentProps<"div">): JSX.Element;

export declare function InputOTPSlot({ index, className, ...props }: React_2.ComponentProps<"div"> & {
    index: number;
}): JSX.Element;

/** CHANGES FROM DEFAULT SHADCN
 *
 * Added `required` prop
 * fixed prefix placement
 *
 */
export declare function Label({ className, required, children, ...props }: React_2.ComponentProps<typeof LabelPrimitive.Root> & {
    required?: boolean;
}): JSX.Element;

declare type NumberInputProps = Omit<React.ComponentProps<"input">, "type"> & {
    min?: number;
    max?: number;
    step?: number;
};

export declare const NumberPicker: React.FC<NumberInputProps>;

declare type Option_2 = {
    label: string;
    value: string;
};

export declare const PasswordInput: React.FC<PasswordInputProps>;

declare type PasswordInputProps = Omit<React.ComponentProps<"input">, "type">;

export declare const PhoneNumberInput: React_2.FC<PhoneNumberInputProps>;

declare type PhoneNumberInputProps = Omit<React_2.ComponentProps<"input">, "onChange" | "value" | "ref" | "type"> & Omit<RPNInput.Props<typeof RPNInput.default>, "onChange"> & {
    onChange?: (value: RPNInput.Value) => void;
    internationalization?: boolean;
};

/** CHANGES FROM DEFAULT SHADCN
 *
 * fixed prefix placement
 *
 */
export declare function Popover({ ...props }: React_2.ComponentProps<typeof PopoverPrimitive.Root>): JSX.Element;

export declare function PopoverAnchor({ ...props }: React_2.ComponentProps<typeof PopoverPrimitive.Anchor>): JSX.Element;

export declare function PopoverContent({ className, align, sideOffset, ...props }: React_2.ComponentProps<typeof PopoverPrimitive.Content>): JSX.Element;

export declare function PopoverTrigger({ ...props }: React_2.ComponentProps<typeof PopoverPrimitive.Trigger>): JSX.Element;

/** CHANGES FROM DEFAULT SHADCN
 *
 * Indicator changed to CircleCheck size-3 instead of Circle size-2
 * Added text-primary-foreground to Indicator
 * fixed prefix placement
 *
 */
export declare function RadioGroup({ className, ...props }: React_2.ComponentProps<typeof RadioGroupPrimitive.Root>): JSX.Element;

export declare function RadioGroupItem({ className, ...props }: React_2.ComponentProps<typeof RadioGroupPrimitive.Item>): JSX.Element;

/** CHANGES FROM DEFAULT SHADCN
 *
 * fixed prefix placement
 *
 */
export declare function ScrollArea({ className, children, ...props }: React_2.ComponentProps<typeof ScrollAreaPrimitive.Root>): JSX.Element;

export declare function ScrollBar({ className, orientation, ...props }: React_2.ComponentProps<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>): JSX.Element;

/** CHANGES FROM DEFAULT SHADCN
 *
 * Everything, this is not a shadcn component
 *
 */
export declare const Select: React.FC<SelectProps>;

declare type SelectProps = {
    options: Option_2[];
    placeholder?: string;
    onChange: (value: string | string[] | null) => void;
    isMulti?: boolean;
    value?: string | string[] | null;
    isClearable?: boolean;
    isDisabled?: boolean;
    isSearchable?: boolean;
};

/** CHANGES FROM DEFAULT SHADCN
 *
 * Created SheetBody component
 * Added size variant
 * Changed padding handling
 * fixed prefix placement
 *
 */
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

/** CHANGES FROM DEFAULT SHADCN
 *
 * TabsTrigger state active changed background to bg-primary instead of bg-background
 * TabsTrigger state active changed text color to text-foreground instead of text-primary
 *
 * fixed prefix placement
 *
 */
export declare function Tabs({ className, ...props }: React_2.ComponentProps<typeof TabsPrimitive.Root>): JSX.Element;

export declare function TabsContent({ className, ...props }: React_2.ComponentProps<typeof TabsPrimitive.Content>): JSX.Element;

export declare function TabsList({ className, ...props }: React_2.ComponentProps<typeof TabsPrimitive.List>): JSX.Element;

export declare function TabsTrigger({ className, ...props }: React_2.ComponentProps<typeof TabsPrimitive.Trigger>): JSX.Element;

export declare const TimePicker: React.FC<TimePickerProps>;

declare type TimePickerProps = Omit<React.ComponentProps<typeof Input>, "type">;

/** CHANGES FROM DEFAULT SHADCN
 *
 * fixed prefix placement
 *
 */
export declare const Toaster: ({ ...props }: ToasterProps) => JSX.Element;

export declare function Tooltip({ ...props }: React_2.ComponentProps<typeof TooltipPrimitive.Root>): JSX.Element;

export declare function TooltipContent({ className, sideOffset, children, ...props }: React_2.ComponentProps<typeof TooltipPrimitive.Content>): JSX.Element;

/** CHANGES FROM DEFAULT SHADCN
 *
 * Changed background to bg-neutral instead of bg-primary
 * Changed text color to neutral-foreground instead of primary-foreground
 * Changed arrow color to neutral instead of bg-primary (bg-neutral + fill-neutral)
 * fixed prefix placement
 *
 */
export declare function TooltipProvider({ delayDuration, ...props }: React_2.ComponentProps<typeof TooltipPrimitive.Provider>): JSX.Element;

export declare function TooltipTrigger({ ...props }: React_2.ComponentProps<typeof TooltipPrimitive.Trigger>): JSX.Element;

export { }

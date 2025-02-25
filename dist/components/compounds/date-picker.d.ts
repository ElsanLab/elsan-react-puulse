import * as React from "react";
import { PopoverTrigger } from "@/puulse/components/ui/popover";
type DatePickerProps = {
    label?: string;
    children?: React.ReactElement;
    selected?: Date;
    onSelect?: (date: Date) => void;
    min?: Date;
    max?: Date;
};
declare const DatePicker: React.FC<DatePickerProps>;
declare const DatePickerTrigger: typeof PopoverTrigger;
type DefaultDatePickerTriggerProps = {
    label: string;
    date?: Date;
};
declare const DefaultDatePickerTrigger: React.FC<DefaultDatePickerTriggerProps>;
export { DatePicker, DatePickerTrigger, DefaultDatePickerTrigger };
//# sourceMappingURL=date-picker.d.ts.map
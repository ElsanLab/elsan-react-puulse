import * as React from "react";
import { Locale } from "date-fns";
import { PopoverTrigger } from "../../components/ui/popover";
declare const DatePicker: React.FC<{
    placeholder?: string;
    dateFormat?: string;
    locale?: Locale;
    selected?: Date | undefined;
    onSelect?: (date: Date) => void | undefined;
    min?: Date | undefined;
    max?: Date | undefined;
}>;
declare const DatePickerTrigger: typeof PopoverTrigger;
export { DatePicker, DatePickerTrigger };

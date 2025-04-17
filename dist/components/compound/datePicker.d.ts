import * as React from "react";
import { Locale } from "date-fns";
import { PopoverTrigger } from "../../components/ui/popover";
type DatePickerProps = {
    placeholder?: string;
    dateFormat?: string;
    locale?: Locale;
    selected?: Date | undefined;
    onSelect?: (date: Date) => void | undefined;
    min?: Date | undefined;
    max?: Date | undefined;
};
declare const DatePicker: React.FC<DatePickerProps>;
declare const DatePickerTrigger: typeof PopoverTrigger;
export { DatePicker, DatePickerTrigger };

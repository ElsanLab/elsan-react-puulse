import { ComponentProps } from "react";
import { Calendar } from "../ui/calendar";
export interface RangeDatePickerValue {
    from?: string;
    to?: string;
}
export declare function RangeDatePicker({ id, name, fromPlaceholder, toPlaceholder, dateFormat, className, startMonth, endMonth, locale, value, onChange, numberOfMonths, }: {
    fromPlaceholder?: string;
    toPlaceholder?: string;
    dateFormat?: string;
    className?: string;
    startMonth?: ComponentProps<typeof Calendar>["startMonth"];
    endMonth?: ComponentProps<typeof Calendar>["endMonth"];
    locale?: ComponentProps<typeof Calendar>["locale"];
    onChange?: (value: RangeDatePickerValue) => void;
    value?: RangeDatePickerValue;
    name?: string;
    id?: string;
    numberOfMonths?: ComponentProps<typeof Calendar>["numberOfMonths"];
}): import("react/jsx-runtime").JSX.Element;

import { ComponentProps } from "react";
import { Calendar } from "../ui/calendar";
import { DateRange } from "react-day-picker";
export declare function RangeDatePicker({ className, dateFormat, defaultValue, disabled, endMonth, fromPlaceholder, id, locale, name, numberOfMonths, onChange, startMonth, toPlaceholder, value, }: {
    fromPlaceholder?: string;
    toPlaceholder?: string;
    dateFormat?: string;
    className?: string;
    disabled?: ComponentProps<typeof Calendar>["disabled"];
    startMonth?: ComponentProps<typeof Calendar>["startMonth"];
    endMonth?: ComponentProps<typeof Calendar>["endMonth"];
    locale?: ComponentProps<typeof Calendar>["locale"];
    onChange?: (value: DateRange | null) => void;
    defaultValue?: DateRange;
    value?: DateRange;
    name?: string;
    id?: string;
    numberOfMonths?: ComponentProps<typeof Calendar>["numberOfMonths"];
}): import("react/jsx-runtime").JSX.Element;

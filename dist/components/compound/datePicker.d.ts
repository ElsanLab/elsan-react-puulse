import { Calendar } from "../../components/ui/calendar";
import { Input } from "../ui/input";
import { ComponentProps } from "react";
export declare function DatePicker({ className, dateFormat, defaultValue, disabled, endMonth, locale, numberOfMonths, onChange, placeholder, startMonth, value, ...props }: {
    dateFormat?: string;
    startMonth?: ComponentProps<typeof Calendar>["startMonth"];
    endMonth?: ComponentProps<typeof Calendar>["endMonth"];
    disabled?: ComponentProps<typeof Calendar>["disabled"];
    locale?: ComponentProps<typeof Calendar>["locale"];
    value?: Date | null;
    defaultValue?: Date;
    onChange?: (value: Date | null) => void;
    numberOfMonths?: ComponentProps<typeof Calendar>["numberOfMonths"];
} & Omit<React.ComponentProps<typeof Input>, "type" | "onChange">): import("react/jsx-runtime").JSX.Element;

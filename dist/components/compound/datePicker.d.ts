import { Calendar } from "../../components/ui/calendar";
import { Input } from "../ui/input";
import { ComponentProps } from "react";
export declare function DatePicker({ placeholder, dateFormat, className, startMonth, endMonth, locale, value, onChange, ...props }: {
    dateFormat?: string;
    startMonth?: ComponentProps<typeof Calendar>["startMonth"];
    endMonth?: ComponentProps<typeof Calendar>["endMonth"];
    locale?: ComponentProps<typeof Calendar>["locale"];
    onChange?: (value: string) => void;
} & Omit<React.ComponentProps<typeof Input>, "type" | "onChange">): import("react/jsx-runtime").JSX.Element;

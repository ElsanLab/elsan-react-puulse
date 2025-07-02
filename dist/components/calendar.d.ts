import * as React from "react";
import { DayButton, DayPickerProps } from "react-day-picker";
import { Button } from "../components/button";
declare function Calendar({ className, classNames, showOutsideDays, captionLayout, buttonVariant, formatters, components, ...props }: DayPickerProps & {
    buttonVariant?: React.ComponentProps<typeof Button>["variant"];
}): import("react/jsx-runtime").JSX.Element;
declare function CalendarDayButton({ className, day, modifiers, ...props }: React.ComponentProps<typeof DayButton>): import("react/jsx-runtime").JSX.Element;
export { Calendar, CalendarDayButton };

import { type DayPickerProps } from "react-day-picker";
declare function Calendar({ className, showOutsideDays, showYearSwitcher, yearRange, numberOfMonths, locale, ...props }: DayPickerProps & {
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
}): import("react/jsx-runtime").JSX.Element;
declare namespace Calendar {
    var displayName: string;
}
export { Calendar };

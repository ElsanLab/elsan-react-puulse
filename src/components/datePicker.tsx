import { CalendarIcon } from "lucide-react";
import { parse, format } from "date-fns";
import { Calendar } from "@/components/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/popover";
import { Input } from "./input";
import { ComponentProps, useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "./button";
import { dateMatchModifiers } from "react-day-picker";

const formatInputValue = (
  value: Date | null | undefined,
  dateFormat: string
): string => (value ? format(value, dateFormat) : "");

export function DatePicker({
  className,
  dateFormat = "dd/MM/yyyy",
  defaultValue,
  disabled,
  endMonth,
  locale,
  numberOfMonths = 1,
  onChange,
  placeholder = "Choisir une date",
  startMonth,
  value,
  ...props
}: {
  dateFormat?: string;
  startMonth?: ComponentProps<typeof Calendar>["startMonth"];
  endMonth?: ComponentProps<typeof Calendar>["endMonth"];
  disabled?: ComponentProps<typeof Calendar>["disabled"];
  locale?: ComponentProps<typeof Calendar>["locale"];
  value?: Date | null;
  defaultValue?: Date;
  onChange?: (value: Date | null) => void;
  numberOfMonths?: ComponentProps<typeof Calendar>["numberOfMonths"];
} & Omit<React.ComponentProps<typeof Input>, "type" | "onChange">) {
  const [open, setOpen] = useState(false);

  const [inputValue, setInputValue] = useState<string>(
    formatInputValue(defaultValue, dateFormat)
  );

  const [calendarValue, setCalendarValue] = useState<Date | undefined>(
    defaultValue
  );

  const [calendarMonth, setCalendarMonth] = useState<Date | undefined>();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVal = e.target.value?.trim() ?? "";

    setInputValue(newVal);

    if (newVal.trim() === "") {
      setCalendarValue(undefined);
      return;
    }

    let date: Date | undefined = parse(newVal, dateFormat, new Date());
    if (isNaN(date.getTime())) {
      date = undefined;
    }

    if (!!disabled && !!date && dateMatchModifiers(date, disabled)) {
      date = undefined;
    }

    if (date) {
      setCalendarValue(date);
      setCalendarMonth(date);
    }
    onChange?.(date ?? null);
  };

  const handleInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setOpen(true);
    }
  };

  const handleCalendarSelect = (date: Date | undefined) => {
    setOpen(false);

    setCalendarValue(date);
    setCalendarMonth(date);
    setInputValue(formatInputValue(date, dateFormat));

    onChange?.(date ?? null);
  };

  const isControlled = value !== undefined;

  return (
    <Input
      {...props}
      disabled={disabled === true}
      value={inputValue}
      onChange={handleInputChange}
      placeholder={placeholder}
      className={cn("ep:w-[136px]", className)}
      onKeyDown={handleInputKeyDown}
      right={
        <div className="ep:relative ep:flex ep:gap-2">
          <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
              <Button
                id="date"
                variant="ghost"
                contentType="icon"
                disabled={disabled === true}
              >
                <CalendarIcon />
              </Button>
            </PopoverTrigger>
            <PopoverContent
              className="ep:w-auto ep:overflow-hidden ep:p-0"
              align="end"
              alignOffset={-8}
              sideOffset={10}
            >
              <Calendar
                mode="single"
                captionLayout="dropdown"
                selected={isControlled ? value : calendarValue}
                onSelect={handleCalendarSelect}
                month={calendarMonth}
                onMonthChange={setCalendarMonth}
                disabled={disabled}
                startMonth={startMonth}
                endMonth={endMonth}
                locale={locale}
                numberOfMonths={numberOfMonths}
              />
            </PopoverContent>
          </Popover>
        </div>
      }
    />
  );
}

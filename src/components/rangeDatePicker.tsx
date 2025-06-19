import { parse, format } from "date-fns";
import { ComponentProps, useState } from "react";
import { Calendar } from "./calendar";
import { cn } from "@/lib/utils";
import { Popover, PopoverContent, PopoverTrigger } from "./popover";
import { Button } from "./button";
import { ArrowRight, CalendarIcon } from "lucide-react";
import { dateMatchModifiers, DateRange } from "react-day-picker";
import { Input } from "./input";

const getInputFullName = (name: string | undefined, suffix: string): string => {
  if (!name) {
    return suffix;
  }
  return `${name}.${suffix}`;
};

const formatInputValue = (
  value: Date | null | undefined,
  dateFormat: string
): string => (value ? format(value, dateFormat) : "");

export function RangeDatePicker({
  className,
  dateFormat = "dd/MM/yyyy",
  defaultValue,
  disabled,
  endMonth,
  fromPlaceholder = "Du",
  id,
  locale,
  name,
  numberOfMonths = 2,
  onChange,
  startMonth,
  toPlaceholder = "Au",
  value,
}: {
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
}) {
  const [open, setOpen] = useState(false);

  const [inputFromValue, setInputFromValue] = useState<string | undefined>(
    formatInputValue(defaultValue?.from, dateFormat)
  );

  const [inputToValue, setInputToValue] = useState<string | undefined>(
    formatInputValue(defaultValue?.to, dateFormat)
  );

  const handleInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setOpen(true);
    }
  };

  const [calendarValue, setCalendarValue] = useState<DateRange | undefined>(
    defaultValue
  );

  const [calendarMonth, setCalendarMonth] = useState<Date | undefined>();

  const getInputDate = (
    e: React.ChangeEvent<HTMLInputElement>
  ): Date | undefined => {
    const newVal = e.target.value?.trim() ?? "";

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

    return date;
  };

  const handleFromInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputFromValue(e.target.value);

    const date = getInputDate(e);

    const newCalendarValue = date
      ? {
          from: date,
          to: calendarValue?.to,
        }
      : null;

    if (date) {
      setCalendarValue(newCalendarValue ?? undefined);
      setCalendarMonth(date);
    }

    onChange?.(newCalendarValue);
  };

  const handleToInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputToValue(e.target.value);

    const date = getInputDate(e);

    const newCalendarValue = date
      ? {
          from: calendarValue?.from,
          to: date,
        }
      : null;

    if (date) {
      setCalendarValue(newCalendarValue ?? undefined);
      setCalendarMonth(date);
    }

    onChange?.(newCalendarValue);
  };

  const handleCalendarSelect = (date: DateRange | undefined) => {
    setCalendarValue(date);
    setCalendarMonth(date?.to ?? date?.from ?? undefined);

    setInputFromValue(formatInputValue(date?.from, dateFormat));
    setInputToValue(formatInputValue(date?.to, dateFormat));

    onChange?.(date ?? null);
  };

  const isControlled = value !== undefined;

  return (
    <div
      className={cn(
        "ep:flex ep:items-center ep:gap-x-2 ep:w-fit ep:[&_svg:not([class*=size-])]:size-4",
        className
      )}
    >
      <Input
        type="text"
        id={getInputFullName(id, "from")}
        disabled={disabled === true}
        name={getInputFullName(name, "from")}
        className="ep:max-w-28"
        value={inputFromValue}
        placeholder={fromPlaceholder}
        onKeyDown={handleInputKeyDown}
        onChange={handleFromInputChange}
      />
      <ArrowRight
        className={cn({
          "ep:opacity-50": disabled === true,
        })}
      />
      <Input
        type="text"
        id={getInputFullName(id, "to")}
        disabled={disabled === true}
        name={getInputFullName(name, "to")}
        placeholder={toPlaceholder}
        className="ep:max-w-28"
        value={inputToValue}
        onKeyDown={handleInputKeyDown}
        onChange={handleToInputChange}
      />
      <div className="ep:size-8.5 ep:items-center ep:justify-center ep:flexep:text-input-foreground ep:[&_svg:not([class*=size-])]:size-4">
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
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
          </PopoverTrigger>
          <PopoverContent
            className="ep:w-auto ep:overflow-hidden ep:p-0"
            align="end"
            alignOffset={-8}
            sideOffset={10}
          >
            <Calendar
              mode="range"
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
    </div>
  );
}

import { parse, format as formatDateFns } from "date-fns";
import { ComponentProps, useState } from "react";
import { Calendar } from "../ui/calendar";
import { cn } from "@/lib/utils";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Button } from "../ui/button";
import { ArrowRight, CalendarIcon } from "lucide-react";
import { DateRange } from "react-day-picker";
import { Input } from "../ui/input";

const tryParseDate = (
  date: string | undefined,
  dateFormat: string
): Date | undefined => {
  if (!date) {
    return undefined;
  }

  try {
    return parse(date, dateFormat, new Date());
  } catch {
    return undefined;
  }
};

const getInputFullName = (name: string | undefined, suffix: string): string => {
  if (!name) {
    return suffix;
  }
  return `${name}.${suffix}`;
};

export interface RangeDatePickerValue {
  from?: string;
  to?: string;
}

export function RangeDatePicker({
  id,
  name,
  fromPlaceholder = "Du",
  toPlaceholder = "Au",
  dateFormat = "dd/MM/yyyy",
  className,
  startMonth,
  endMonth,
  locale,
  value,
  onChange,
  numberOfMonths = 2,
}: {
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
}) {
  const [open, setOpen] = useState(false);

  const [inputFromValue, setInputFromValue] = useState<string | undefined>(
    value?.from as string | undefined
  );

  const [inputToValue, setInputToValue] = useState<string | undefined>(
    value?.to as string | undefined
  );

  const [calendarValue, setCalendarValue] = useState<DateRange | undefined>(
    value
      ? {
          from: tryParseDate(value.from, dateFormat),
          to: tryParseDate(value.to, dateFormat),
        }
      : undefined
  );

  const handleCalendarSelect = (date: DateRange | undefined) => {
    setCalendarValue(date);

    const from = date
      ? formatDateFns(date.from as Date, dateFormat)
      : undefined;
    const to = date?.to
      ? formatDateFns(date.to as Date, dateFormat)
      : undefined;

    setInputFromValue(from);
    setInputToValue(to);

    onChange?.({
      from,
      to,
    });
  };

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
        name={getInputFullName(name, "from")}
        className="ep:max-w-28"
        value={inputFromValue}
        placeholder={fromPlaceholder}
        onClick={() => {
          if (!open) {
            setOpen(true);
          }
        }}
        onKeyDown={(e) => {
          if (e.key === "ArrowDown") {
            e.preventDefault();
            setOpen(true);
          }
        }}
        onChange={(e) => {
          setInputFromValue(e.target.value);
          setCalendarValue({
            to: calendarValue?.to,
            from: tryParseDate(e.target.value, dateFormat),
          });

          onChange?.({
            from: e.target.value,
            to: inputToValue,
          });
        }}
      />
      <ArrowRight />
      <Input
        type="text"
        id={getInputFullName(id, "to")}
        name={getInputFullName(name, "to")}
        placeholder={toPlaceholder}
        className="ep:max-w-28"
        value={inputToValue}
        onClick={() => {
          if (!open) {
            setOpen(true);
          }
        }}
        onKeyDown={(e) => {
          if (e.key === "ArrowDown") {
            e.preventDefault();
            setOpen(true);
          }
        }}
        onChange={(e) => {
          setInputToValue(e.target.value);
          setCalendarValue({
            from: calendarValue?.from,
            to: tryParseDate(e.target.value, dateFormat),
          });

          onChange?.({
            from: inputFromValue,
            to: e.target.value,
          });
        }}
      />
      <div className="ep:size-8.5 ep:items-center ep:justify-center ep:flexep:text-input-foreground ep:[&_svg:not([class*=size-])]:size-4">
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <PopoverTrigger asChild>
              <Button id="date" variant="ghost" contentType="icon">
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
              selected={calendarValue}
              onSelect={handleCalendarSelect}
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

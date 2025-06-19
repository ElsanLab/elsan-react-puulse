import { CalendarIcon } from "lucide-react";
import { parse, format } from "date-fns";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Input } from "../ui/input";
import { ComponentProps, useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { dateMatchModifiers } from "react-day-picker";

const formatValue = (
  value: Date | null | undefined,
  dateFormat: string
): string => (value ? format(value, dateFormat) : "");

export function DatePicker({
  placeholder = "Choisir une date",
  dateFormat = "dd/MM/yyyy",
  className,
  startMonth,
  endMonth,
  disabled,
  locale,
  value,
  defaultValue,
  onChange,
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
} & Omit<React.ComponentProps<typeof Input>, "type" | "onChange">) {
  const isControlled = value !== undefined;

  const [open, setOpen] = useState(false);

  const [inputValue, setInputValue] = useState<string>(
    formatValue(defaultValue, dateFormat)
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

    let date: Date | undefined;
    try {
      date = parse(newVal, dateFormat, new Date());
    } catch {
      date = undefined;
    }

    if (date && (!disabled || !dateMatchModifiers(date, disabled))) {
      setCalendarValue(date);
      setCalendarMonth(date);
    }

    onChange?.(date ?? null);
  };

  const handleCalendarSelect = (date: Date | undefined) => {
    setOpen(false);

    setCalendarValue(date);
    setCalendarMonth(date);
    setInputValue(formatValue(date, dateFormat));

    onChange?.(date ?? null);
  };

  return (
    <Input
      {...props}
      disabled={disabled === true}
      value={inputValue}
      onChange={handleInputChange}
      placeholder={placeholder}
      className={cn("ep:max-w-[136px]", className)}
      onKeyDown={(e) => {
        if (e.key === "ArrowDown") {
          e.preventDefault();
          setOpen(true);
        }
      }}
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
              />
            </PopoverContent>
          </Popover>
        </div>
      }
    />
  );
}

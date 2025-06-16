import { CalendarIcon } from "lucide-react";
import { parse, format as formatDateFns } from "date-fns";
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

export function DatePicker({
  placeholder = "Choisir une date",
  dateFormat = "dd/MM/yyyy",
  className,
  startMonth,
  endMonth,
  locale,
  value,
  onChange,
  ...props
}: {
  dateFormat?: string;
  startMonth?: ComponentProps<typeof Calendar>["startMonth"];
  endMonth?: ComponentProps<typeof Calendar>["endMonth"];
  locale?: ComponentProps<typeof Calendar>["locale"];
  onChange?: (value: string) => void;
} & Omit<React.ComponentProps<typeof Input>, "type" | "onChange">) {
  const [open, setOpen] = useState(false);

  const [inputValue, setInputValue] = useState<string | undefined>(
    value as string | undefined
  );

  const [calendarValue, setCalendarValue] = useState<Date | undefined>(
    tryParseDate(value as string | undefined, dateFormat)
  );

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCalendarValue(tryParseDate(e.target.value, dateFormat));
    setInputValue(e.target.value);
    onChange?.(e.target.value);
  };

  const handleCalendarSelect = (date: Date | undefined) => {
    setOpen(false);

    const inputValue = date ? formatDateFns(date, dateFormat) : undefined;

    setCalendarValue(date);
    setInputValue(inputValue);

    onChange?.(inputValue ?? "");
  };

  return (
    <Input
      {...props}
      value={value ?? inputValue}
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
              <Button id="date" variant="ghost" contentType="icon">
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
                selected={calendarValue}
                onSelect={handleCalendarSelect}
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

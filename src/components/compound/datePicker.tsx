import * as React from "react";
import { format, Locale } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

type DatePickerProps = {
  placeholder?: string;
  dateFormat?: string;
  locale?: Locale;
  selected?: Date | undefined;
  onSelect?: (date: Date) => void | undefined;
  min?: Date | undefined;
  max?: Date | undefined;
};

const DatePicker: React.FC<DatePickerProps> = ({
  placeholder = "Choisir",
  dateFormat = "dd/MM/yyyy",
  locale = undefined,
  selected = undefined,
  onSelect = undefined,
  min = undefined,
  max = undefined,
}) => {
  const [date, setDate] = React.useState<Date>();

  React.useEffect(() => {
    if (selected === undefined) return;

    if (date !== selected) {
      setDate(selected);
    }
  }, [selected, date]);

  const handleSelect = (val: Date | undefined) => {
    if (onSelect) {
      if (val) {
        onSelect(val);
      }
    }
    setDate(val);
  };

  return (
    <Popover>
      <DatePickerTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "w-fit justify-start text-left font-normal",
            !date && "text-muted-foreground"
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {date ? format(date, dateFormat) : <span>{placeholder}</span>}
        </Button>
      </DatePickerTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          locale={locale}
          selected={date}
          onSelect={handleSelect}
          initialFocus
          // captionLayout="dropdown"
          fixedWeeks
          fromDate={min}
          toDate={max}
        />
      </PopoverContent>
    </Popover>
  );
};

const DatePickerTrigger = PopoverTrigger;

export { DatePicker, DatePickerTrigger };

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
import { Matcher } from "react-day-picker";

const DatePicker: React.FC<{
  placeholder?: string;
  dateFormat?: string;
  locale?: Locale;
  selected?: Date | undefined;
  onSelect?: (date: Date) => void | undefined;
  min?: Date | undefined;
  max?: Date | undefined;
}> = ({
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

  const hidden: Matcher | Matcher[] | undefined = React.useMemo(() => {
    if (!min && !max) {
      return undefined;
    }

    const hddn = [];
    if (min) {
      hddn.push({ before: min });
    }
    if (max) {
      hddn.push({ after: max });
    }

    return hddn;
  }, [min, max]);

  return (
    <Popover>
      <DatePickerTrigger asChild>
        <Button
          variant="secondary"
          className={cn(
            "ep:w-fit ep:justify-start ep:text-left ep:font-normal",
            !date && "ep:text-muted-foreground"
          )}
        >
          <CalendarIcon className="ep:mr-2 ep:h-4 ep:w-4" />
          {date ? format(date, dateFormat) : <span>{placeholder}</span>}
        </Button>
      </DatePickerTrigger>
      <PopoverContent className="ep:w-auto ep:p-0">
        <Calendar
          mode="single"
          locale={locale}
          selected={date}
          onSelect={handleSelect}
          autoFocus
          // captionLayout="dropdown"
          fixedWeeks
          hidden={hidden}
        />
      </PopoverContent>
    </Popover>
  );
};

const DatePickerTrigger = PopoverTrigger;

export { DatePicker, DatePickerTrigger };

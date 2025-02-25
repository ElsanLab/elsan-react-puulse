import * as React from "react";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";

import { cn } from "@/puulse/lib/utils";
import { Button } from "@/puulse/components/ui/button";
import { Calendar } from "@/puulse/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/puulse/components/ui/popover";

type DatePickerProps = {
  label?: string;
  children?: React.ReactElement;
  selected?: Date;
  onSelect?: (date: Date) => void;
  min?: Date;
  max?: Date;
};

const DatePicker: React.FC<DatePickerProps> = ({
  label = "Choisir",
  children = undefined,
  selected = undefined,
  onSelect = undefined,
  min = new Date(1900, 1, 1),
  max = new Date(2099, 12, 31),
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
      {children ? (
        React.cloneElement(children, { date, label } as never)
      ) : (
        <DefaultDatePickerTrigger label={label} date={date} />
      )}
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          selected={date}
          onSelect={handleSelect}
          initialFocus
          captionLayout="dropdown"
          fixedWeeks
          fromDate={min}
          toDate={max}
        />
      </PopoverContent>
    </Popover>
  );
};

const DatePickerTrigger = PopoverTrigger;

type DefaultDatePickerTriggerProps = {
  label: string;
  date?: Date;
};

const DefaultDatePickerTrigger: React.FC<DefaultDatePickerTriggerProps> = ({
  label,
  date,
}) => (
  <DatePickerTrigger asChild>
    <Button
      variant={"outline"}
      className={cn(
        "w-[140px] justify-start text-left font-normal",
        !date && "text-muted-foreground"
      )}
    >
      <CalendarIcon className="mr-2 h-4 w-4" />
      {date ? format(date, "dd/MM/yyyy") : <span>{label}</span>}
    </Button>
  </DatePickerTrigger>
);

export { DatePicker, DatePickerTrigger, DefaultDatePickerTrigger };

import * as React from "react";
import { ChevronDownIcon } from "lucide-react";
import { formatDate } from "date-fns";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export function DatePicker({
  placeholder = "Choisir une date",
  dateFormat = "dd/MM/yyyy",
  selected,
  onSelect,
  ...props
}: {
  placeholder?: string;
  dateFormat?: string;
  selected?: Date | undefined;
  onSelect?: (date: Date | undefined) => void;
} & React.ComponentProps<typeof Calendar>) {
  const [open, setOpen] = React.useState(false);
  const [date, setDate] = React.useState<Date | undefined>(selected);

  const handleOnSelect = (date: Date | undefined) => {
    setDate(date);
    setOpen(false);
    onSelect?.(date);
  };

  const value = selected || date;

  return (
    <div className="ep:relative ep:flex ep:gap-2">
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <PopoverTrigger asChild>
            <Button
              variant="tertiary"
              id="date"
              className="w-48 justify-between font-normal"
            >
              {!value && placeholder}
              {value && value instanceof Date && formatDate(value, dateFormat)}
              <ChevronDownIcon />
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
            {...props}
            mode="single"
            captionLayout="dropdown"
            selected={value}
            onSelect={handleOnSelect}
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}

import * as React from "react";
import {
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "lucide-react";
import { DayButton, DayPicker, getDefaultClassNames } from "react-day-picker";

import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "@/components/ui/button";

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  captionLayout = "label",
  buttonVariant = "ghost",
  formatters,
  components,
  ...props
}: React.ComponentProps<typeof DayPicker> & {
  buttonVariant?: React.ComponentProps<typeof Button>["variant"];
}) {
  const defaultClassNames = getDefaultClassNames();

  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn(
        "ep:bg-background ep:group/calendar ep:p-3 ep:[--cell-size:--spacing(8)] ep:[[data-slot=card-content]_&]:bg-transparent ep:[[data-slot=popover-content]_&]:bg-transparent",
        String.raw`rtl:**:[.rdp-button\_next>svg]:rotate-180`,
        String.raw`rtl:**:[.rdp-button\_previous>svg]:rotate-180`,
        className
      )}
      captionLayout={captionLayout}
      formatters={{
        formatMonthDropdown: (date) =>
          date.toLocaleString("default", { month: "short" }),
        ...formatters,
      }}
      classNames={{
        root: cn("ep:w-fit", defaultClassNames.root),
        months: cn(
          "ep:flex ep:gap-4 ep:flex-col ep:md:flex-row ep:relative",
          defaultClassNames.months
        ),
        month: cn(
          "ep:flex ep:flex-col ep:w-full ep:gap-4",
          defaultClassNames.month
        ),
        nav: cn(
          "ep:flex ep:items-center ep:gap-1 ep:w-full ep:absolute ep:top-0 ep:inset-x-0 ep:justify-between",
          defaultClassNames.nav
        ),
        button_previous: cn(
          buttonVariants({ variant: buttonVariant }),
          "ep:size-(--cell-size) ep:aria-disabled:opacity-50 ep:p-0 ep:select-none",
          defaultClassNames.button_previous
        ),
        button_next: cn(
          buttonVariants({ variant: buttonVariant }),
          "ep:size-(--cell-size) ep:aria-disabled:opacity-50 ep:p-0 ep:select-none",
          defaultClassNames.button_next
        ),
        month_caption: cn(
          "ep:flex ep:items-center ep:justify-center ep:h-(--cell-size) ep:w-full ep:px-(--cell-size)",
          defaultClassNames.month_caption
        ),
        dropdowns: cn(
          "ep:w-full ep:flex ep:items-center ep:text-sm ep:font-medium ep:justify-center ep:h-(--cell-size) ep:gap-1.5",
          defaultClassNames.dropdowns
        ),
        dropdown_root: cn(
          "ep:relative ep:has-focus:border-ring ep:border ep:border-input ep:shadow-xs ep:has-focus:ring-ring/50 ep:has-focus:ring-[3px] ep:rounded-md",
          defaultClassNames.dropdown_root
        ),
        dropdown: cn(
          "ep:absolute ep:inset-0 ep:opacity-0",
          defaultClassNames.dropdown
        ),
        caption_label: cn(
          "ep:select-none ep:font-medium",
          captionLayout === "label"
            ? "ep:text-sm"
            : "ep:rounded-md ep:pl-2 ep:pr-1 ep:flex ep:items-center ep:gap-1 ep:text-sm ep:h-8 ep:[&>svg]:text-muted-foreground ep:[&>svg]:size-3.5",
          defaultClassNames.caption_label
        ),
        table: "ep:w-full ep:border-collapse",
        weekdays: cn("ep:flex", defaultClassNames.weekdays),
        weekday: cn(
          "ep:text-muted-foreground ep:rounded-md ep:flex-1 ep:font-normal ep:text-[0.8rem] ep:select-none",
          defaultClassNames.weekday
        ),
        week: cn("ep:flex ep:w-full ep:mt-2", defaultClassNames.week),
        week_number_header: cn(
          "ep:select-none ep:w-(--cell-size)",
          defaultClassNames.week_number_header
        ),
        week_number: cn(
          "ep:text-[0.8rem] ep:select-none ep:text-muted-foreground",
          defaultClassNames.week_number
        ),
        day: cn(
          "ep:relative ep:w-full ep:h-full ep:p-0 ep:text-center ep:[&:first-child[data-selected=true]_button]:rounded-l-md ep:[&:last-child[data-selected=true]_button]:rounded-r-md ep:group/day ep:aspect-square ep:select-none",
          defaultClassNames.day
        ),
        range_start: cn(
          "ep:rounded-l-md ep:bg-accent",
          defaultClassNames.range_start
        ),
        range_middle: cn("ep:rounded-none", defaultClassNames.range_middle),
        range_end: cn(
          "ep:rounded-r-md ep:bg-accent",
          defaultClassNames.range_end
        ),
        today: cn(
          "ep:bg-accent ep:text-accent-foreground ep:rounded-md ep:data-[selected=true]:rounded-none",
          defaultClassNames.today
        ),
        outside: cn(
          "ep:text-muted-foreground ep:aria-selected:text-muted-foreground",
          defaultClassNames.outside
        ),
        disabled: cn(
          "ep:text-muted-foreground ep:opacity-50",
          defaultClassNames.disabled
        ),
        hidden: cn("ep:invisible", defaultClassNames.hidden),
        ...classNames,
      }}
      components={{
        Root: ({ className, rootRef, ...props }) => {
          return (
            <div
              data-slot="calendar"
              ref={rootRef}
              className={cn(className)}
              {...props}
            />
          );
        },
        Chevron: ({ className, orientation, ...props }) => {
          if (orientation === "left") {
            return (
              <ChevronLeftIcon
                className={cn("ep:size-4", className)}
                {...props}
              />
            );
          }

          if (orientation === "right") {
            return (
              <ChevronRightIcon
                className={cn("ep:size-4", className)}
                {...props}
              />
            );
          }

          return (
            <ChevronDownIcon
              className={cn("ep:size-4", className)}
              {...props}
            />
          );
        },
        DayButton: CalendarDayButton,
        WeekNumber: ({ children, ...props }) => {
          return (
            <td {...props}>
              <div className="ep:flex ep:size-(--cell-size) ep:items-center ep:justify-center ep:text-center">
                {children}
              </div>
            </td>
          );
        },
        ...components,
      }}
      {...props}
    />
  );
}

function CalendarDayButton({
  className,
  day,
  modifiers,
  ...props
}: React.ComponentProps<typeof DayButton>) {
  const defaultClassNames = getDefaultClassNames();

  const ref = React.useRef<HTMLButtonElement>(null);
  React.useEffect(() => {
    if (modifiers.focused) ref.current?.focus();
  }, [modifiers.focused]);

  return (
    <Button
      ref={ref}
      variant="ghost"
      content="icon"
      data-day={day.date.toLocaleDateString()}
      data-selected-single={
        modifiers.selected &&
        !modifiers.range_start &&
        !modifiers.range_end &&
        !modifiers.range_middle
      }
      data-range-start={modifiers.range_start}
      data-range-end={modifiers.range_end}
      data-range-middle={modifiers.range_middle}
      className={cn(
        "ep:data-[selected-single=true]:bg-primary ep:data-[selected-single=true]:text-primary-foreground ep:data-[range-middle=true]:bg-accent ep:data-[range-middle=true]:text-accent-foreground ep:data-[range-start=true]:bg-primary ep:data-[range-start=true]:text-primary-foreground ep:data-[range-end=true]:bg-primary ep:data-[range-end=true]:text-primary-foreground ep:group-data-[focused=true]/day:border-ring ep:group-data-[focused=true]/day:ring-ring/50 ep:dark:hover:text-accent-foreground ep:flex ep:aspect-square ep:size-auto ep:w-full ep:min-w-(--cell-size) ep:flex-col ep:gap-1 ep:leading-none ep:font-normal ep:group-data-[focused=true]/day:relative ep:group-data-[focused=true]/day:z-10 ep:group-data-[focused=true]/day:ring-[3px] ep:data-[range-end=true]:rounded-md ep:data-[range-end=true]:rounded-r-md ep:data-[range-middle=true]:rounded-none ep:data-[range-start=true]:rounded-md ep:data-[range-start=true]:rounded-l-md ep:[&>span]:text-xs ep:[&>span]:opacity-70",
        defaultClassNames.day,
        className
      )}
      {...props}
    />
  );
}

export { Calendar, CalendarDayButton };

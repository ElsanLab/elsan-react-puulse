import { jsx as r } from "/Users/clementgrihon/Elsan/Projects/elsan-react-puulse/node_modules/react/jsx-runtime.js";
import { ChevronRight as l, ChevronLeft as c } from "/Users/clementgrihon/Elsan/Projects/elsan-react-puulse/node_modules/lucide-react/dist/esm/lucide-react.js";
import { DayPicker as m } from "/Users/clementgrihon/Elsan/Projects/elsan-react-puulse/node_modules/react-day-picker/dist/index.esm.js";
import { cn as e } from "../../lib/utils.js";
import { buttonVariants as d } from "./button.js";
function x({
  className: n,
  classNames: i,
  showOutsideDays: s = !0,
  ...o
}) {
  return /* @__PURE__ */ r(
    m,
    {
      showOutsideDays: s,
      className: e("p-3", n),
      classNames: {
        months: "flex flex-col sm:flex-row gap-2",
        month: "flex flex-col gap-4",
        caption: "flex justify-center pt-1 relative items-center w-full",
        caption_label: "text-sm font-medium",
        nav: "flex items-center gap-1",
        nav_button: e(
          d({ variant: "outline" }),
          "size-7 bg-transparent p-0 opacity-50 hover:opacity-100"
        ),
        nav_button_previous: "absolute left-1",
        nav_button_next: "absolute right-1",
        table: "w-full border-collapse space-x-1",
        head_row: "flex",
        head_cell: "text-muted-foreground rounded-md w-8 font-normal text-[0.8rem]",
        row: "flex w-full mt-2",
        cell: e(
          "relative p-0 text-center text-sm focus-within:relative focus-within:z-20 [&:has([aria-selected])]:bg-accent [&:has([aria-selected].day-range-end)]:rounded-r-md",
          o.mode === "range" ? "[&:has(>.day-range-end)]:rounded-r-md [&:has(>.day-range-start)]:rounded-l-md first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md" : "[&:has([aria-selected])]:rounded-md"
        ),
        day: e(
          d({ variant: "ghost" }),
          "size-8 p-0 font-normal aria-selected:opacity-100"
        ),
        day_range_start: "day-range-start aria-selected:bg-primary aria-selected:text-primary-foreground",
        day_range_end: "day-range-end aria-selected:bg-primary aria-selected:text-primary-foreground",
        day_selected: "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground",
        day_today: "bg-accent text-accent-foreground",
        day_outside: "day-outside text-muted-foreground aria-selected:text-muted-foreground",
        day_disabled: "text-muted-foreground opacity-50",
        day_range_middle: "aria-selected:bg-accent aria-selected:text-accent-foreground",
        day_hidden: "invisible",
        ...i
      },
      components: {
        IconLeft: ({ className: a, ...t }) => /* @__PURE__ */ r(c, { className: e("size-4", a), ...t }),
        IconRight: ({ className: a, ...t }) => /* @__PURE__ */ r(l, { className: e("size-4", a), ...t })
      },
      ...o
    }
  );
}
export {
  x as Calendar
};

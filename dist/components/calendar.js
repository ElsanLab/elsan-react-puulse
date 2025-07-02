var w = Object.defineProperty;
var p = (o, s) => w(o, "name", { value: s, configurable: !0 });
import { jsx as n } from "react/jsx-runtime";
import * as m from "react";
import { ChevronLeftIcon as y, ChevronRightIcon as _, ChevronDownIcon as h } from "lucide-react";
import { getDefaultClassNames as x, DayPicker as v } from "react-day-picker";
import { cn as e } from "../lib/utils.js";
import { buttonVariants as f, Button as z } from "./button.js";
function B({
  className: o,
  classNames: s,
  showOutsideDays: r = !0,
  captionLayout: u = "label",
  buttonVariant: c = "ghost",
  formatters: i,
  components: g,
  ...b
}) {
  const t = x();
  return /* @__PURE__ */ n(
    v,
    {
      showOutsideDays: r,
      className: e(
        "ep:bg-background ep:group/calendar ep:p-3 ep:[--cell-size:--spacing(8)] ep:[[data-slot=card-content]_&]:bg-transparent ep:[[data-slot=popover-content]_&]:bg-transparent",
        String.raw`rtl:**:[.rdp-button\_next>svg]:rotate-180`,
        String.raw`rtl:**:[.rdp-button\_previous>svg]:rotate-180`,
        o
      ),
      captionLayout: u,
      formatters: {
        formatMonthDropdown: /* @__PURE__ */ p((a) => a.toLocaleString("default", { month: "short" }), "formatMonthDropdown"),
        ...i
      },
      classNames: {
        root: e("ep:w-fit", t.root),
        months: e(
          "ep:flex ep:gap-4 ep:flex-col ep:md:flex-row ep:relative",
          t.months
        ),
        month: e(
          "ep:flex ep:flex-col ep:w-full ep:gap-4",
          t.month
        ),
        nav: e(
          "ep:flex ep:items-center ep:gap-1 ep:w-full ep:absolute ep:top-0 ep:inset-x-0 ep:justify-between",
          t.nav
        ),
        button_previous: e(
          f({ variant: c }),
          "ep:size-(--cell-size) ep:aria-disabled:opacity-50 ep:p-0 ep:select-none",
          t.button_previous
        ),
        button_next: e(
          f({ variant: c }),
          "ep:size-(--cell-size) ep:aria-disabled:opacity-50 ep:p-0 ep:select-none",
          t.button_next
        ),
        month_caption: e(
          "ep:flex ep:items-center ep:justify-center ep:h-(--cell-size) ep:w-full ep:px-(--cell-size)",
          t.month_caption
        ),
        dropdowns: e(
          "ep:w-full ep:flex ep:items-center ep:text-sm ep:font-medium ep:justify-center ep:h-(--cell-size) ep:gap-1.5",
          t.dropdowns
        ),
        dropdown_root: e(
          "ep:relative ep:has-focus:border-ring ep:border ep:border-input ep:shadow-xs ep:has-focus:ring-ring/50 ep:has-focus:ring-[3px] ep:rounded-sm",
          t.dropdown_root
        ),
        dropdown: e(
          "ep:absolute ep:inset-0 ep:opacity-0",
          t.dropdown
        ),
        caption_label: e(
          "ep:select-none ep:font-medium",
          u === "label" ? "ep:text-sm" : "ep:rounded-sm ep:pl-2 ep:pr-1 ep:flex ep:items-center ep:gap-1 ep:text-sm ep:h-8 ep:[&>svg]:text-muted-foreground ep:[&>svg]:size-3.5",
          t.caption_label
        ),
        table: "ep:w-full ep:border-collapse",
        weekdays: e("ep:flex", t.weekdays),
        weekday: e(
          "ep:text-muted-foreground ep:rounded-sm ep:flex-1 ep:font-normal ep:text-[0.8rem] ep:select-none",
          t.weekday
        ),
        week: e("ep:flex ep:w-full ep:mt-2", t.week),
        week_number_header: e(
          "ep:select-none ep:w-(--cell-size)",
          t.week_number_header
        ),
        week_number: e(
          "ep:text-[0.8rem] ep:select-none ep:text-muted-foreground",
          t.week_number
        ),
        day: e(
          "ep:relative ep:w-full ep:h-full ep:p-0 ep:text-center ep:[&:first-child[data-selected=true]_button]:rounded-l-md ep:[&:last-child[data-selected=true]_button]:rounded-r-md ep:group/day ep:aspect-square ep:select-none",
          t.day
        ),
        range_start: e(
          "ep:rounded-l-md ep:bg-accent",
          t.range_start
        ),
        range_middle: e("ep:rounded-none", t.range_middle),
        range_end: e(
          "ep:rounded-r-md ep:bg-accent",
          t.range_end
        ),
        today: e(
          "ep:bg-accent ep:text-accent-foreground ep:rounded-sm ep:data-[selected=true]:rounded-none",
          t.today
        ),
        outside: e(
          "ep:text-muted-foreground ep:aria-selected:text-muted-foreground",
          t.outside
        ),
        disabled: e(
          "ep:text-muted-foreground ep:opacity-50",
          t.disabled
        ),
        hidden: e("ep:invisible", t.hidden),
        ...s
      },
      components: {
        Root: /* @__PURE__ */ p(({ className: a, rootRef: d, ...l }) => /* @__PURE__ */ n(
          "div",
          {
            "data-slot": "calendar",
            ref: d,
            className: e(a),
            ...l
          }
        ), "Root"),
        Chevron: /* @__PURE__ */ p(({ className: a, orientation: d, ...l }) => d === "left" ? /* @__PURE__ */ n(
          y,
          {
            className: e("ep:size-4", a),
            ...l
          }
        ) : d === "right" ? /* @__PURE__ */ n(
          _,
          {
            className: e("ep:size-4", a),
            ...l
          }
        ) : /* @__PURE__ */ n(
          h,
          {
            className: e("ep:size-4", a),
            ...l
          }
        ), "Chevron"),
        DayButton: k,
        WeekNumber: /* @__PURE__ */ p(({ children: a, ...d }) => /* @__PURE__ */ n("td", { ...d, children: /* @__PURE__ */ n("div", { className: "ep:flex ep:size-(--cell-size) ep:items-center ep:justify-center ep:text-center", children: a }) }), "WeekNumber"),
        ...g
      },
      ...b
    }
  );
}
p(B, "Calendar");
function k({
  className: o,
  day: s,
  modifiers: r,
  ...u
}) {
  const c = x(), i = m.useRef(null);
  return m.useEffect(() => {
    var g;
    r.focused && ((g = i.current) == null || g.focus());
  }, [r.focused]), /* @__PURE__ */ n(
    z,
    {
      ref: i,
      variant: "ghost",
      contentType: "icon",
      "data-day": s.date.toLocaleDateString(),
      "data-selected-single": r.selected && !r.range_start && !r.range_end && !r.range_middle,
      "data-range-start": r.range_start,
      "data-range-end": r.range_end,
      "data-range-middle": r.range_middle,
      className: e(
        "ep:data-[selected-single=true]:bg-primary ep:data-[selected-single=true]:text-primary-foreground ep:data-[range-middle=true]:bg-accent ep:data-[range-middle=true]:text-accent-foreground ep:data-[range-start=true]:bg-primary ep:data-[range-start=true]:text-primary-foreground ep:data-[range-end=true]:bg-primary ep:data-[range-end=true]:text-primary-foreground ep:group-data-[focused=true]/day:border-ring ep:group-data-[focused=true]/day:ring-ring/50 ep:dark:hover:text-accent-foreground ep:flex ep:aspect-square ep:size-auto ep:w-full ep:min-w-(--cell-size) ep:flex-col ep:gap-1 ep:leading-none ep:font-normal ep:group-data-[focused=true]/day:relative ep:group-data-[focused=true]/day:z-10 ep:group-data-[focused=true]/day:ring-[3px] ep:data-[range-end=true]:rounded-sm ep:data-[range-end=true]:rounded-r-md ep:data-[range-middle=true]:rounded-none ep:data-[range-start=true]:rounded-sm ep:data-[range-start=true]:rounded-l-md ep:[&>span]:text-xs ep:[&>span]:opacity-70",
        c.day,
        o
      ),
      ...u
    }
  );
}
p(k, "CalendarDayButton");
export {
  B as Calendar,
  k as CalendarDayButton
};

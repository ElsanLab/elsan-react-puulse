var V = Object.defineProperty;
var f = (u, o) => V(u, "name", { value: o, configurable: !0 });
import { jsx as r, jsxs as Y } from "react/jsx-runtime";
import { buttonVariants as M, Button as _ } from "./button.js";
import { cn as a } from "../../lib/utils.js";
import { differenceInCalendarDays as C } from "date-fns";
import { ChevronLeft as z, ChevronRight as G } from "lucide-react";
import * as y from "react";
import { DayPicker as ee, useDayPicker as j, labelPrevious as te, labelNext as ae } from "react-day-picker";
import { fr as oe } from "../../node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/locale/fr.js";
function ne({
  className: u,
  showOutsideDays: o = !0,
  showYearSwitcher: d = !0,
  yearRange: m = 12,
  numberOfMonths: t,
  locale: l = oe,
  ...e
}) {
  const [n, c] = y.useState("days"), [p, i] = y.useState(
    y.useMemo(() => {
      const b = (/* @__PURE__ */ new Date()).getFullYear();
      return {
        from: b - Math.floor(m / 2 - 1),
        to: b + Math.ceil(m / 2)
      };
    }, [m])
  ), { onPrevClick: g, startMonth: N, endMonth: h } = e, x = n === "years" ? 1 : t, s = a("ep:relative ep:flex", e.monthsClassName), I = a(
    "ep:relative ep:mx-10 ep:flex ep:h-7 ep:items-center ep:justify-center",
    e.monthCaptionClassName
  ), L = a("ep:flex ep:flex-row", e.weekdaysClassName), B = a(
    "ep:w-8 ep:text-sm ep:font-normal ep:text-muted-foreground",
    e.weekdayClassName
  ), S = a("ep:w-full", e.monthClassName), A = a(
    "ep:relative ep:flex ep:items-center ep:justify-center ep:pt-1",
    e.captionClassName
  ), E = a(
    "ep:truncate ep:text-sm ep:font-medium",
    e.captionLabelClassName
  ), w = M({
    variant: "outline",
    className: "ep:absolute ep:h-7 ep:w-7 ep:bg-transparent ep:p-0 ep:opacity-50 ep:hover:opacity-100"
  }), F = a(
    w,
    "ep:right-0",
    e.buttonNextClassName
  ), T = a(
    w,
    "ep:left-0",
    e.buttonPreviousClassName
  ), $ = a("ep:flex ep:items-start", e.navClassName), O = a(
    "ep:mx-auto ep:mt-4",
    e.monthGridClassName
  ), R = a(
    "ep:mt-2 ep:flex ep:w-max ep:items-start",
    e.weekClassName
  ), k = a(
    "ep:flex ep:size-8 ep:flex-1 ep:items-center ep:justify-center p-0 ep:text-sm",
    e.dayClassName
  ), q = a(
    M({ variant: "ghost" }),
    "ep:size-8 ep:rounded-md ep:p-0 ep:font-normal ep:transition-none ep:aria-selected:opacity-100",
    e.dayButtonClassName
  ), v = "ep:bg-accent ep:[&>button]:bg-primary ep:[&>button]:text-primary-foreground ep:[&>button]:hover:bg-primary ep:[&>button]:hover:text-primary-foreground", H = a(
    v,
    "ep:day-range-start ep:rounded-s-md",
    e.rangeStartClassName
  ), J = a(
    v,
    "ep:day-range-end ep:rounded-e-md",
    e.rangeEndClassName
  ), K = a(
    "ep:bg-accent ep:text-foreground! ep:[&>button]:bg-transparent ep:[&>button]:!text-foreground ep:[&>button]:hover:bg-transparent ep:[&>button]:hover:!text-foreground",
    e.rangeMiddleClassName
  ), Q = a(
    "ep:[&>button]:bg-primary ep:[&>button]:text-primary-foreground ep:[&>button]:hover:bg-primary ep:[&>button]:hover:text-primary-foreground",
    e.selectedClassName
  ), U = a(
    "[&>button]:bg-accent [&>button]:text-accent-foreground",
    e.todayClassName
  ), W = a(
    "day-outside ep:text-muted-foreground ep:opacity-50 ep:aria-selected:bg-accent/50 ep:aria-selected:text-muted-foreground ep:aria-selected:opacity-30",
    e.outsideClassName
  ), X = a(
    "ep:text-muted-foreground ep:opacity-50",
    e.disabledClassName
  ), Z = a("ep:invisible ep:flex-1", e.hiddenClassName);
  return /* @__PURE__ */ r(
    ee,
    {
      locale: l,
      showOutsideDays: o,
      className: a("ep:p-3", u),
      style: {
        width: 248.8 * (x ?? 1) + "px"
      },
      classNames: {
        months: s,
        month_caption: I,
        weekdays: L,
        weekday: B,
        month: S,
        caption: A,
        caption_label: E,
        button_next: F,
        button_previous: T,
        nav: $,
        month_grid: O,
        week: R,
        day: k,
        day_button: q,
        range_start: H,
        range_middle: K,
        range_end: J,
        selected: Q,
        today: U,
        outside: W,
        disabled: X,
        hidden: Z
      },
      components: {
        Chevron: /* @__PURE__ */ f(({ orientation: b }) => /* @__PURE__ */ r(b === "left" ? z : G, { className: "ep:size-4" }), "Chevron"),
        Nav: /* @__PURE__ */ f(({ className: b }) => /* @__PURE__ */ r(
          se,
          {
            className: b,
            displayYears: p,
            navView: n,
            setDisplayYears: i,
            startMonth: N,
            endMonth: h,
            onPrevClick: g
          }
        ), "Nav"),
        CaptionLabel: /* @__PURE__ */ f((b) => /* @__PURE__ */ r(
          re,
          {
            showYearSwitcher: d,
            navView: n,
            setNavView: c,
            displayYears: p,
            ...b
          }
        ), "CaptionLabel"),
        MonthGrid: /* @__PURE__ */ f(({ className: b, children: D, ...P }) => /* @__PURE__ */ r(
          me,
          {
            children: D,
            className: b,
            displayYears: p,
            startMonth: N,
            endMonth: h,
            navView: n,
            setNavView: c,
            ...P
          }
        ), "MonthGrid")
      },
      numberOfMonths: x,
      ...e
    }
  );
}
f(ne, "Calendar");
ne.displayName = "Calendar";
function se({
  className: u,
  navView: o,
  startMonth: d,
  endMonth: m,
  displayYears: t,
  setDisplayYears: l,
  onPrevClick: e,
  onNextClick: n
}) {
  const { nextMonth: c, previousMonth: p, goToMonth: i } = j(), g = o === "years" ? d && C(
    new Date(t.from - 1, 0, 1),
    d
  ) < 0 || m && C(
    new Date(t.from - 1, 0, 1),
    m
  ) > 0 : !p, N = o === "years" ? d && C(
    new Date(t.to + 1, 0, 1),
    d
  ) < 0 || m && C(
    new Date(t.to + 1, 0, 1),
    m
  ) > 0 : !c, h = y.useCallback(() => {
    if (p) {
      if (o === "years") {
        l((s) => ({
          from: s.from - (s.to - s.from + 1),
          to: s.to - (s.to - s.from + 1)
        })), e == null || e(
          new Date(
            t.from - (t.to - t.from),
            0,
            1
          )
        );
        return;
      }
      i(p), e == null || e(p);
    }
  }, [
    p,
    o,
    i,
    e,
    l,
    t.from,
    t.to
  ]), x = y.useCallback(() => {
    if (c) {
      if (o === "years") {
        l((s) => ({
          from: s.from + (s.to - s.from + 1),
          to: s.to + (s.to - s.from + 1)
        })), n == null || n(
          new Date(
            t.from + (t.to - t.from),
            0,
            1
          )
        );
        return;
      }
      i(c), n == null || n(c);
    }
  }, [
    t.from,
    t.to,
    i,
    o,
    c,
    n,
    l
  ]);
  return /* @__PURE__ */ Y("nav", { className: a("ep:flex ep:items-center", u), children: [
    /* @__PURE__ */ r(
      _,
      {
        variant: "outline",
        className: "ep:absolute ep:left-0 ep:size-7 ep:bg-transparent ep:p-0 ep:opacity-80 ep:hover:opacity-100",
        type: "button",
        tabIndex: g ? void 0 : -1,
        disabled: g,
        "aria-label": o === "years" ? `Go to the previous ${t.to - t.from + 1} years` : te(p),
        onClick: h,
        children: /* @__PURE__ */ r(z, { className: "ep:size-4" })
      }
    ),
    /* @__PURE__ */ r(
      _,
      {
        variant: "outline",
        className: "ep:absolute ep:right-0 ep:size-7 ep:bg-transparent ep:p-0 ep:opacity-80 ep:hover:opacity-100",
        type: "button",
        tabIndex: N ? void 0 : -1,
        disabled: N,
        "aria-label": o === "years" ? `Go to the next ${t.to - t.from + 1} years` : ae(c),
        onClick: x,
        children: /* @__PURE__ */ r(G, { className: "ep:size-4" })
      }
    )
  ] });
}
f(se, "Nav");
function re({
  children: u,
  showYearSwitcher: o,
  navView: d,
  setNavView: m,
  displayYears: t,
  ...l
}) {
  return o ? /* @__PURE__ */ r(
    _,
    {
      className: "ep:h-7 ep:w-full ep:truncate ep:text-sm ep:font-medium",
      variant: "ghost",
      size: "sm",
      onClick: /* @__PURE__ */ f(() => m((e) => e === "days" ? "years" : "days"), "onClick"),
      children: d === "days" ? u : t.from + " - " + t.to
    }
  ) : /* @__PURE__ */ r("span", { ...l, children: u });
}
f(re, "CaptionLabel");
function me({
  className: u,
  children: o,
  displayYears: d,
  startMonth: m,
  endMonth: t,
  navView: l,
  setNavView: e,
  ...n
}) {
  return l === "years" ? /* @__PURE__ */ r(
    ue,
    {
      displayYears: d,
      startMonth: m,
      endMonth: t,
      setNavView: e,
      navView: l,
      className: u,
      ...n
    }
  ) : /* @__PURE__ */ r("table", { className: u, ...n, children: o });
}
f(me, "MonthGrid");
function ue({
  className: u,
  displayYears: o,
  startMonth: d,
  endMonth: m,
  setNavView: t,
  navView: l,
  ...e
}) {
  const { goToMonth: n, selected: c } = j();
  return /* @__PURE__ */ r(
    "div",
    {
      className: a("ep:grid ep:grid-cols-4 ep:gap-y-2", u),
      ...e,
      children: Array.from(
        { length: o.to - o.from + 1 },
        (p, i) => {
          const g = C(
            new Date(o.from + i, 11, 31),
            d
          ) < 0, N = C(
            new Date(o.from + i, 0, 0),
            m
          ) > 0, h = g || N;
          return /* @__PURE__ */ r(
            _,
            {
              className: a(
                "ep:h-7 ep:w-full ep:text-sm ep:font-normal ep:text-foreground",
                o.from + i === (/* @__PURE__ */ new Date()).getFullYear() && "ep:bg-accent ep:font-medium ep:text-accent-foreground"
              ),
              variant: "ghost",
              onClick: /* @__PURE__ */ f(() => {
                t("days"), n(
                  new Date(
                    o.from + i,
                    (c == null ? void 0 : c.getMonth()) ?? 0
                  )
                );
              }, "onClick"),
              disabled: l === "years" ? h : void 0,
              children: o.from + i
            },
            i
          );
        }
      )
    }
  );
}
f(ue, "YearGrid");
export {
  ne as Calendar
};

var k = Object.defineProperty;
var a = (n, o) => k(n, "name", { value: o, configurable: !0 });
import { jsx as r, jsxs as K } from "react/jsx-runtime";
import { CalendarIcon as A } from "lucide-react";
import { format as B, parse as L } from "date-fns";
import { Calendar as R } from "./calendar.js";
import { Popover as q, PopoverTrigger as z, PopoverContent as E } from "./popover.js";
import { Input as G } from "./input.js";
import { useState as p } from "react";
import { cn as H } from "../lib/utils.js";
import { Button as J } from "./button.js";
import { dateMatchModifiers as Q } from "react-day-picker";
const w = /* @__PURE__ */ a((n, o) => n ? B(n, o) : "", "formatInputValue");
function oe({
  className: n,
  dateFormat: o = "dd/MM/yyyy",
  defaultValue: f,
  disabled: l,
  endMonth: y,
  locale: I,
  numberOfMonths: M = 1,
  onChange: i,
  placeholder: x = "Choisir une date",
  startMonth: D,
  value: u,
  ...g
}) {
  const [N, s] = p(!1), [V, h] = p(
    w(f, o)
  ), [C, c] = p(
    f
  ), [O, d] = p(), P = /* @__PURE__ */ a((e) => {
    var v;
    const m = ((v = e.target.value) == null ? void 0 : v.trim()) ?? "";
    if (h(m), m.trim() === "") {
      c(void 0);
      return;
    }
    let t = L(m, o, /* @__PURE__ */ new Date());
    isNaN(t.getTime()) && (t = void 0), l && t && Q(t, l) && (t = void 0), t && (c(t), d(t)), i == null || i(t ?? null);
  }, "handleInputChange"), S = /* @__PURE__ */ a((e) => {
    e.key === "ArrowDown" && (e.preventDefault(), s(!0));
  }, "handleInputKeyDown"), T = /* @__PURE__ */ a((e) => {
    s(!1), c(e), d(e), h(w(e, o)), i == null || i(e ?? null);
  }, "handleCalendarSelect"), j = u !== void 0;
  return /* @__PURE__ */ r(
    G,
    {
      ...g,
      disabled: l === !0,
      value: V,
      onChange: P,
      placeholder: x,
      className: H("ep:max-w-[136px]", n),
      onKeyDown: S,
      right: /* @__PURE__ */ r("div", { className: "ep:relative ep:flex ep:gap-2", children: /* @__PURE__ */ K(q, { open: N, onOpenChange: s, children: [
        /* @__PURE__ */ r(z, { asChild: !0, children: /* @__PURE__ */ r(
          J,
          {
            id: "date",
            variant: "ghost",
            contentType: "icon",
            disabled: l === !0,
            children: /* @__PURE__ */ r(A, {})
          }
        ) }),
        /* @__PURE__ */ r(
          E,
          {
            className: "ep:w-auto ep:overflow-hidden ep:p-0",
            align: "end",
            alignOffset: -8,
            sideOffset: 10,
            children: /* @__PURE__ */ r(
              R,
              {
                mode: "single",
                captionLayout: "dropdown",
                selected: j ? u : C,
                onSelect: T,
                month: O,
                onMonthChange: d,
                disabled: l,
                startMonth: D,
                endMonth: y,
                locale: I,
                numberOfMonths: M
              }
            )
          }
        )
      ] }) })
    }
  );
}
a(oe, "DatePicker");
export {
  oe as DatePicker
};

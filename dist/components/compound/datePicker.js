var k = Object.defineProperty;
var a = (n, o) => k(n, "name", { value: o, configurable: !0 });
import { jsx as r, jsxs as K } from "react/jsx-runtime";
import { CalendarIcon as A } from "lucide-react";
import { format as B, parse as L } from "date-fns";
import { Calendar as q } from "../ui/calendar.js";
import { Popover as z, PopoverTrigger as E, PopoverContent as G } from "../ui/popover.js";
import { Input as H } from "../ui/input.js";
import { useState as p } from "react";
import { cn as J } from "../../lib/utils.js";
import { Button as Q } from "../ui/button.js";
import { dateMatchModifiers as R } from "react-day-picker";
const w = /* @__PURE__ */ a((n, o) => n ? B(n, o) : "", "formatInputValue");
function oe({
  className: n,
  dateFormat: o = "dd/MM/yyyy",
  defaultValue: f,
  disabled: l,
  endMonth: y,
  locale: M,
  numberOfMonths: x = 1,
  onChange: i,
  placeholder: D = "Choisir une date",
  startMonth: I,
  value: u,
  ...g
}) {
  const [N, s] = p(!1), [V, h] = p(
    w(f, o)
  ), [C, c] = p(
    f
  ), [O, m] = p(), P = /* @__PURE__ */ a((e) => {
    var v;
    const d = ((v = e.target.value) == null ? void 0 : v.trim()) ?? "";
    if (h(d), d.trim() === "") {
      c(void 0);
      return;
    }
    let t = L(d, o, /* @__PURE__ */ new Date());
    isNaN(t.getTime()) && (t = void 0), l && t && R(t, l) && (t = void 0), t && (c(t), m(t)), i == null || i(t ?? null);
  }, "handleInputChange"), S = /* @__PURE__ */ a((e) => {
    e.key === "ArrowDown" && (e.preventDefault(), s(!0));
  }, "handleInputKeyDown"), T = /* @__PURE__ */ a((e) => {
    s(!1), c(e), m(e), h(w(e, o)), i == null || i(e ?? null);
  }, "handleCalendarSelect"), j = u !== void 0;
  return /* @__PURE__ */ r(
    H,
    {
      ...g,
      disabled: l === !0,
      value: V,
      onChange: P,
      placeholder: D,
      className: J("ep:max-w-[136px]", n),
      onKeyDown: S,
      right: /* @__PURE__ */ r("div", { className: "ep:relative ep:flex ep:gap-2", children: /* @__PURE__ */ K(z, { open: N, onOpenChange: s, children: [
        /* @__PURE__ */ r(E, { asChild: !0, children: /* @__PURE__ */ r(
          Q,
          {
            id: "date",
            variant: "ghost",
            contentType: "icon",
            disabled: l === !0,
            children: /* @__PURE__ */ r(A, {})
          }
        ) }),
        /* @__PURE__ */ r(
          G,
          {
            className: "ep:w-auto ep:overflow-hidden ep:p-0",
            align: "end",
            alignOffset: -8,
            sideOffset: 10,
            children: /* @__PURE__ */ r(
              q,
              {
                mode: "single",
                captionLayout: "dropdown",
                selected: j ? u : C,
                onSelect: T,
                month: O,
                onMonthChange: m,
                disabled: l,
                startMonth: I,
                endMonth: y,
                locale: M,
                numberOfMonths: x
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

var V = Object.defineProperty;
var a = (o, t) => V(o, "name", { value: t, configurable: !0 });
import { jsx as r, jsxs as I } from "react/jsx-runtime";
import { CalendarIcon as O } from "lucide-react";
import { parse as N, format as S } from "date-fns";
import { Calendar as j } from "../ui/calendar.js";
import { Popover as k, PopoverTrigger as M, PopoverContent as T } from "../ui/popover.js";
import { Input as A } from "../ui/input.js";
import { useState as l } from "react";
import { cn as B } from "../../lib/utils.js";
import { Button as C } from "../ui/button.js";
const u = /* @__PURE__ */ a((o, t) => {
  if (o)
    try {
      return N(o, t, /* @__PURE__ */ new Date());
    } catch {
      return;
    }
}, "tryParseDate");
function R({
  placeholder: o = "Choisir une date",
  dateFormat: t = "dd/MM/yyyy",
  className: f,
  startMonth: m,
  endMonth: v,
  locale: y,
  value: i,
  onChange: n,
  ...w
}) {
  const [h, p] = l(!1), [x, s] = l(
    i
  ), [D, c] = l(
    u(i, t)
  ), g = /* @__PURE__ */ a((e) => {
    c(u(e.target.value, t)), s(e.target.value), n == null || n(e.target.value);
  }, "handleInputChange"), P = /* @__PURE__ */ a((e) => {
    p(!1);
    const d = e ? S(e, t) : void 0;
    c(e), s(d), n == null || n(d ?? "");
  }, "handleCalendarSelect");
  return /* @__PURE__ */ r(
    A,
    {
      ...w,
      value: i ?? x,
      onChange: g,
      placeholder: o,
      className: B("ep:max-w-[136px]", f),
      onKeyDown: /* @__PURE__ */ a((e) => {
        e.key === "ArrowDown" && (e.preventDefault(), p(!0));
      }, "onKeyDown"),
      right: /* @__PURE__ */ r("div", { className: "ep:relative ep:flex ep:gap-2", children: /* @__PURE__ */ I(k, { open: h, onOpenChange: p, children: [
        /* @__PURE__ */ r(M, { asChild: !0, children: /* @__PURE__ */ r(C, { id: "date", variant: "ghost", contentType: "icon", children: /* @__PURE__ */ r(O, {}) }) }),
        /* @__PURE__ */ r(
          T,
          {
            className: "ep:w-auto ep:overflow-hidden ep:p-0",
            align: "end",
            alignOffset: -8,
            sideOffset: 10,
            children: /* @__PURE__ */ r(
              j,
              {
                mode: "single",
                captionLayout: "dropdown",
                selected: D,
                onSelect: P,
                startMonth: m,
                endMonth: v,
                locale: y
              }
            )
          }
        )
      ] }) })
    }
  );
}
a(R, "DatePicker");
export {
  R as DatePicker
};

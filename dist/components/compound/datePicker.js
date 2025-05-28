var v = Object.defineProperty;
var d = (s, a) => v(s, "name", { value: a, configurable: !0 });
import { jsxs as c, jsx as o } from "react/jsx-runtime";
import * as f from "react";
import { format as g } from "date-fns";
import { Calendar as C } from "lucide-react";
import { cn as y } from "../../lib/utils.js";
import { Button as P } from "../ui/button.js";
import { Calendar as j } from "../ui/calendar.js";
import { PopoverTrigger as k, Popover as w, PopoverContent as x } from "../ui/popover.js";
const R = /* @__PURE__ */ d(({
  placeholder: s = "Choisir",
  dateFormat: a = "dd/MM/yyyy",
  locale: m = void 0,
  selected: t = void 0,
  onSelect: p = void 0,
  min: i = void 0,
  max: n = void 0
}) => {
  const [r, u] = f.useState();
  f.useEffect(() => {
    t !== void 0 && r !== t && u(t);
  }, [t, r]);
  const l = /* @__PURE__ */ d((e) => {
    p && e && p(e), u(e);
  }, "handleSelect"), h = f.useMemo(() => {
    if (!i && !n)
      return;
    const e = [];
    return i && e.push({ before: i }), n && e.push({ after: n }), e;
  }, [i, n]);
  return /* @__PURE__ */ c(w, { children: [
    /* @__PURE__ */ o(D, { asChild: !0, children: /* @__PURE__ */ c(
      P,
      {
        variant: "outline",
        className: y(
          "ep:w-fit ep:justify-start ep:text-left ep:font-normal",
          !r && "ep:text-muted-foreground"
        ),
        children: [
          /* @__PURE__ */ o(C, { className: "ep:mr-2 ep:h-4 ep:w-4" }),
          r ? g(r, a) : /* @__PURE__ */ o("span", { children: s })
        ]
      }
    ) }),
    /* @__PURE__ */ o(x, { className: "ep:w-auto ep:p-0", children: /* @__PURE__ */ o(
      j,
      {
        mode: "single",
        locale: m,
        selected: r,
        onSelect: l,
        autoFocus: !0,
        fixedWeeks: !0,
        hidden: h
      }
    ) })
  ] });
}, "DatePicker"), D = k;
export {
  R as DatePicker,
  D as DatePickerTrigger
};

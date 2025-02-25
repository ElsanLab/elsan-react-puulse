import { jsx as r, jsxs as f } from "/Users/clementgrihon/Elsan/Projects/elsan-react-puulse/node_modules/react/jsx-runtime.js";
import * as n from "/Users/clementgrihon/Elsan/Projects/elsan-react-puulse/node_modules/react/index.js";
import { format as u } from "/Users/clementgrihon/Elsan/Projects/elsan-react-puulse/node_modules/date-fns/index.js";
import { Calendar as l } from "/Users/clementgrihon/Elsan/Projects/elsan-react-puulse/node_modules/lucide-react/dist/esm/lucide-react.js";
import { cn as D } from "../../lib/utils.js";
import { Button as g } from "../ui/button.js";
import { Calendar as h } from "../ui/calendar.js";
import { PopoverTrigger as x, Popover as v, PopoverContent as w } from "../ui/popover.js";
const S = ({
  label: o = "Choisir",
  children: t = void 0,
  selected: i = void 0,
  onSelect: m = void 0,
  min: c = new Date(1900, 1, 1),
  max: d = new Date(2099, 12, 31)
}) => {
  const [e, s] = n.useState();
  n.useEffect(() => {
    i !== void 0 && e !== i && s(i);
  }, [i, e]);
  const p = (a) => {
    m && a && m(a), s(a);
  };
  return /* @__PURE__ */ f(v, { children: [
    t ? n.cloneElement(t, { date: e, label: o }) : /* @__PURE__ */ r(C, { label: o, date: e }),
    /* @__PURE__ */ r(w, { className: "w-auto p-0", children: /* @__PURE__ */ r(
      h,
      {
        mode: "single",
        selected: e,
        onSelect: p,
        initialFocus: !0,
        captionLayout: "dropdown",
        fixedWeeks: !0,
        fromDate: c,
        toDate: d
      }
    ) })
  ] });
}, y = x, C = ({
  label: o,
  date: t
}) => /* @__PURE__ */ r(y, { asChild: !0, children: /* @__PURE__ */ f(
  g,
  {
    variant: "outline",
    className: D(
      "w-[140px] justify-start text-left font-normal",
      !t && "text-muted-foreground"
    ),
    children: [
      /* @__PURE__ */ r(l, { className: "mr-2 h-4 w-4" }),
      t ? u(t, "dd/MM/yyyy") : /* @__PURE__ */ r("span", { children: o })
    ]
  }
) });
export {
  S as DatePicker,
  y as DatePickerTrigger,
  C as DefaultDatePickerTrigger
};

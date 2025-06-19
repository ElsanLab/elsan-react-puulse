var p = Object.defineProperty;
var i = (e, r) => p(e, "name", { value: r, configurable: !0 });
import { jsx as a } from "react/jsx-runtime";
import { cn as n } from "../../lib/utils.js";
import { Input as c } from "../ui/input.js";
const k = /* @__PURE__ */ i(({ disabled: e = !1, className: r, ...t }) => /* @__PURE__ */ a(
  c,
  {
    ...t,
    type: "time",
    disabled: e,
    className: n(
      "ep:w-fit ep:[&::-webkit-calendar-picker-indicator]:hidden ep:[&::-webkit-calendar-picker-indicator]:appearance-none",
      r
    )
  }
), "TimePicker");
export {
  k as TimePicker
};

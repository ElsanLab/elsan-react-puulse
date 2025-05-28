var o = Object.defineProperty;
var e = (r, t) => o(r, "name", { value: t, configurable: !0 });
import { jsx as i } from "react/jsx-runtime";
import { cn as p } from "../../lib/utils.js";
import { Input as f } from "../ui/input.js";
const l = /* @__PURE__ */ e(({ disabled: r = !1, className: t, ...m }) => /* @__PURE__ */ i(
  f,
  {
    ...m,
    type: "time",
    disabled: r,
    className: p("ep:w-fit", t)
  }
), "TimePicker");
export {
  l as TimePicker
};

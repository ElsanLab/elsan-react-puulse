var n = Object.defineProperty;
var o = (e, r) => n(e, "name", { value: r, configurable: !0 });
import { jsx as i } from "react/jsx-runtime";
import { cn as p } from "../lib/utils.js";
import { Input as a } from "./input.js";
import { FontAwesomeIcon as c } from "@fortawesome/react-fontawesome";
import { faClock as m } from "@fortawesome/free-solid-svg-icons";
const u = /* @__PURE__ */ o(({ disabled: e = !1, className: r, ...t }) => /* @__PURE__ */ i(
  a,
  {
    ...t,
    type: "time",
    disabled: e,
    className: p(
      "ep:w-fit ep:[&::-webkit-calendar-picker-indicator]:hidden ep:[&::-webkit-calendar-picker-indicator]:appearance-none",
      r
    ),
    left: /* @__PURE__ */ i(c, { icon: m })
  }
), "TimePicker");
export {
  u as TimePicker
};

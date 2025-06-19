var m = Object.defineProperty;
var e = (r, o) => m(r, "name", { value: o, configurable: !0 });
import { jsx as t } from "react/jsx-runtime";
import { cn as c } from "../../lib/utils.js";
import { HexColorPicker as i } from "react-colorful";
const n = /* @__PURE__ */ e(({ className: r, ...o }) => /* @__PURE__ */ t(i, { ...o, className: c("ep:w-full", r) }), "ColorPicker");
export {
  n as ColorPicker
};

var m = Object.defineProperty;
var e = (r, o) => m(r, "name", { value: o, configurable: !0 });
import { jsx as i } from "react/jsx-runtime";
import { cn as c } from "../../lib/utils.js";
import { HexColorPicker as l } from "react-colorful";
const s = /* @__PURE__ */ e(({ className: r, ...o }) => /* @__PURE__ */ i("div", { className: c("ep:w-full", r), children: /* @__PURE__ */ i(l, { ...o }) }), "ColorPicker");
export {
  s as ColorPicker
};

var c = Object.defineProperty;
var e = (o, r) => c(o, "name", { value: r, configurable: !0 });
import { jsx as l } from "react/jsx-runtime";
import { cn as t } from "../lib/utils.js";
import { HexColorPicker as i } from "react-colorful";
const x = /* @__PURE__ */ e(({ value: o, className: r, ...m }) => /* @__PURE__ */ l(
  i,
  {
    ...m,
    color: o,
    className: t("ep:w-full", r)
  }
), "ColorPicker");
export {
  x as ColorPicker
};

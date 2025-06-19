var o = Object.defineProperty;
var t = (e, r) => o(e, "name", { value: r, configurable: !0 });
import { jsx as p } from "react/jsx-runtime";
import { cn as n } from "../../lib/utils.js";
const a = /* @__PURE__ */ t(({
  className: e,
  ...r
}) => /* @__PURE__ */ p(
  "p",
  {
    className: n(
      "ep:text-xs ep:text-secondary-foreground ep:leading-4",
      e
    ),
    ...r
  }
), "HelperText");
export {
  a as HelperText
};

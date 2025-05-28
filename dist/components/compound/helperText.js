var o = Object.defineProperty;
var r = (e, t) => o(e, "name", { value: t, configurable: !0 });
import { jsx as m } from "react/jsx-runtime";
import { cn as p } from "../../lib/utils.js";
const c = /* @__PURE__ */ r(({
  className: e,
  ...t
}) => /* @__PURE__ */ m(
  "p",
  {
    className: p("ep:text-sm ep:text-muted-foreground", e),
    ...t
  }
), "HelperText");
export {
  c as HelperText
};

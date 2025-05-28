var i = Object.defineProperty;
var s = (e, t) => i(e, "name", { value: t, configurable: !0 });
import { jsxs as m, jsx as r } from "react/jsx-runtime";
import { cn as o } from "../../lib/utils.js";
import { OctagonAlert as p } from "lucide-react";
const d = /* @__PURE__ */ s(({
  className: e,
  children: t,
  ...a
}) => /* @__PURE__ */ m(
  "div",
  {
    className: o(
      "ep:flex ep:items-center ep:gap-x-2 ep:text-destructive",
      e
    ),
    ...a,
    children: [
      /* @__PURE__ */ r(p, { className: "ep:size-4" }),
      /* @__PURE__ */ r("div", { className: "ep:text-xs", children: t })
    ]
  }
), "FormValidationMessage");
export {
  d as FormValidationMessage
};

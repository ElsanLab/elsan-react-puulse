var o = Object.defineProperty;
var s = (e, t) => o(e, "name", { value: t, configurable: !0 });
import { jsxs as p, jsx as r } from "react/jsx-runtime";
import { cn as a } from "../../lib/utils.js";
import { OctagonAlert as m } from "lucide-react";
const d = /* @__PURE__ */ s(({
  className: e,
  children: t,
  ...i
}) => /* @__PURE__ */ p(
  "div",
  {
    className: a(
      "ep:flex ep:items-center ep:gap-x-2 ep:text-xs ep:text-destructive-light-foreground ep:leading-4",
      e
    ),
    ...i,
    children: [
      /* @__PURE__ */ r(m, { className: "ep:size-4" }),
      /* @__PURE__ */ r("div", { className: "ep:text-xs", children: t })
    ]
  }
), "FormValidationMessage");
export {
  d as FormValidationMessage
};

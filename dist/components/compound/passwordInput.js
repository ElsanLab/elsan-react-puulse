var a = Object.defineProperty;
var t = (e, o) => a(e, "name", { value: o, configurable: !0 });
import { jsxs as n, jsx as r } from "react/jsx-runtime";
import { useState as u } from "react";
import { Input as m } from "../ui/input.js";
import { Eye as l } from "lucide-react";
const h = /* @__PURE__ */ t(({
  disabled: e,
  ...o
}) => {
  const [p, s] = u(!1);
  return /* @__PURE__ */ n("div", { className: "ep:relative", children: [
    /* @__PURE__ */ r(
      m,
      {
        ...o,
        disabled: e,
        type: p && !e ? "text" : "password"
      }
    ),
    /* @__PURE__ */ r(
      "button",
      {
        type: "button",
        disabled: e,
        className: "ep:absolute ep:top-1/2 ep:-translate-y-1/2 ep:right-4 ep:text-muted-foreground",
        onMouseDown: /* @__PURE__ */ t(() => s(!0), "onMouseDown"),
        onMouseUp: /* @__PURE__ */ t(() => s(!1), "onMouseUp"),
        onMouseLeave: /* @__PURE__ */ t(() => s(!1), "onMouseLeave"),
        children: /* @__PURE__ */ r(l, { className: "ep:size-4" })
      }
    )
  ] });
}, "PasswordInput");
export {
  h as PasswordInput
};

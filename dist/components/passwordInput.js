var a = Object.defineProperty;
var s = (e, o) => a(e, "name", { value: o, configurable: !0 });
import { jsx as t, jsxs as n } from "react/jsx-runtime";
import { useState as u } from "react";
import { Input as m } from "./input.js";
import { Eye as l, EyeClosed as c, LockIcon as i } from "lucide-react";
const y = /* @__PURE__ */ s(({
  disabled: e,
  ...o
}) => {
  const [r, p] = u(!1);
  return /* @__PURE__ */ t("div", { className: "ep:relative", children: /* @__PURE__ */ t(
    m,
    {
      ...o,
      disabled: e,
      type: r && !e ? "text" : "password",
      left: /* @__PURE__ */ t(i, {}),
      right: /* @__PURE__ */ n(
        "button",
        {
          type: "button",
          disabled: e,
          className: "ep:absolute ep:top-1/2 ep:-translate-y-1/2 ep:right-4 ep:text-muted-foreground",
          onMouseDown: /* @__PURE__ */ s(() => p(!0), "onMouseDown"),
          onMouseUp: /* @__PURE__ */ s(() => p(!1), "onMouseUp"),
          onMouseLeave: /* @__PURE__ */ s(() => p(!1), "onMouseLeave"),
          children: [
            r && /* @__PURE__ */ t(l, { className: "ep:size-4" }),
            !r && /* @__PURE__ */ t(c, { className: "ep:size-4" })
          ]
        }
      )
    }
  ) });
}, "PasswordInput");
export {
  y as PasswordInput
};

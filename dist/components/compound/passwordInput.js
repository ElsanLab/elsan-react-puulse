var a = Object.defineProperty;
var o = (e, t) => a(e, "name", { value: t, configurable: !0 });
import { jsx as s, jsxs as n } from "react/jsx-runtime";
import { useState as m } from "react";
import { Input as u } from "../ui/input.js";
import { Eye as l, EyeClosed as c, LockIcon as i } from "lucide-react";
const y = /* @__PURE__ */ o(({
  disabled: e,
  ...t
}) => {
  const [r, p] = m(!1);
  return /* @__PURE__ */ s("div", { className: "ep:relative", children: /* @__PURE__ */ s(
    u,
    {
      ...t,
      disabled: e,
      type: r && !e ? "text" : "password",
      left: /* @__PURE__ */ s(i, {}),
      right: /* @__PURE__ */ n(
        "button",
        {
          type: "button",
          disabled: e,
          className: "ep:absolute ep:top-1/2 ep:-translate-y-1/2 ep:right-4 ep:text-muted-foreground",
          onMouseDown: /* @__PURE__ */ o(() => p(!0), "onMouseDown"),
          onMouseUp: /* @__PURE__ */ o(() => p(!1), "onMouseUp"),
          onMouseLeave: /* @__PURE__ */ o(() => p(!1), "onMouseLeave"),
          children: [
            r && /* @__PURE__ */ s(l, { className: "ep:size-4" }),
            !r && /* @__PURE__ */ s(c, { className: "ep:size-4" })
          ]
        }
      )
    }
  ) });
}, "PasswordInput");
export {
  y as PasswordInput
};

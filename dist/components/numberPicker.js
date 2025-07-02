var x = Object.defineProperty;
var n = (t, u) => x(t, "name", { value: u, configurable: !0 });
import { jsxs as M, jsx as o } from "react/jsx-runtime";
import { Input as g } from "./input.js";
import { Button as l } from "./button.js";
import { Minus as h, Plus as D } from "lucide-react";
import { useRef as N, useState as w } from "react";
import { cn as U } from "../lib/utils.js";
const B = /* @__PURE__ */ n(({
  disabled: t,
  className: u = void 0,
  min: m = void 0,
  max: f = void 0,
  step: s = 1,
  ...v
}) => {
  const e = N(null), [i, a] = w(null), d = /* @__PURE__ */ n(() => {
    if (!e.current)
      return;
    e.current.stepDown(s);
    const c = setInterval(() => {
      var r;
      (r = e.current) == null || r.stepDown(s);
    }, 100);
    a(c);
  }, "startDecreasing"), I = /* @__PURE__ */ n(() => {
    if (!e.current)
      return;
    e.current.stepUp(s);
    const c = setInterval(() => {
      var r;
      (r = e.current) == null || r.stepUp(s);
    }, 100);
    a(c);
  }, "startIncreasing"), p = /* @__PURE__ */ n(() => {
    i && (clearInterval(i), a(null));
  }, "stop");
  return /* @__PURE__ */ M("div", { className: U("ep:relative", u), children: [
    /* @__PURE__ */ o(
      g,
      {
        ...v,
        ref: e,
        className: "ep:text-center ep:placeholder:text-center",
        type: "number",
        min: m,
        max: f,
        disabled: t
      }
    ),
    /* @__PURE__ */ o(
      l,
      {
        variant: "link",
        className: "ep:absolute ep:top-1/2 ep:-translate-y-1/2 ep:left-0 ep:text-input-foreground",
        disabled: t,
        onMouseDown: d,
        onMouseUp: p,
        onMouseLeave: p,
        children: /* @__PURE__ */ o(h, {})
      }
    ),
    /* @__PURE__ */ o(
      l,
      {
        variant: "link",
        className: "ep:absolute ep:top-1/2 ep:-translate-y-1/2 ep:right-0 ep:text-foreground",
        disabled: t,
        onMouseDown: I,
        onMouseUp: p,
        onMouseLeave: p,
        children: /* @__PURE__ */ o(D, {})
      }
    )
  ] });
}, "NumberPicker");
export {
  B as NumberPicker
};

var M = Object.defineProperty;
var n = (t, a) => M(t, "name", { value: a, configurable: !0 });
import { jsxs as x, jsx as o } from "react/jsx-runtime";
import { Input as g } from "../ui/input.js";
import { Button as l } from "../ui/button.js";
import { Minus as D, Plus as N } from "lucide-react";
import { useRef as h, useState as w } from "react";
import { cn as U } from "../../lib/utils.js";
const B = /* @__PURE__ */ n(({
  disabled: t,
  className: a = void 0,
  min: m = void 0,
  max: f = void 0,
  step: s = 1,
  ...v
}) => {
  const e = h(null), [c, p] = w(null), d = /* @__PURE__ */ n(() => {
    if (!e.current)
      return;
    e.current.stepDown(s);
    const i = setInterval(() => {
      var r;
      (r = e.current) == null || r.stepDown(s);
    }, 100);
    p(i);
  }, "startDecreasing"), I = /* @__PURE__ */ n(() => {
    if (!e.current)
      return;
    e.current.stepUp(s);
    const i = setInterval(() => {
      var r;
      (r = e.current) == null || r.stepUp(s);
    }, 100);
    p(i);
  }, "startIncreasing"), u = /* @__PURE__ */ n(() => {
    c && (clearInterval(c), p(null));
  }, "stop");
  return /* @__PURE__ */ x("div", { className: "ep:relative", children: [
    /* @__PURE__ */ o(
      g,
      {
        ...v,
        ref: e,
        className: U("ep:text-center", a),
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
        className: "ep:absolute ep:top-1/2 ep:-translate-y-1/2 ep:left-0 ep:text-muted-foreground",
        disabled: t,
        onMouseDown: d,
        onMouseUp: u,
        onMouseLeave: u,
        children: /* @__PURE__ */ o(D, {})
      }
    ),
    /* @__PURE__ */ o(
      l,
      {
        variant: "link",
        className: "ep:absolute ep:top-1/2 ep:-translate-y-1/2 ep:right-0 ep:text-muted-foreground",
        disabled: t,
        onMouseDown: I,
        onMouseUp: u,
        onMouseLeave: u,
        children: /* @__PURE__ */ o(N, {})
      }
    )
  ] });
}, "NumberPicker");
export {
  B as NumberPicker
};

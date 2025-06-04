var u = Object.defineProperty;
var a = (e, t) => u(e, "name", { value: t, configurable: !0 });
import { jsx as r, jsxs as c } from "react/jsx-runtime";
import * as l from "react";
import { OTPInput as m, OTPInputContext as v } from "input-otp";
import { MinusIcon as f } from "lucide-react";
import { cn as i } from "../../lib/utils.js";
function N({
  className: e,
  containerClassName: t,
  ...p
}) {
  return /* @__PURE__ */ r(
    m,
    {
      "data-slot": "input-otp",
      containerClassName: i(
        "ep:flex ep:items-center ep:gap-2 ep:has-disabled:opacity-50",
        t
      ),
      className: i("ep:disabled:cursor-not-allowed", e),
      ...p
    }
  );
}
a(N, "InputOTP");
function O({ className: e, ...t }) {
  return /* @__PURE__ */ r(
    "div",
    {
      "data-slot": "input-otp-group",
      className: i("ep:flex ep:items-center", e),
      ...t
    }
  );
}
a(O, "InputOTPGroup");
function P({
  index: e,
  className: t,
  ...p
}) {
  const n = l.useContext(v), { char: o, hasFakeCaret: s, isActive: d } = (n == null ? void 0 : n.slots[e]) ?? {};
  return /* @__PURE__ */ c(
    "div",
    {
      "data-slot": "input-otp-slot",
      "data-active": d,
      className: i(
        "ep:data-[active=true]:border-ring ep:data-[active=true]:ring-ring/50 ep:data-[active=true]:aria-invalid:ring-destructive/20 ep:dark:data-[active=true]:aria-invalid:ring-destructive/40 ep:aria-invalid:border-destructive ep:data-[active=true]:aria-invalid:border-destructive ep:dark:bg-input/30 ep:border-input ep:relative ep:flex ep:h-9 ep:w-9 ep:items-center ep:justify-center ep:border-y ep:border-r ep:text-sm ep:shadow-xs ep:transition-all ep:outline-none ep:first:rounded-l-md ep:first:border-l ep:last:rounded-r-md ep:data-[active=true]:z-10 ep:data-[active=true]:ring-[3px]",
        t
      ),
      ...p,
      children: [
        o,
        s && /* @__PURE__ */ r("div", { className: "ep:pointer-events-none ep:absolute ep:inset-0 ep:flex ep:items-center ep:justify-center", children: /* @__PURE__ */ r("div", { className: "ep:animate-caret-blink ep:bg-foreground ep:h-4 ep:w-px ep:duration-1000" }) })
      ]
    }
  );
}
a(P, "InputOTPSlot");
function T({ ...e }) {
  return /* @__PURE__ */ r("div", { "data-slot": "input-otp-separator", role: "separator", ...e, children: /* @__PURE__ */ r(f, {}) });
}
a(T, "InputOTPSeparator");
export {
  N as InputOTP,
  O as InputOTPGroup,
  T as InputOTPSeparator,
  P as InputOTPSlot
};

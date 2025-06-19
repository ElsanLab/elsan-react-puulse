var s = Object.defineProperty;
var i = (e, r) => s(e, "name", { value: r, configurable: !0 });
import { jsxs as a, jsx as t } from "react/jsx-runtime";
import { unstable_OneTimePasswordField as p } from "radix-ui";
import { cn as n } from "../../lib/utils.js";
import { Minus as u } from "lucide-react";
function v({
  children: e,
  className: r,
  name: o,
  ...d
}) {
  return /* @__PURE__ */ a(
    p.Root,
    {
      ...d,
      className: n(
        "ep:flex ep:w-fit ep:items-center ep:gap-2 ep:has-disabled:opacity-50",
        r
      ),
      children: [
        /* @__PURE__ */ t(p.HiddenInput, { name: o }),
        e
      ]
    }
  );
}
i(v, "OTPField");
function x({ className: e, ...r }) {
  return /* @__PURE__ */ t("div", { className: n("ep:flex ep:items-center", e), ...r });
}
i(x, "OTPGroup");
function g({
  className: e,
  ...r
}) {
  return /* @__PURE__ */ t(
    p.Input,
    {
      ...r,
      className: n(
        "ep:focus:border-ring ep:focus:ring-ring/50 ep:focus:aria-invalid:ring-destructive/20 ep:dark:focus:aria-invalid:ring-destructive/40 ep:aria-invalid:border-destructive ep:focus:aria-invalid:border-destructive ep:dark:bg-input/30 ep:border-border ep:relative ep:size-9 ep:border-y ep:border-r ep:text-sm ep:shadow-xs ep:transition-all ep:outline-none ep:first:rounded-l-md ep:first:border-l ep:last:rounded-r-md ep:focus:z-10 ep:focus:ring-[3px] ep:text-center ep:text-input-foreground",
        e
      )
    }
  );
}
i(g, "OTPInput");
function O({ ...e }) {
  return /* @__PURE__ */ t("div", { role: "separator", ...e, children: /* @__PURE__ */ t(u, {}) });
}
i(O, "OTPSeparator");
export {
  v as OTPField,
  x as OTPGroup,
  g as OTPInput,
  O as OTPSeparator
};

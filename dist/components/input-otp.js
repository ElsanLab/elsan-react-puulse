var s = Object.defineProperty;
var i = (e, r) => s(e, "name", { value: r, configurable: !0 });
import { jsxs as d, jsx as t } from "react/jsx-runtime";
import { unstable_OneTimePasswordField as n } from "radix-ui";
import { cn as p } from "../lib/utils.js";
import { Separator as u } from "./separator.js";
function x({
  children: e,
  className: r,
  name: o,
  ...a
}) {
  return /* @__PURE__ */ d(
    n.Root,
    {
      ...a,
      className: p(
        "ep:flex ep:w-fit ep:items-center ep:gap-2 ep:has-disabled:opacity-50",
        r
      ),
      children: [
        /* @__PURE__ */ t(n.HiddenInput, { name: o }),
        e
      ]
    }
  );
}
i(x, "OTPField");
function v({ className: e, ...r }) {
  return /* @__PURE__ */ t("div", { className: p("ep:flex ep:items-center", e), ...r });
}
i(v, "OTPGroup");
function g({
  className: e,
  ...r
}) {
  return /* @__PURE__ */ t(
    n.Input,
    {
      ...r,
      className: p(
        "ep:focus:border-ring ep:focus:ring-ring/50 ep:focus:aria-invalid:ring-destructive/20 ep:dark:focus:aria-invalid:ring-destructive/40 ep:aria-invalid:border-destructive ep:focus:aria-invalid:border-destructive ep:dark:bg-input/30 ep:border-border ep:relative ep:size-9 ep:border-y ep:border-r ep:text-sm ep:shadow-xs ep:transition-all ep:outline-none ep:first:rounded-l-md ep:first:border-l ep:last:rounded-r-md ep:focus:z-10 ep:focus:ring-[3px] ep:text-center ep:text-input-foreground",
        e
      )
    }
  );
}
i(g, "OTPInput");
function O({
  className: e,
  ...r
}) {
  return /* @__PURE__ */ t(u, { className: p("ep:max-w-4", e), ...r });
}
i(O, "OTPSeparator");
export {
  x as OTPField,
  v as OTPGroup,
  g as OTPInput,
  O as OTPSeparator
};

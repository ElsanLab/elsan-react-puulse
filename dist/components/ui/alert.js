var a = Object.defineProperty;
var r = (e, t) => a(e, "name", { value: t, configurable: !0 });
import { jsx as i } from "react/jsx-runtime";
import { cva as o } from "class-variance-authority";
import { cn as p } from "../../lib/utils.js";
const n = o(
  "ep:relative ep:w-full ep:rounded-sm ep:border ep:px-4 ep:py-3 ep:text-sm ep:grid ep:has-[>svg]:grid-cols-[calc(var(--ep-spacing)*4)_1fr] ep:grid-cols-[0_1fr] ep:has-[>svg]:gap-x-3 ep:gap-y-0.5 ep:items-start ep:[&>svg]:size-4 ep:[&>svg]:translate-y-0.5 ep:[&>svg]:text-current",
  {
    variants: {
      variant: {
        info: "ep:bg-info-light ep:border-info-light-border ep:text-info-light-foreground",
        success: "ep:bg-success-light ep:border-success-light-border ep:text-success-light-foreground",
        warning: "ep:bg-warning-light ep:border-warning-light-border ep:text-warning-light-foreground",
        destructive: "ep:bg-destructive-light ep:border-destructive-light-border ep:text-destructive-light-foreground"
      }
    },
    defaultVariants: {
      variant: "info"
    }
  }
);
function u({
  className: e,
  variant: t,
  ...s
}) {
  return /* @__PURE__ */ i(
    "div",
    {
      "data-slot": "alert",
      role: "alert",
      className: p(n({ variant: t }), e),
      ...s
    }
  );
}
r(u, "Alert");
function f({ className: e, ...t }) {
  return /* @__PURE__ */ i(
    "div",
    {
      "data-slot": "alert-title",
      className: p(
        "ep:col-start-2 ep:line-clamp-1 ep:min-h-4 ep:font-medium ep:tracking-tight",
        e
      ),
      ...t
    }
  );
}
r(f, "AlertTitle");
function m({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ i(
    "div",
    {
      "data-slot": "alert-description",
      className: p(
        "ep:col-start-2 ep:grid ep:justify-items-start ep:gap-1 ep:text-sm ep:[&_p]:leading-relaxed",
        e
      ),
      ...t
    }
  );
}
r(m, "AlertDescription");
export {
  u as Alert,
  m as AlertDescription,
  f as AlertTitle
};

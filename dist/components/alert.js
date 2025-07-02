var c = Object.defineProperty;
var i = (e, r) => c(e, "name", { value: r, configurable: !0 });
import { jsxs as l, jsx as t } from "react/jsx-runtime";
import { cva as d } from "class-variance-authority";
import { FontAwesomeIcon as n } from "@fortawesome/react-fontawesome";
import { faExclamationTriangle as a, faCheckCircle as g, faInfoCircle as u } from "@fortawesome/free-solid-svg-icons";
import { cn as s } from "../lib/utils.js";
const f = d(
  "ep:relative ep:w-full ep:rounded-lg ep:border ep:px-4 ep:py-3 ep:text-sm ep:grid ep:has-[>svg]:grid-cols-[calc(var(--spacing)*4)_1fr] ep:grid-cols-[0_1fr] ep:has-[>svg]:gap-x-3 ep:gap-y-0.5 ep:items-start ep:[&>svg]:size-4 ep:[&>svg]:translate-y-0.5 ep:[&>svg]:text-current",
  {
    variants: {
      variant: {
        info: "ep:bg-info ep:border-info-border ep:text-info-foreground",
        success: "ep:bg-success ep:border-success-border ep:text-success-foreground",
        warning: "ep:bg-warning ep:border-warning-border ep:text-warning-foreground",
        destructive: "ep:bg-destructive-light ep:border-destructive-light-border ep:text-destructive-light-foreground"
      }
    },
    defaultVariants: {
      variant: "info"
    }
  }
);
function A({
  className: e,
  variant: r,
  children: o,
  ...p
}) {
  return /* @__PURE__ */ l(
    "div",
    {
      "data-slot": "alert",
      role: "alert",
      className: s(f({ variant: r }), e),
      ...p,
      children: [
        /* @__PURE__ */ t(m, { variant: r }),
        o
      ]
    }
  );
}
i(A, "Alert");
function m({
  variant: e
}) {
  switch (e) {
    case "info":
      return /* @__PURE__ */ t(n, { icon: u });
    case "success":
      return /* @__PURE__ */ t(n, { icon: g });
    case "warning":
      return /* @__PURE__ */ t(n, { icon: a });
    case "destructive":
      return /* @__PURE__ */ t(n, { icon: a });
    default:
      return null;
  }
}
i(m, "VariantIcon");
function j({ className: e, ...r }) {
  return /* @__PURE__ */ t(
    "div",
    {
      "data-slot": "alert-title",
      className: s(
        "ep:col-start-2 ep:line-clamp-1 ep:min-h-4 ep:font-medium ep:tracking-tight",
        e
      ),
      ...r
    }
  );
}
i(j, "AlertTitle");
function C({
  className: e,
  ...r
}) {
  return /* @__PURE__ */ t(
    "div",
    {
      "data-slot": "alert-description",
      className: s(
        "ep:col-start-2 ep:grid ep:justify-items-start ep:gap-1 ep:text-sm ep:[&_p]:leading-relaxed",
        e
      ),
      ...r
    }
  );
}
i(C, "AlertDescription");
export {
  A as Alert,
  C as AlertDescription,
  j as AlertTitle
};

var p = Object.defineProperty;
var i = (e, r) => p(e, "name", { value: r, configurable: !0 });
import { jsx as s } from "react/jsx-runtime";
import { Slot as a } from "radix-ui";
import { cva as d } from "class-variance-authority";
import { cn as c } from "../lib/utils.js";
const g = d(
  "ep:inline-flex ep:items-center ep:justify-center ep:rounded-sm ep:border ep:px-2 ep:py-0.5 ep:text-xs ep:font-medium ep:w-fit ep:whitespace-nowrap ep:shrink-0 ep:[&>svg]:size-3 ep:gap-1 ep:[&>svg]:pointer-events-none ep:focus-visible:border-ring ep:focus-visible:ring-ring/50 ep:focus-visible:ring-[3px] ep:aria-invalid:ring-destructive/20 ep:dark:aria-invalid:ring-destructive/40 ep:aria-invalid:border-destructive ep:transition-[color,box-shadow] ep:overflow-hidden",
  {
    variants: {
      variant: {
        neutral: "ep:bg-secondary ep:border-secondary-border ep:text-secondary-foreground",
        info: "ep:bg-info ep:border-info-border ep:text-info-foreground",
        success: "ep:bg-success ep:border-success-border ep:text-success-foreground",
        warning: "ep:bg-warning ep:border-warning-border ep:text-warning-foreground",
        destructive: "ep:bg-destructive-light ep:border-destructive-light-border ep:text-destructive-light-foreground"
      }
    },
    defaultVariants: {
      variant: "neutral"
    }
  }
);
function m({
  className: e,
  variant: r,
  asChild: o = !1,
  ...t
}) {
  const n = o ? a.Slot : "span";
  return /* @__PURE__ */ s(
    n,
    {
      "data-slot": "badge",
      className: c(g({ variant: r }), e),
      ...t
    }
  );
}
i(m, "Badge");
export {
  m as Badge,
  g as badgeVariants
};

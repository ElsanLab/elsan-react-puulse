var p = Object.defineProperty;
var i = (e, r) => p(e, "name", { value: r, configurable: !0 });
import { jsx as s } from "react/jsx-runtime";
import { Slot as a } from "radix-ui";
import { cva as d } from "class-variance-authority";
import { cn as g } from "../../lib/utils.js";
const l = d(
  "ep:inline-flex ep:items-center ep:justify-center ep:rounded-md ep:border ep:px-2 ep:py-0.5 ep:text-xs ep:font-medium ep:w-fit ep:whitespace-nowrap ep:shrink-0 ep:[&>svg]:size-3 ep:gap-1 ep:[&>svg]:pointer-events-none ep:focus-visible:border-ring ep:focus-visible:ring-ring/50 ep:focus-visible:ring-[3px] ep:aria-invalid:ring-destructive/20 ep:dark:aria-invalid:ring-destructive/40 ep:aria-invalid:border-destructive ep:transition-[color,box-shadow] ep:overflow-hidden",
  {
    variants: {
      variant: {
        neutral: "ep:bg-secondary-light ep:border-secondary-light-border ep:text-secondary-light-foreground",
        info: "ep:bg-info-light ep:border-info-light-border ep:text-info-light-foreground",
        success: "ep:bg-success-light ep:border-success-light-border ep:text-success-light-foreground",
        warning: "ep:bg-warning-light ep:border-warning-light-border ep:text-warning-light-foreground",
        destructive: "ep:bg-destructive-light ep:border-destructive-light-border ep:text-destructive-light-foreground"
      }
    },
    defaultVariants: {
      variant: "neutral"
    }
  }
);
function h({
  className: e,
  variant: r,
  asChild: t = !1,
  ...o
}) {
  const n = t ? a.Slot : "span";
  return /* @__PURE__ */ s(
    n,
    {
      "data-slot": "badge",
      className: g(l({ variant: r }), e),
      ...o
    }
  );
}
i(h, "Badge");
export {
  h as Badge,
  l as badgeVariants
};

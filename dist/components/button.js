var s = Object.defineProperty;
var t = (e, r) => s(e, "name", { value: r, configurable: !0 });
import { jsx as v } from "react/jsx-runtime";
import { Slot as c } from "radix-ui";
import { cva as d } from "class-variance-authority";
import { cn as h } from "../lib/utils.js";
const m = d(
  "ep:inline-flex ep:items-center ep:justify-center ep:rounded-sm ep:whitespace-nowrap ep:cursor-pointer ep:text-sm ep:font-medium ep:transition-all ep:disabled:pointer-events-none ep:disabled:opacity-50 ep:[&_svg]:pointer-events-none ep:[&_svg:not([class*=size-])]:size-4 ep:shrink-0 ep:[&_svg]:shrink-0 ep:outline-none ep:focus-visible:border-ring ep:focus-visible:ring-ring/50 ep:focus-visible:ring-[3px] ep:aria-invalid:ring-destructive/20 ep:dark:aria-invalid:ring-destructive/40 ep:aria-invalid:border-destructive ep:disabled:opacity-50 ep:disabled:pointer-events-none",
  {
    variants: {
      variant: {
        primary: "ep:bg-primary ep:text-primary-foreground ep:hover:bg-gradient-to-b ep:hover:from-[var(--accent-hover)] ep:hover:from-0% ep:hover:to-[var(--accent-hover)] ep:hover:to-100%",
        secondary: "ep:bg-secondary ep:text-primary-light-foreground ep:hover:bg-gradient-to-b ep:hover:from-[var(--accent-hover)] ep:hover:from-0% ep:hover:to-[var(--accent-hover)] ep:hover:to-100%",
        tertiary: "ep:bg-secondary ep:text-foreground ep:hover:text-primary-light-foreground ep:hover:bg-gradient-to-b ep:hover:from-[var(--accent-hover)] ep:hover:from-0% ep:hover:to-[var(--accent-hover)] ep:hover:to-100%",
        ghost: "ep:bg-transparent ep:text-foreground ep:hover:bg-gradient-to-b ep:hover:from-[var(--accent-hover)] ep:hover:from-0% ep:hover:to-[var(--accent-hover)] ep:hover:to-100%",
        destructive: "ep:bg-destructive ep:text-destructive-foreground ep:hover:bg-gradient-to-b ep:hover:from-[var(--accent-hover)] ep:hover:from-0% ep:hover:to-[var(--accent-hover)] ep:hover:to-100%",
        destructiveLight: "ep:bg-destructive-light ep:text-destructive-light-foreground ep:hover:bg-gradient-to-b ep:hover:from-[var(--accent-hover)] ep:hover:from-0% ep:hover:to-[var(--accent-hover)] ep:hover:to-100%",
        link: "ep:bg-transparent ep:text-primary-light-foreground ep:hover:underline ep:underline-offset-4"
      },
      size: {
        small: "",
        medium: "",
        large: ""
      },
      contentType: {
        default: "",
        icon: ""
      }
    },
    compoundVariants: [
      {
        size: "small",
        contentType: "default",
        className: "ep:px-2 ep:h-8 ep:gap-1"
      },
      {
        size: "small",
        contentType: "icon",
        className: "ep:size-8"
      },
      {
        size: "medium",
        contentType: "default",
        className: "ep:h-9 ep:px-3 ep:gap-2"
      },
      {
        size: "medium",
        contentType: "icon",
        className: "ep:size-9"
      },
      {
        size: "large",
        contentType: "default",
        className: "ep:h-10 ep:px-3 ep:gap-2"
      },
      {
        size: "large",
        contentType: "icon",
        className: "ep:size-10"
      }
    ],
    defaultVariants: {
      variant: "primary",
      size: "medium",
      contentType: "default"
    }
  }
);
function y({
  className: e,
  variant: r,
  size: o,
  contentType: p,
  asChild: n = !1,
  ...a
}) {
  const i = n ? c.Slot : "button";
  return /* @__PURE__ */ v(
    i,
    {
      "data-slot": "button",
      className: h(m({ variant: r, size: o, contentType: p, className: e })),
      ...a
    }
  );
}
t(y, "Button");
export {
  y as Button,
  m as buttonVariants
};

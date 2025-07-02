var p = Object.defineProperty;
var t = (e, a) => p(e, "name", { value: a, configurable: !0 });
import { jsx as s } from "react/jsx-runtime";
import { Avatar as n } from "radix-ui";
import { cn as i } from "../lib/utils.js";
import { cva as o } from "class-variance-authority";
const c = o(
  "ep:relative ep:flex ep:shrink-0 ep:overflow-hidden ep:rounded-sm",
  {
    variants: {
      size: {
        md: "ep:size-10",
        sm: "ep:size-8"
      }
    },
    defaultVariants: {
      size: "md"
    }
  }
);
function g({
  className: e,
  size: a,
  ...r
}) {
  return /* @__PURE__ */ s(
    n.Root,
    {
      "data-slot": "avatar",
      className: i(c({ size: a }), e),
      ...r
    }
  );
}
t(g, "Avatar");
function b({
  className: e,
  ...a
}) {
  return /* @__PURE__ */ s(
    n.Image,
    {
      "data-slot": "avatar-image",
      className: i("ep:aspect-square ep:size-full", e),
      ...a
    }
  );
}
t(b, "AvatarImage");
const l = o(
  "ep:flex ep:size-full ep:items-center ep:justify-center ep:rounded-sm",
  {
    variants: {
      variant: {
        info: "ep:bg-info ep:text-info-foreground",
        success: "ep:bg-success ep:text-success-foreground",
        warning: "ep:bg-warning ep:text-warning-foreground",
        destructive: "ep:bg-destructive-light ep:text-destructive-light-foreground"
      }
    },
    defaultVariants: {
      variant: "info"
    }
  }
);
function x({
  className: e,
  variant: a,
  ...r
}) {
  return /* @__PURE__ */ s(
    n.Fallback,
    {
      "data-slot": "avatar-fallback",
      className: i(l({ variant: a }), e),
      ...r
    }
  );
}
t(x, "AvatarFallback");
export {
  g as Avatar,
  x as AvatarFallback,
  b as AvatarImage
};

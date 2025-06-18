var l = Object.defineProperty;
var t = (e, a) => l(e, "name", { value: a, configurable: !0 });
import { jsx as i } from "react/jsx-runtime";
import { Avatar as s } from "radix-ui";
import { cn as n } from "../../lib/utils.js";
import { cva as o } from "class-variance-authority";
const p = o(
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
function v({
  className: e,
  size: a,
  ...r
}) {
  return /* @__PURE__ */ i(
    s.Root,
    {
      "data-slot": "avatar",
      className: n(p({ size: a }), e),
      ...r
    }
  );
}
t(v, "Avatar");
function h({
  className: e,
  ...a
}) {
  return /* @__PURE__ */ i(
    s.Image,
    {
      "data-slot": "avatar-image",
      className: n("ep:aspect-square ep:size-full", e),
      ...a
    }
  );
}
t(h, "AvatarImage");
const c = o(
  "ep:flex ep:size-full ep:items-center ep:justify-center ep:rounded-sm",
  {
    variants: {
      variant: {
        info: "ep:bg-info-light ep:text-info-light-foreground",
        success: "ep:bg-success-light ep:text-success-light-foreground",
        warning: "ep:bg-warning-light ep:text-warning-light-foreground",
        destructive: "ep:bg-destructive-light ep:text-destructive-light-foreground"
      }
    },
    defaultVariants: {
      variant: "info"
    }
  }
);
function b({
  className: e,
  variant: a,
  ...r
}) {
  return /* @__PURE__ */ i(
    s.Fallback,
    {
      "data-slot": "avatar-fallback",
      className: n(c({ variant: a }), e),
      ...r
    }
  );
}
t(b, "AvatarFallback");
export {
  v as Avatar,
  b as AvatarFallback,
  h as AvatarImage
};

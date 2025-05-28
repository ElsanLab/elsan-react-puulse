var l = Object.defineProperty;
var t = (e, a) => l(e, "name", { value: a, configurable: !0 });
import { jsx as i } from "react/jsx-runtime";
import * as s from "@radix-ui/react-avatar";
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
function d({
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
t(d, "Avatar");
function v({
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
t(v, "AvatarImage");
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
function h({
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
t(h, "AvatarFallback");
export {
  d as Avatar,
  h as AvatarFallback,
  v as AvatarImage
};

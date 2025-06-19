var d = Object.defineProperty;
var e = (o, p) => d(o, "name", { value: p, configurable: !0 });
import { jsx as t } from "react/jsx-runtime";
import { Popover as r } from "radix-ui";
import { cn as i } from "../../lib/utils.js";
function c({
  ...o
}) {
  return /* @__PURE__ */ t(r.Root, { "data-slot": "popover", ...o });
}
e(c, "Popover");
function u({
  ...o
}) {
  return /* @__PURE__ */ t(r.Trigger, { "data-slot": "popover-trigger", ...o });
}
e(u, "PopoverTrigger");
function v({
  className: o,
  align: p = "center",
  sideOffset: a = 4,
  ...n
}) {
  return /* @__PURE__ */ t(r.Portal, { children: /* @__PURE__ */ t(
    r.Content,
    {
      "data-slot": "popover-content",
      align: p,
      sideOffset: a,
      className: i(
        "ep:bg-popover ep:text-popover-foreground ep:data-[state=open]:animate-in ep:data-[state=closed]:animate-out ep:data-[state=closed]:fade-out-0 ep:data-[state=open]:fade-in-0 ep:data-[state=closed]:zoom-out-95 ep:data-[state=open]:zoom-in-95 ep:data-[side=bottom]:slide-in-from-top-2 ep:data-[side=left]:slide-in-from-right-2 ep:data-[side=right]:slide-in-from-left-2 ep:data-[side=top]:slide-in-from-bottom-2 ep:z-50 ep:w-72 ep:origin-(--radix-popover-content-transform-origin) ep:rounded-md ep:border ep:p-4 ep:shadow-md ep:outline-hidden",
        o
      ),
      ...n
    }
  ) });
}
e(v, "PopoverContent");
function g({
  ...o
}) {
  return /* @__PURE__ */ t(r.Anchor, { "data-slot": "popover-anchor", ...o });
}
e(g, "PopoverAnchor");
export {
  c as Popover,
  g as PopoverAnchor,
  v as PopoverContent,
  u as PopoverTrigger
};

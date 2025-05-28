var i = Object.defineProperty;
var o = (e, p) => i(e, "name", { value: p, configurable: !0 });
import { jsx as t } from "react/jsx-runtime";
import * as r from "@radix-ui/react-popover";
import { cn as d } from "../../lib/utils.js";
function l({
  ...e
}) {
  return /* @__PURE__ */ t(r.Root, { "data-slot": "popover", ...e });
}
o(l, "Popover");
function c({
  ...e
}) {
  return /* @__PURE__ */ t(r.Trigger, { "data-slot": "popover-trigger", ...e });
}
o(c, "PopoverTrigger");
function u({
  className: e,
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
      className: d(
        "ep:bg-popover ep:text-popover-foreground ep:data-[state=open]:animate-in ep:data-[state=closed]:animate-out ep:data-[state=closed]:fade-out-0 ep:data-[state=open]:fade-in-0 ep:data-[state=closed]:zoom-out-95 ep:data-[state=open]:zoom-in-95 ep:data-[side=bottom]:slide-in-from-top-2 ep:data-[side=left]:slide-in-from-right-2 ep:data-[side=right]:slide-in-from-left-2 ep:data-[side=top]:slide-in-from-bottom-2 ep:z-50 ep:w-72 ep:origin-(--radix-popover-content-transform-origin) ep:rounded-md ep:border ep:p-4 ep:shadow-md ep:outline-hidden",
        e
      ),
      ...n
    }
  ) });
}
o(u, "PopoverContent");
function v({
  ...e
}) {
  return /* @__PURE__ */ t(r.Anchor, { "data-slot": "popover-anchor", ...e });
}
o(v, "PopoverAnchor");
export {
  l as Popover,
  v as PopoverAnchor,
  u as PopoverContent,
  c as PopoverTrigger
};

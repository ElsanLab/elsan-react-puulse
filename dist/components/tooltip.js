var n = Object.defineProperty;
var r = (t, i) => n(t, "name", { value: i, configurable: !0 });
import { jsx as o, jsxs as l } from "react/jsx-runtime";
import { Tooltip as e } from "radix-ui";
import { cn as d } from "../lib/utils.js";
function s({
  delayDuration: t = 0,
  ...i
}) {
  return /* @__PURE__ */ o(
    e.Provider,
    {
      "data-slot": "tooltip-provider",
      delayDuration: t,
      ...i
    }
  );
}
r(s, "TooltipProvider");
function g({
  ...t
}) {
  return /* @__PURE__ */ o(s, { children: /* @__PURE__ */ o(e.Root, { "data-slot": "tooltip", ...t }) });
}
r(g, "Tooltip");
function x({
  ...t
}) {
  return /* @__PURE__ */ o(e.Trigger, { "data-slot": "tooltip-trigger", ...t });
}
r(x, "TooltipTrigger");
function T({
  className: t,
  sideOffset: i = 0,
  children: a,
  ...p
}) {
  return /* @__PURE__ */ o(e.Portal, { children: /* @__PURE__ */ l(
    e.Content,
    {
      "data-slot": "tooltip-content",
      sideOffset: i,
      className: d(
        "ep:bg-neutral ep:text-neutral-foreground ep:animate-in ep:fade-in-0 ep:zoom-in-95 ep:data-[state=closed]:animate-out ep:data-[state=closed]:fade-out-0 ep:data-[state=closed]:zoom-out-95 ep:data-[side=bottom]:slide-in-from-top-2 ep:data-[side=left]:slide-in-from-right-2 ep:data-[side=right]:slide-in-from-left-2 ep:data-[side=top]:slide-in-from-bottom-2 ep:z-50 ep:w-fit ep:origin-(--radix-tooltip-content-transform-origin) ep:rounded-sm ep:px-3 ep:py-1.5 ep:text-xs ep:text-balance",
        t
      ),
      ...p,
      children: [
        a,
        /* @__PURE__ */ o(e.Arrow, { className: "ep:bg-neutral ep:fill-neutral ep:z-50 ep:size-2.5 ep:translate-y-[calc(-50%_-_2px)] ep:rotate-45 ep:rounded-[2px]" })
      ]
    }
  ) });
}
r(T, "TooltipContent");
export {
  g as Tooltip,
  T as TooltipContent,
  s as TooltipProvider,
  x as TooltipTrigger
};

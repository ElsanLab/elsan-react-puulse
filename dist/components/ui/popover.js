import { jsx as o } from "/Users/clementgrihon/Elsan/Projects/elsan-react-puulse/node_modules/react/jsx-runtime.js";
import * as e from "/Users/clementgrihon/Elsan/Projects/elsan-react-puulse/node_modules/@radix-ui/react-popover/dist/index.mjs";
import { cn as i } from "../../lib/utils.js";
function p({
  ...t
}) {
  return /* @__PURE__ */ o(e.Root, { "data-slot": "popover", ...t });
}
function m({
  ...t
}) {
  return /* @__PURE__ */ o(e.Trigger, { "data-slot": "popover-trigger", ...t });
}
function l({
  className: t,
  align: a = "center",
  sideOffset: r = 4,
  ...d
}) {
  return /* @__PURE__ */ o(e.Portal, { children: /* @__PURE__ */ o(
    e.Content,
    {
      "data-slot": "popover-content",
      align: a,
      sideOffset: r,
      className: i(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-72 rounded-md border p-4 shadow-md outline-hidden",
        t
      ),
      ...d
    }
  ) });
}
export {
  p as Popover,
  l as PopoverContent,
  m as PopoverTrigger
};

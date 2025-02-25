import { jsxs as i, jsx as l } from "/Users/clementgrihon/Elsan/Projects/elsan-react-puulse/node_modules/react/jsx-runtime.js";
import * as o from "/Users/clementgrihon/Elsan/Projects/elsan-react-puulse/node_modules/@radix-ui/react-scroll-area/dist/index.mjs";
import { cn as t } from "../../lib/utils.js";
function d({
  className: e,
  children: r,
  ...a
}) {
  return /* @__PURE__ */ i(
    o.Root,
    {
      "data-slot": "scroll-area",
      className: t("relative", e),
      ...a,
      children: [
        /* @__PURE__ */ l(
          o.Viewport,
          {
            "data-slot": "scroll-area-viewport",
            className: "ring-ring/10 dark:ring-ring/20 dark:outline-ring/40 outline-ring/50 size-full rounded-[inherit] transition-[color,box-shadow] focus-visible:ring-4 focus-visible:outline-1",
            children: r
          }
        ),
        /* @__PURE__ */ l(s, {}),
        /* @__PURE__ */ l(o.Corner, {})
      ]
    }
  );
}
function s({
  className: e,
  orientation: r = "vertical",
  ...a
}) {
  return /* @__PURE__ */ l(
    o.ScrollAreaScrollbar,
    {
      "data-slot": "scroll-area-scrollbar",
      orientation: r,
      className: t(
        "flex touch-none p-px transition-colors select-none",
        r === "vertical" && "h-full w-2.5 border-l border-l-transparent",
        r === "horizontal" && "h-2.5 flex-col border-t border-t-transparent",
        e
      ),
      ...a,
      children: /* @__PURE__ */ l(
        o.ScrollAreaThumb,
        {
          "data-slot": "scroll-area-thumb",
          className: "bg-border relative flex-1 rounded-full"
        }
      )
    }
  );
}
export {
  d as ScrollArea,
  s as ScrollBar
};

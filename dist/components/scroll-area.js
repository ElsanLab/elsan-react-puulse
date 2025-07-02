var s = Object.defineProperty;
var t = (r, e) => s(r, "name", { value: e, configurable: !0 });
import { jsxs as i, jsx as l } from "react/jsx-runtime";
import * as o from "@radix-ui/react-scroll-area";
import { cn as p } from "../lib/utils.js";
function b({
  className: r,
  children: e,
  ...a
}) {
  return /* @__PURE__ */ i(
    o.Root,
    {
      "data-slot": "scroll-area",
      className: p("ep:relative", r),
      ...a,
      children: [
        /* @__PURE__ */ l(
          o.Viewport,
          {
            "data-slot": "scroll-area-viewport",
            className: "ep:focus-visible:ring-ring/50 ep:size-full ep:rounded-[inherit] ep:transition-[color,box-shadow] ep:outline-none ep:focus-visible:ring-[3px] ep:focus-visible:outline-1",
            children: e
          }
        ),
        /* @__PURE__ */ l(c, {}),
        /* @__PURE__ */ l(o.Corner, {})
      ]
    }
  );
}
t(b, "ScrollArea");
function c({
  className: r,
  orientation: e = "vertical",
  ...a
}) {
  return /* @__PURE__ */ l(
    o.ScrollAreaScrollbar,
    {
      "data-slot": "scroll-area-scrollbar",
      orientation: e,
      className: p(
        "ep:flex ep:touch-none ep:p-px ep:transition-colors ep:select-none",
        e === "vertical" && "ep:h-full ep:w-2.5 ep:border-l ep:border-l-transparent",
        e === "horizontal" && "ep:h-2.5 ep:flex-col ep:border-t ep:border-t-transparent",
        r
      ),
      ...a,
      children: /* @__PURE__ */ l(
        o.ScrollAreaThumb,
        {
          "data-slot": "scroll-area-thumb",
          className: "ep:bg-border ep:relative ep:flex-1 ep:rounded-full"
        }
      )
    }
  );
}
t(c, "ScrollBar");
export {
  b as ScrollArea,
  c as ScrollBar
};

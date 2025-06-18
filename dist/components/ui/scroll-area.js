var s = Object.defineProperty;
var p = (r, e) => s(r, "name", { value: e, configurable: !0 });
import { jsxs as c, jsx as l } from "react/jsx-runtime";
import { ScrollArea as o } from "radix-ui";
import { cn as t } from "../../lib/utils.js";
function f({
  className: r,
  children: e,
  ...a
}) {
  return /* @__PURE__ */ c(
    o.Root,
    {
      "data-slot": "scroll-area",
      className: t("ep:relative", r),
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
        /* @__PURE__ */ l(n, {}),
        /* @__PURE__ */ l(o.Corner, {})
      ]
    }
  );
}
p(f, "ScrollArea");
function n({
  className: r,
  orientation: e = "vertical",
  ...a
}) {
  return /* @__PURE__ */ l(
    o.ScrollAreaScrollbar,
    {
      "data-slot": "scroll-area-scrollbar",
      orientation: e,
      className: t(
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
p(n, "ScrollBar");
export {
  f as ScrollArea,
  n as ScrollBar
};

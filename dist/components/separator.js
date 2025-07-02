var i = Object.defineProperty;
var o = (t, a) => i(t, "name", { value: a, configurable: !0 });
import { jsx as n } from "react/jsx-runtime";
import { cn as p } from "../lib/utils.js";
import { Separator as l } from "radix-ui";
function h({
  className: t,
  orientation: a = "horizontal",
  decorative: r = !0,
  ...e
}) {
  return /* @__PURE__ */ n(
    l.Root,
    {
      "data-slot": "separator",
      decorative: r,
      orientation: a,
      className: p(
        "ep:bg-border ep:shrink-0 ep:data-[orientation=horizontal]:h-px ep:data-[orientation=horizontal]:w-full ep:data-[orientation=vertical]:h-full ep:data-[orientation=vertical]:w-px",
        t
      ),
      ...e
    }
  );
}
o(h, "Separator");
export {
  h as Separator
};

var o = Object.defineProperty;
var t = (e, r) => o(e, "name", { value: r, configurable: !0 });
import { jsx as i } from "react/jsx-runtime";
import * as a from "@radix-ui/react-checkbox";
import { CheckIcon as p } from "lucide-react";
import { cn as d } from "../../lib/utils.js";
function b({
  className: e,
  ...r
}) {
  return /* @__PURE__ */ i(
    a.Root,
    {
      "data-slot": "checkbox",
      className: d(
        "ep:peer ep:border-input ep:dark:bg-input/30 ep:data-[state=checked]:bg-primary ep:data-[state=checked]:text-primary-foreground ep:dark:data-[state=checked]:bg-primary ep:data-[state=checked]:border-primary ep:focus-visible:border-ring ep:focus-visible:ring-ring/50 ep:aria-invalid:ring-destructive/20 ep:dark:aria-invalid:ring-destructive/40 ep:aria-invalid:border-destructive ep:size-4 ep:shrink-0 ep:rounded-[4px] ep:border ep:shadow-xs ep:transition-shadow ep:outline-none ep:focus-visible:ring-[3px] ep:disabled:cursor-not-allowed ep:disabled:opacity-50",
        e
      ),
      ...r,
      children: /* @__PURE__ */ i(
        a.Indicator,
        {
          "data-slot": "checkbox-indicator",
          className: "ep:flex ep:items-center ep:justify-center ep:text-current ep:transition-none",
          children: /* @__PURE__ */ i(p, { className: "ep:size-3.5" })
        }
      )
    }
  );
}
t(b, "Checkbox");
export {
  b as Checkbox
};

var t = Object.defineProperty;
var o = (e, r) => t(e, "name", { value: r, configurable: !0 });
import { jsx as i } from "react/jsx-runtime";
import { RadioGroup as a } from "radix-ui";
import { Check as d } from "lucide-react";
import { cn as p } from "../lib/utils.js";
function m({
  className: e,
  ...r
}) {
  return /* @__PURE__ */ i(
    a.Root,
    {
      "data-slot": "radio-group",
      className: p("ep:grid ep:gap-3", e),
      ...r
    }
  );
}
o(m, "RadioGroup");
function b({
  className: e,
  ...r
}) {
  return /* @__PURE__ */ i(
    a.Item,
    {
      "data-slot": "radio-group-item",
      className: p(
        "ep:focus-visible:border-ring ep:focus-visible:ring-ring/50 ep:aria-invalid:ring-destructive/20 ep:dark:aria-invalid:ring-destructive/40 ep:aria-invalid:border-destructive ep:dark:bg-input/30 ep:aspect-square ep:size-4 ep:shrink-0 ep:rounded-full ep:transition-[color,box-shadow] ep:outline-none ep:focus-visible:ring-[3px] ep:disabled:cursor-not-allowed ep:disabled:opacity-50",
        "ep:border-border ep:border ep:bg-action ep:data-[state=checked]:bg-primary ep:data-[state=checked]:border-primary ep:flex ep:items-center ep:justify-center",
        e
      ),
      ...r,
      children: /* @__PURE__ */ i(
        a.Indicator,
        {
          "data-slot": "radio-group-indicator",
          className: "ep:text-primary-foreground",
          children: /* @__PURE__ */ i(d, { className: "ep:h-3" })
        }
      )
    }
  );
}
o(b, "RadioGroupItem");
export {
  m as RadioGroup,
  b as RadioGroupItem
};

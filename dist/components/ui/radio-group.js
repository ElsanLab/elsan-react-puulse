var t = Object.defineProperty;
var o = (e, r) => t(e, "name", { value: r, configurable: !0 });
import { jsx as i } from "react/jsx-runtime";
import * as p from "@radix-ui/react-radio-group";
import { CircleCheck as s } from "lucide-react";
import { cn as a } from "../../lib/utils.js";
function c({
  className: e,
  ...r
}) {
  return /* @__PURE__ */ i(
    p.Root,
    {
      "data-slot": "radio-group",
      className: a("ep:grid ep:gap-3", e),
      ...r
    }
  );
}
o(c, "RadioGroup");
function m({
  className: e,
  ...r
}) {
  return /* @__PURE__ */ i(
    p.Item,
    {
      "data-slot": "radio-group-item",
      className: a(
        "ep:border-input ep:text-primary ep:focus-visible:border-ring ep:focus-visible:ring-ring/50 ep:aria-invalid:ring-destructive/20 ep:dark:aria-invalid:ring-destructive/40 ep:aria-invalid:border-destructive ep:dark:bg-input/30 ep:aspect-square ep:size-4 ep:shrink-0 ep:rounded-full ep:border ep:shadow-xs ep:transition-[color,box-shadow] ep:outline-none ep:focus-visible:ring-[3px] ep:disabled:cursor-not-allowed ep:disabled:opacity-50",
        e
      ),
      ...r,
      children: /* @__PURE__ */ i(
        p.Indicator,
        {
          "data-slot": "radio-group-indicator",
          className: "ep:relative ep:flex ep:items-center ep:justify-center",
          children: /* @__PURE__ */ i(s, { className: "ep:fill-primary ep:text-primary-foreground ep:absolute ep:top-1/2 ep:left-1/2 ep:size-4 ep:-translate-x-1/2 ep:-translate-y-1/2" })
        }
      )
    }
  );
}
o(m, "RadioGroupItem");
export {
  c as RadioGroup,
  m as RadioGroupItem
};

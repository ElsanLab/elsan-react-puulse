import { jsx as r } from "/Users/clementgrihon/Elsan/Projects/elsan-react-puulse/node_modules/react/jsx-runtime.js";
import * as a from "/Users/clementgrihon/Elsan/Projects/elsan-react-puulse/node_modules/@radix-ui/react-radio-group/dist/index.mjs";
import { CircleIcon as t } from "/Users/clementgrihon/Elsan/Projects/elsan-react-puulse/node_modules/lucide-react/dist/esm/lucide-react.js";
import { cn as e } from "../../lib/utils.js";
function l({
  className: i,
  ...o
}) {
  return /* @__PURE__ */ r(
    a.Root,
    {
      "data-slot": "radio-group",
      className: e("grid gap-3", i),
      ...o
    }
  );
}
function c({
  className: i,
  ...o
}) {
  return /* @__PURE__ */ r(
    a.Item,
    {
      "data-slot": "radio-group-item",
      className: e(
        "border-input text-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive aspect-square size-4 shrink-0 rounded-full border shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
        i
      ),
      ...o,
      children: /* @__PURE__ */ r(
        a.Indicator,
        {
          "data-slot": "radio-group-indicator",
          className: "relative flex items-center justify-center",
          children: /* @__PURE__ */ r(t, { className: "fill-primary absolute top-1/2 left-1/2 size-2 -translate-x-1/2 -translate-y-1/2" })
        }
      )
    }
  );
}
export {
  l as RadioGroup,
  c as RadioGroupItem
};

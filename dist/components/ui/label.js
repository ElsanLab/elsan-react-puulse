import { jsx as t } from "/Users/clementgrihon/Elsan/Projects/elsan-react-puulse/node_modules/react/jsx-runtime.js";
import * as a from "/Users/clementgrihon/Elsan/Projects/elsan-react-puulse/node_modules/@radix-ui/react-label/dist/index.mjs";
import { cn as r } from "../../lib/utils.js";
function d({
  className: e,
  ...o
}) {
  return /* @__PURE__ */ t(
    a.Root,
    {
      "data-slot": "label",
      className: r(
        "text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
        e
      ),
      ...o
    }
  );
}
export {
  d as Label
};

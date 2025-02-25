import { jsx as t } from "/Users/clementgrihon/Elsan/Projects/elsan-react-puulse/node_modules/react/jsx-runtime.js";
import * as e from "/Users/clementgrihon/Elsan/Projects/elsan-react-puulse/node_modules/@radix-ui/react-switch/dist/index.mjs";
import { cn as r } from "../../lib/utils.js";
function o({
  className: a,
  ...i
}) {
  return /* @__PURE__ */ t(
    e.Root,
    {
      "data-slot": "switch",
      className: r(
        "peer data-[state=checked]:bg-primary data-[state=unchecked]:bg-input focus-visible:border-ring focus-visible:ring-ring/50 inline-flex h-5 w-9 shrink-0 items-center rounded-full border-2 border-transparent shadow-xs transition-all outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
        a
      ),
      ...i,
      children: /* @__PURE__ */ t(
        e.Thumb,
        {
          "data-slot": "switch-thumb",
          className: r(
            "bg-background pointer-events-none block size-4 rounded-full ring-0 shadow-lg transition-transform data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0"
          )
        }
      )
    }
  );
}
export {
  o as Switch
};

import { jsxs as r, jsx as e } from "/Users/clementgrihon/Elsan/Projects/elsan-react-puulse/node_modules/react/jsx-runtime.js";
import { cloneElement as l } from "/Users/clementgrihon/Elsan/Projects/elsan-react-puulse/node_modules/react/index.js";
import { Input as o } from "../ui/input.js";
const m = ({
  icon: t,
  ...s
}) => /* @__PURE__ */ r("div", { className: "relative", children: [
  /* @__PURE__ */ e("div", { className: "absolute left-0 top-0 bottom-0 aspect-square flex items-center justify-center text-muted-foreground", children: l(t, { className: "size-4" }) }),
  /* @__PURE__ */ e(o, { className: "w-full pl-8", ...s })
] });
m.displayName = "Input";
export {
  m as IconInput
};

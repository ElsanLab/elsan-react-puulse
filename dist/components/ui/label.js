var r = Object.defineProperty;
var p = (e, t) => r(e, "name", { value: t, configurable: !0 });
import { jsxs as i, jsx as s } from "react/jsx-runtime";
import * as n from "@radix-ui/react-label";
import { cn as l } from "../../lib/utils.js";
function u({
  className: e,
  required: t,
  children: a,
  ...o
}) {
  return /* @__PURE__ */ i(
    n.Root,
    {
      "data-slot": "label",
      className: l(
        "ep:flex ep:items-center ep:gap-2 ep:text-sm ep:leading-none ep:font-medium ep:select-none ep:group-data-[disabled=true]:pointer-events-none ep:group-data-[disabled=true]:opacity-50 ep:peer-disabled:cursor-not-allowed ep:peer-disabled:opacity-50",
        e
      ),
      ...o,
      children: [
        t && /* @__PURE__ */ s("span", { className: "ep:text-destructive", children: "*" }),
        a
      ]
    }
  );
}
p(u, "Label");
export {
  u as Label
};

var p = Object.defineProperty;
var a = (e, t) => p(e, "name", { value: t, configurable: !0 });
import { jsxs as r, jsx as s } from "react/jsx-runtime";
import { Label as n } from "radix-ui";
import { cn as m } from "../../lib/utils.js";
function d({
  className: e,
  required: t,
  children: l,
  ...o
}) {
  return /* @__PURE__ */ r(
    n.Root,
    {
      "data-slot": "label",
      className: m(
        "ep:flex ep:items-center ep:gap-2 ep:text-sm ep:font-normal ep:leading-5 ep:select-none",
        e
      ),
      ...o,
      children: [
        t && /* @__PURE__ */ s("span", { className: "ep:text-destructive", children: "*" }),
        l
      ]
    }
  );
}
a(d, "Label");
export {
  d as Label
};

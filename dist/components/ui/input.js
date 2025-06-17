var l = Object.defineProperty;
var s = (r, i) => l(r, "name", { value: i, configurable: !0 });
import { jsxs as a, jsx as t } from "react/jsx-runtime";
import { cn as n } from "../../lib/utils.js";
function f({
  className: r,
  type: i,
  left: e,
  right: p,
  ...o
}) {
  return /* @__PURE__ */ a("div", { className: n("ep:relative ep:flex ep:w-full ep:gap-2", r), children: [
    /* @__PURE__ */ t(
      "input",
      {
        type: i,
        "data-slot": "input",
        className: n(
          "ep:file:text-foreground ep:placeholder:text-muted-foreground ep:selection:bg-primary ep:selection:text-primary-foreground ep:dark:bg-input/30 ep:border-border ep:flex ep:h-9 ep:w-full ep:min-w-0 ep:rounded-sm ep:border ep:bg-transparent ep:py-1 ep:text-base ep:shadow-xs ep:transition-[color,box-shadow] ep:outline-none ep:file:inline-flex ep:file:h-7 ep:file:border-0 ep:file:bg-transparent ep:file:text-sm ep:file:font-medium ep:disabled:pointer-events-none ep:disabled:cursor-not-allowed ep:disabled:opacity-50 ep:md:text-sm",
          "ep:focus-visible:border-primary-light-border ep:focus-visible:ring-ring ep:focus-visible:ring-[2px]",
          "ep:aria-invalid:ring-destructive/20 ep:dark:aria-invalid:ring-destructive/40 ep:aria-invalid:border-destructive",
          {
            "ep:pl-10": !!e,
            "ep:px-3": !e,
            "ep:pr-10": !!p,
            "ep:pr-3": !p
          }
        ),
        ...o
      }
    ),
    e && /* @__PURE__ */ t("div", { className: "ep:absolute ep:top-1/2 ep:left-0 ep:size-8.5 ep:items-center ep:justify-center ep:flex ep:-translate-y-1/2 ep:border-r ep:border-border ep:text-input-foreground ep:[&_svg:not([class*=size-])]:size-4", children: e }),
    p && /* @__PURE__ */ t("div", { className: "ep:absolute ep:top-1/2 ep:right-0 ep:size-8.5 ep:items-center ep:justify-center ep:flex ep:-translate-y-1/2 ep:text-input-foreground ep:[&_svg:not([class*=size-])]:size-4", children: p })
  ] });
}
s(f, "Input");
export {
  f as Input
};

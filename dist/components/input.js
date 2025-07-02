var a = Object.defineProperty;
var i = (p, e) => a(p, "name", { value: e, configurable: !0 });
import { jsx as t, jsxs as l } from "react/jsx-runtime";
import { cn as n } from "../lib/utils.js";
function s({
  className: p,
  type: e,
  ...r
}) {
  return /* @__PURE__ */ t(
    "input",
    {
      type: e,
      "data-slot": "input",
      className: n(
        "ep:file:text-foreground ep:placeholder:text-muted-foreground ep:selection:bg-primary ep:selection:text-primary-foreground ep:dark:bg-input/30 ep:border-border ep:flex ep:h-9 ep:w-full ep:min-w-0 ep:rounded-sm ep:border ep:bg-transparent ep:py-1 ep:text-base ep:shadow-xs ep:transition-[color,box-shadow] ep:outline-none ep:file:inline-flex ep:file:h-7 ep:file:border-0 ep:file:bg-transparent ep:file:text-sm ep:file:font-medium ep:disabled:pointer-events-none ep:disabled:cursor-not-allowed ep:disabled:opacity-50 ep:md:text-sm",
        "ep:focus-visible:border-primary-light-border ep:focus-visible:ring-ring ep:focus-visible:ring-[2px]",
        "ep:aria-invalid:ring-destructive/20 ep:dark:aria-invalid:ring-destructive/40 ep:aria-invalid:border-destructive",
        "ep:px-3",
        p
      ),
      ...r
    }
  );
}
i(s, "Input");
function d({
  className: p,
  left: e,
  right: r,
  ...o
}) {
  return /* @__PURE__ */ l("div", { className: n("ep:relative ep:flex ep:w-fit ep:gap-2"), children: [
    /* @__PURE__ */ t(
      s,
      {
        "data-slot": "input",
        className: n(
          {
            "ep:pl-10": !!e,
            "ep:pr-10": !!r
          },
          p
        ),
        ...o
      }
    ),
    e && /* @__PURE__ */ t("div", { className: "ep:absolute ep:top-1/2 ep:left-0 ep:size-8.5 ep:items-center ep:justify-center ep:flex ep:-translate-y-1/2 ep:border-r ep:border-border ep:text-input-foreground ep:[&_svg:not([class*=size-])]:size-4", children: e }),
    r && /* @__PURE__ */ t("div", { className: "ep:absolute ep:top-1/2 ep:right-0 ep:size-8.5 ep:items-center ep:justify-center ep:flex ep:-translate-y-1/2 ep:text-input-foreground ep:[&_svg:not([class*=size-])]:size-4", children: r })
  ] });
}
i(d, "CustomizableInput");
function b({
  left: p,
  right: e,
  ...r
}) {
  return !e && !p ? /* @__PURE__ */ t(s, { ...r }) : /* @__PURE__ */ t(d, { left: p, right: e, ...r });
}
i(b, "InputRenderer");
export {
  b as Input
};

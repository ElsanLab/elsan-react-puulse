import { jsx as i, jsxs as d } from "/Users/clementgrihon/Elsan/Projects/elsan-react-puulse/node_modules/react/jsx-runtime.js";
import { ChevronsLeft as m, ChevronLeft as p, ChevronRight as v, ChevronsRight as h } from "/Users/clementgrihon/Elsan/Projects/elsan-react-puulse/node_modules/lucide-react/dist/esm/lucide-react.js";
import { Button as c } from "../ui/button.js";
import { TooltipProvider as f, Tooltip as s, TooltipTrigger as o, TooltipContent as e } from "../ui/tooltip.js";
const b = ({
  lastPage: t,
  currentPage: l,
  onPageChange: r
}) => t <= 1 ? null : /* @__PURE__ */ i(f, { children: /* @__PURE__ */ d("div", { className: "flex items-center justify-end space-x-2", children: [
  /* @__PURE__ */ d(s, { children: [
    /* @__PURE__ */ i(o, { asChild: !0, children: /* @__PURE__ */ i(
      c,
      {
        variant: "outline",
        size: "icon",
        onClick: () => r == null ? void 0 : r(1),
        disabled: l <= 1,
        children: /* @__PURE__ */ i(m, {})
      }
    ) }),
    /* @__PURE__ */ i(e, { children: "Première page" })
  ] }),
  /* @__PURE__ */ d(s, { children: [
    /* @__PURE__ */ i(o, { asChild: !0, children: /* @__PURE__ */ i(
      c,
      {
        variant: "outline",
        size: "icon",
        onClick: () => r == null ? void 0 : r(l - 1),
        disabled: l <= 1,
        children: /* @__PURE__ */ i(p, {})
      }
    ) }),
    /* @__PURE__ */ i(e, { children: "Page précédente" })
  ] }),
  /* @__PURE__ */ d("div", { className: "text-sm", children: [
    "Page ",
    l,
    " / ",
    t
  ] }),
  /* @__PURE__ */ d(s, { children: [
    /* @__PURE__ */ i(o, { asChild: !0, children: /* @__PURE__ */ i(
      c,
      {
        variant: "outline",
        size: "icon",
        onClick: () => r == null ? void 0 : r(l + 1),
        disabled: l === t,
        children: /* @__PURE__ */ i(v, {})
      }
    ) }),
    /* @__PURE__ */ i(e, { children: "Page suivante" })
  ] }),
  /* @__PURE__ */ d(s, { children: [
    /* @__PURE__ */ i(o, { asChild: !0, children: /* @__PURE__ */ i(
      c,
      {
        variant: "outline",
        size: "icon",
        onClick: () => r == null ? void 0 : r(t),
        disabled: l === t,
        children: /* @__PURE__ */ i(h, {})
      }
    ) }),
    /* @__PURE__ */ i(e, { children: "Dernière page" })
  ] })
] }) });
export {
  b as TablePagination
};

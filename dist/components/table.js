var l = Object.defineProperty;
var a = (e, t) => l(e, "name", { value: t, configurable: !0 });
import { jsx as o } from "react/jsx-runtime";
import { cn as r } from "../lib/utils.js";
function b({ className: e, ...t }) {
  return /* @__PURE__ */ o(
    "div",
    {
      "data-slot": "table-container",
      className: "ep:relative ep:w-full ep:overflow-x-auto",
      children: /* @__PURE__ */ o(
        "table",
        {
          "data-slot": "table",
          className: r(
            "ep:w-full ep:caption-bottom ep:text-sm ep:border ep:border-border",
            e
          ),
          ...t
        }
      )
    }
  );
}
a(b, "Table");
function d({ className: e, ...t }) {
  return /* @__PURE__ */ o(
    "thead",
    {
      "data-slot": "table-header",
      className: r(
        "ep:bg-muted ep:text-foreground ep:border-b-border ep:hover:bg-accent",
        e
      ),
      ...t
    }
  );
}
a(d, "TableHeader");
function s({ className: e, ...t }) {
  return /* @__PURE__ */ o("tbody", { "data-slot": "table-body", className: r("", e), ...t });
}
a(s, "TableBody");
function i({ className: e, ...t }) {
  return /* @__PURE__ */ o(
    "tfoot",
    {
      "data-slot": "table-footer",
      className: r(
        "ep:bg-muted ep:hover:bg-accent ep:border-t ep:[&>tr]:last:border-b-0",
        e
      ),
      ...t
    }
  );
}
a(i, "TableFooter");
function u({ className: e, ...t }) {
  return /* @__PURE__ */ o(
    "tr",
    {
      "data-slot": "table-row",
      className: r(
        "ep:data-[state=selected]:bg-accent ep:border-b ep:transition-colors ep:hover:bg-accent",
        e
      ),
      ...t
    }
  );
}
a(u, "TableRow");
function m({ className: e, ...t }) {
  return /* @__PURE__ */ o(
    "th",
    {
      "data-slot": "table-head",
      className: r(
        "ep:text-foreground ep:h-10 ep:px-2 ep:text-left ep:align-middle ep:font-medium ep:whitespace-nowrap ep:[&:has([role=checkbox])]:pr-0 ep:[&>[role=checkbox]]:translate-y-[2px]",
        e
      ),
      ...t
    }
  );
}
a(m, "TableHead");
function f({ className: e, ...t }) {
  return /* @__PURE__ */ o(
    "td",
    {
      "data-slot": "table-cell",
      className: r(
        "ep:p-2 ep:align-middle ep:whitespace-nowrap ep:[&:has([role=checkbox])]:pr-0 ep:[&>[role=checkbox]]:translate-y-[2px]",
        e
      ),
      ...t
    }
  );
}
a(f, "TableCell");
function h({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ o(
    "caption",
    {
      "data-slot": "table-caption",
      className: r("ep:text-muted-foreground ep:mt-4 ep:text-sm", e),
      ...t
    }
  );
}
a(h, "TableCaption");
export {
  b as Table,
  s as TableBody,
  h as TableCaption,
  f as TableCell,
  i as TableFooter,
  m as TableHead,
  d as TableHeader,
  u as TableRow
};

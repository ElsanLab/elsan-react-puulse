import { jsxs as n, Fragment as T, jsx as e } from "/Users/clementgrihon/Elsan/Projects/elsan-react-puulse/node_modules/react/jsx-runtime.js";
import { useReactTable as w, getCoreRowModel as D, flexRender as b } from "/Users/clementgrihon/Elsan/Projects/elsan-react-puulse/node_modules/@tanstack/react-table/build/lib/index.mjs";
import { Table as K, TableHeader as j, TableRow as p, TableHead as H, TableBody as M, TableCell as z } from "../ui/table.js";
import { ChevronUp as S, ChevronDown as F, ChevronsUpDown as I } from "/Users/clementgrihon/Elsan/Projects/elsan-react-puulse/node_modules/lucide-react/dist/esm/lucide-react.js";
import { cn as U } from "../../lib/utils.js";
import { TablePagination as A } from "./tablePagination.js";
const r = "0.8rem", L = ({
  data: R = [],
  columns: u = [],
  emptyMessage: N = "Aucun élément",
  sortableColumns: m = void 0,
  sorting: l = void 0,
  onSortingChange: a = void 0,
  currentPage: h = void 0,
  lastPage: f = void 0,
  onPageChange: v = void 0
}) => {
  const y = w({
    data: R,
    columns: u,
    getCoreRowModel: D(),
    manualFiltering: !0,
    manualPagination: !0,
    manualSorting: !0
  }), i = y.getRowModel().rows, x = !!m && !!l && !!a;
  return /* @__PURE__ */ n(T, { children: [
    /* @__PURE__ */ n(K, { children: [
      /* @__PURE__ */ e(j, { children: y.getHeaderGroups().map((t) => /* @__PURE__ */ e(p, { children: t.headers.map((d) => {
        let s, o = null, c = null;
        return x && (c = (m == null ? void 0 : m.find(
          (k) => k.columnId === d.column.id
        )) ?? null, c !== null && (s = () => {
          a == null || a((c == null ? void 0 : c.sortKey) ?? "");
        }, (l == null ? void 0 : l.key) === c.sortKey ? o = (l == null ? void 0 : l.direction) === "asc" ? /* @__PURE__ */ e(S, { size: r }) : /* @__PURE__ */ e(F, { size: r }) : o = /* @__PURE__ */ e(I, { size: r }))), /* @__PURE__ */ e(
          H,
          {
            className: "cursor-pointer group",
            style: {
              width: d.getSize() === 0 ? 0 : void 0
            },
            onClick: s,
            children: /* @__PURE__ */ n("div", { className: "flex items-center gap-x-sm", children: [
              c && o && x && /* @__PURE__ */ e(
                "span",
                {
                  className: U({
                    "opacity-30 group-hover:opacity-100": (l == null ? void 0 : l.key) !== c.sortKey,
                    "text-primary": (l == null ? void 0 : l.key) === c.sortKey
                  }),
                  children: o
                }
              ),
              d.isPlaceholder ? null : b(
                d.column.columnDef.header,
                d.getContext()
              )
            ] })
          },
          d.id
        );
      }) }, t.id)) }),
      /* @__PURE__ */ n(M, { children: [
        !(i != null && i.length) && /* @__PURE__ */ e(p, { children: /* @__PURE__ */ e(z, { colSpan: u.length, className: "h-24 text-center", children: N }) }),
        (i == null ? void 0 : i.length) > 0 && /* @__PURE__ */ e(T, { children: i.map((t) => /* @__PURE__ */ e(
          p,
          {
            "data-state": t.getIsSelected() && "selected",
            children: t.getVisibleCells().map((d) => /* @__PURE__ */ e(
              z,
              {
                style: {
                  width: d.column.getSize() === 0 ? 0 : void 0
                },
                children: b(
                  d.column.columnDef.cell,
                  d.getContext()
                )
              },
              d.id
            ))
          },
          t.id
        )) })
      ] })
    ] }),
    !!h && !!f && !!v && /* @__PURE__ */ e("div", { className: "flex justify-end mt-md", children: /* @__PURE__ */ e(
      A,
      {
        currentPage: h,
        lastPage: f,
        onPageChange: v
      }
    ) })
  ] });
};
export {
  L as SimpleTable
};

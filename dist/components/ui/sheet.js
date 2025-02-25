import { jsxs as i, jsx as a } from "/Users/clementgrihon/Elsan/Projects/elsan-react-puulse/node_modules/react/jsx-runtime.js";
import * as o from "/Users/clementgrihon/Elsan/Projects/elsan-react-puulse/node_modules/@radix-ui/react-dialog/dist/index.mjs";
import { XIcon as d } from "/Users/clementgrihon/Elsan/Projects/elsan-react-puulse/node_modules/lucide-react/dist/esm/lucide-react.js";
import { cn as s } from "../../lib/utils.js";
import { cva as c } from "/Users/clementgrihon/Elsan/Projects/elsan-react-puulse/node_modules/class-variance-authority/dist/index.mjs";
function f({
  ...t
}) {
  return /* @__PURE__ */ a(o.Portal, { "data-slot": "sheet-portal", ...t });
}
function m({
  className: t,
  ...e
}) {
  return /* @__PURE__ */ a(
    o.Overlay,
    {
      "data-slot": "sheet-overlay",
      className: s(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/80",
        t
      ),
      ...e
    }
  );
}
const u = c(
  "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out fixed z-50 flex flex-col gap-4 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500",
  {
    variants: {
      side: {
        top: "data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top inset-x-0 top-0 h-auto border-b",
        bottom: "data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom inset-x-0 bottom-0 h-auto border-t",
        left: "data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left inset-y-0 left-0 h-full border-r",
        right: "data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right inset-y-0 right-0 h-full border-l"
      },
      size: {
        sm: "w-full sm:w-dialog-sm",
        md: "w-full sm:w-dialog-md",
        lg: "w-full md:w-dialog-lg",
        xl: "w-full lg:w-dialog-xl"
      }
    },
    defaultVariants: {
      side: "right",
      size: "md"
    }
  }
);
function b({
  className: t,
  children: e,
  side: l = "right",
  size: n = "md",
  ...r
}) {
  return /* @__PURE__ */ i(f, { children: [
    /* @__PURE__ */ a(m, {}),
    /* @__PURE__ */ i(
      o.Content,
      {
        "data-slot": "sheet-content",
        className: s(u({ side: l, size: n }), t),
        ...r,
        children: [
          e,
          /* @__PURE__ */ i(o.Close, { className: "ring-offset-background focus:ring-ring data-[state=open]:bg-secondary absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none", children: [
            /* @__PURE__ */ a(d, { className: "size-4" }),
            /* @__PURE__ */ a("span", { className: "sr-only", children: "Close" })
          ] })
        ]
      }
    )
  ] });
}
function y({ className: t, ...e }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "sheet-header",
      className: s(
        "flex flex-col space-y-2 text-center sm:text-left mx-6",
        t
      ),
      ...e
    }
  );
}
function v({ className: t, ...e }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "sheet-footer",
      className: s(
        "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2 mx-6",
        t
      ),
      ...e
    }
  );
}
function w({
  className: t,
  ...e
}) {
  return /* @__PURE__ */ a(
    o.Title,
    {
      "data-slot": "sheet-title",
      className: s("text-lg font-semibold text-foreground", t),
      ...e
    }
  );
}
function N({
  className: t,
  ...e
}) {
  return /* @__PURE__ */ a(
    o.Description,
    {
      "data-slot": "sheet-description",
      className: s("text-sm text-muted-foreground", t),
      ...e
    }
  );
}
export {
  b as SheetContent,
  N as SheetDescription,
  v as SheetFooter,
  y as SheetHeader,
  w as SheetTitle
};

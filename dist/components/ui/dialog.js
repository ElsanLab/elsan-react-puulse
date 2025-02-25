import { jsxs as i, jsx as e } from "/Users/clementgrihon/Elsan/Projects/elsan-react-puulse/node_modules/react/jsx-runtime.js";
import * as o from "/Users/clementgrihon/Elsan/Projects/elsan-react-puulse/node_modules/@radix-ui/react-dialog/dist/index.mjs";
import { XIcon as d } from "/Users/clementgrihon/Elsan/Projects/elsan-react-puulse/node_modules/lucide-react/dist/esm/lucide-react.js";
import { cn as n } from "../../lib/utils.js";
import { cva as r } from "/Users/clementgrihon/Elsan/Projects/elsan-react-puulse/node_modules/class-variance-authority/dist/index.mjs";
function g({
  ...t
}) {
  return /* @__PURE__ */ e(o.Portal, { "data-slot": "dialog-portal", ...t });
}
function c({
  className: t,
  ...a
}) {
  return /* @__PURE__ */ e(
    o.Overlay,
    {
      "data-slot": "dialog-overlay",
      className: n(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/80",
        t
      ),
      ...a
    }
  );
}
const f = r(
  "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200",
  {
    variants: {
      size: {
        sm: "w-full sm:w-dialog-sm",
        md: "w-full sm:w-dialog-md",
        lg: "w-full md:w-dialog-lg",
        xl: "w-full lg:w-dialog-xl"
      }
    },
    defaultVariants: {
      size: "md"
    }
  }
);
function v({
  className: t,
  children: a,
  size: l = "md",
  ...s
}) {
  return /* @__PURE__ */ i(g, { "data-slot": "dialog-portal", children: [
    /* @__PURE__ */ e(c, {}),
    /* @__PURE__ */ i(
      o.Content,
      {
        "data-slot": "dialog-content",
        className: n(f({ size: l }), t),
        ...s,
        children: [
          a,
          /* @__PURE__ */ i(o.Close, { className: "ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", children: [
            /* @__PURE__ */ e(d, {}),
            /* @__PURE__ */ e("span", { className: "sr-only", children: "Close" })
          ] })
        ]
      }
    )
  ] });
}
function h({ className: t, ...a }) {
  return /* @__PURE__ */ e(
    "div",
    {
      "data-slot": "dialog-header",
      className: n("flex flex-col gap-2 text-center sm:text-left", t),
      ...a
    }
  );
}
function b({ className: t, ...a }) {
  return /* @__PURE__ */ e(
    "div",
    {
      "data-slot": "dialog-footer",
      className: n(
        "flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
        t
      ),
      ...a
    }
  );
}
function w({
  className: t,
  ...a
}) {
  return /* @__PURE__ */ e(
    o.Title,
    {
      "data-slot": "dialog-title",
      className: n(
        "text-lg font-semibold leading-none tracking-tight",
        t
      ),
      ...a
    }
  );
}
function D({
  className: t,
  ...a
}) {
  return /* @__PURE__ */ e(
    o.Description,
    {
      "data-slot": "dialog-description",
      className: n("text-sm text-muted-foreground", t),
      ...a
    }
  );
}
export {
  v as DialogContent,
  D as DialogDescription,
  b as DialogFooter,
  h as DialogHeader,
  c as DialogOverlay,
  g as DialogPortal,
  w as DialogTitle
};

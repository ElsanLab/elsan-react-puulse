var l = Object.defineProperty;
var a = (e, o) => l(e, "name", { value: o, configurable: !0 });
import { jsx as t, jsxs as r } from "react/jsx-runtime";
import { Dialog as p } from "radix-ui";
import { XIcon as d } from "lucide-react";
import { cn as s } from "../lib/utils.js";
import { ScrollArea as c } from "./scroll-area.js";
function S({ ...e }) {
  return /* @__PURE__ */ t(p.Root, { "data-slot": "sheet", ...e });
}
a(S, "Sheet");
function N({
  ...e
}) {
  return /* @__PURE__ */ t(p.Trigger, { "data-slot": "sheet-trigger", ...e });
}
a(N, "SheetTrigger");
function v({
  ...e
}) {
  return /* @__PURE__ */ t(p.Close, { "data-slot": "sheet-close", ...e });
}
a(v, "SheetClose");
function f({
  ...e
}) {
  return /* @__PURE__ */ t(p.Portal, { "data-slot": "sheet-portal", ...e });
}
a(f, "SheetPortal");
function u({
  className: e,
  ...o
}) {
  return /* @__PURE__ */ t(
    p.Overlay,
    {
      "data-slot": "sheet-overlay",
      className: s(
        "ep:data-[state=open]:animate-in ep:data-[state=closed]:animate-out ep:data-[state=closed]:fade-out-0 ep:data-[state=open]:fade-in-0 ep:fixed ep:inset-0 ep:z-50 ep:bg-black/50",
        e
      ),
      ...o
    }
  );
}
a(u, "SheetOverlay");
function w({
  className: e,
  children: o,
  side: n = "right",
  ...i
}) {
  return /* @__PURE__ */ r(f, { children: [
    /* @__PURE__ */ t(u, {}),
    /* @__PURE__ */ r(
      p.Content,
      {
        "data-slot": "sheet-content",
        className: s(
          "ep:bg-background ep:data-[state=open]:animate-in ep:data-[state=closed]:animate-out ep:fixed ep:z-50 ep:flex ep:flex-col ep:gap-4 ep:shadow-lg ep:transition ep:ease-in-out ep:data-[state=closed]:duration-300 ep:data-[state=open]:duration-500",
          n === "right" && "ep:data-[state=closed]:slide-out-to-right ep:data-[state=open]:slide-in-from-right ep:inset-y-0 ep:right-0 ep:h-full ep:w-3/4 ep:border-l ep:sm:max-w-sm",
          n === "left" && "ep:data-[state=closed]:slide-out-to-left ep:data-[state=open]:slide-in-from-left ep:inset-y-0 ep:left-0 ep:h-full ep:w-3/4 ep:border-r ep:sm:max-w-sm",
          n === "top" && "ep:data-[state=closed]:slide-out-to-top ep:data-[state=open]:slide-in-from-top ep:inset-x-0 ep:top-0 ep:h-auto ep:border-b",
          n === "bottom" && "ep:data-[state=closed]:slide-out-to-bottom ep:data-[state=open]:slide-in-from-bottom ep:inset-x-0 ep:bottom-0 ep:h-auto ep:border-t",
          e
        ),
        ...i,
        children: [
          o,
          /* @__PURE__ */ r(p.Close, { className: "ep:ring-offset-background ep:focus:ring-ring ep:data-[state=open]:bg-secondary ep:absolute ep:top-4 ep:right-4 ep:rounded-xs ep:opacity-70 ep:transition-opacity ep:hover:opacity-100 ep:focus:ring-2 ep:focus:ring-offset-2 ep:focus:outline-hidden ep:disabled:pointer-events-none", children: [
            /* @__PURE__ */ t(d, { className: "ep:size-4" }),
            /* @__PURE__ */ t("span", { className: "ep:sr-only", children: "Close" })
          ] })
        ]
      }
    )
  ] });
}
a(w, "SheetContent");
function C({ className: e, ...o }) {
  return /* @__PURE__ */ t(
    "div",
    {
      "data-slot": "sheet-header",
      className: s(
        "ep:flex ep:flex-col ep:gap-1.5 ep:mx-6 ep:mt-6",
        e
      ),
      ...o
    }
  );
}
a(C, "SheetHeader");
function T(e) {
  return /* @__PURE__ */ t(c, { className: "ep:flex-1 ep:overflow-y-auto", children: /* @__PURE__ */ t("div", { className: "ep:flex-1 ep:mx-6", ...e }) });
}
a(T, "SheetBody");
function k({ className: e, ...o }) {
  return /* @__PURE__ */ t(
    "div",
    {
      "data-slot": "sheet-footer",
      className: s(
        "ep:mt-auto ep:flex ep:flex-col ep:gap-2 ep:mx-6 ep:mb-6",
        e
      ),
      ...o
    }
  );
}
a(k, "SheetFooter");
function z({
  className: e,
  ...o
}) {
  return /* @__PURE__ */ t(
    p.Title,
    {
      "data-slot": "sheet-title",
      className: s("ep:text-foreground ep:font-semibold", e),
      ...o
    }
  );
}
a(z, "SheetTitle");
function D({
  className: e,
  ...o
}) {
  return /* @__PURE__ */ t(
    p.Description,
    {
      "data-slot": "sheet-description",
      className: s("ep:text-muted-foreground ep:text-sm", e),
      ...o
    }
  );
}
a(D, "SheetDescription");
export {
  S as Sheet,
  T as SheetBody,
  v as SheetClose,
  w as SheetContent,
  D as SheetDescription,
  k as SheetFooter,
  C as SheetHeader,
  z as SheetTitle,
  N as SheetTrigger
};

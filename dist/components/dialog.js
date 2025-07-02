var r = Object.defineProperty;
var o = (e, t) => r(e, "name", { value: t, configurable: !0 });
import { jsx as a, jsxs as p } from "react/jsx-runtime";
import { Dialog as l } from "radix-ui";
import { XIcon as d } from "lucide-react";
import { cn as n } from "../lib/utils.js";
import { cva as g } from "class-variance-authority";
function h({
  ...e
}) {
  return /* @__PURE__ */ a(l.Root, { "data-slot": "dialog", ...e });
}
o(h, "Dialog");
function y({
  ...e
}) {
  return /* @__PURE__ */ a(l.Trigger, { "data-slot": "dialog-trigger", ...e });
}
o(y, "DialogTrigger");
function c({
  ...e
}) {
  return /* @__PURE__ */ a(l.Portal, { "data-slot": "dialog-portal", ...e });
}
o(c, "DialogPortal");
function z({
  ...e
}) {
  return /* @__PURE__ */ a(l.Close, { "data-slot": "dialog-close", ...e });
}
o(z, "DialogClose");
function f({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    l.Overlay,
    {
      "data-slot": "dialog-overlay",
      className: n(
        "ep:data-[state=open]:animate-in ep:data-[state=closed]:animate-out ep:data-[state=closed]:fade-out-0 ep:data-[state=open]:fade-in-0 ep:fixed ep:inset-0 ep:z-50 ep:bg-black/50",
        e
      ),
      ...t
    }
  );
}
o(f, "DialogOverlay");
const u = g(
  "ep:bg-background ep:data-[state=open]:animate-in ep:data-[state=closed]:animate-out ep:data-[state=closed]:fade-out-0 ep:data-[state=open]:fade-in-0 ep:data-[state=closed]:zoom-out-95 ep:data-[state=open]:zoom-in-95 ep:fixed ep:top-[50%] ep:left-[50%] ep:z-50 ep:grid ep:w-full ep:max-w-[calc(100%-2rem)] ep:translate-x-[-50%] ep:translate-y-[-50%] ep:gap-4 ep:rounded-lg ep:border ep:p-6 ep:shadow-lg ep:duration-200 ep:sm:max-w-lg",
  {
    variants: {
      size: {
        sm: "ep:w-full ep:sm:w-dialog-sm",
        md: "ep:w-full ep:sm:w-dialog-md",
        lg: "ep:w-full ep:md:w-dialog-lg",
        xl: "ep:w-full ep:lg:w-dialog-xl"
      }
    },
    defaultVariants: {
      size: "md"
    }
  }
);
function N({
  size: e = "md",
  className: t,
  children: i,
  ...s
}) {
  return /* @__PURE__ */ p(c, { "data-slot": "dialog-portal", children: [
    /* @__PURE__ */ a(f, {}),
    /* @__PURE__ */ p(
      l.Content,
      {
        "data-slot": "dialog-content",
        className: n(u({ size: e }), t),
        ...s,
        children: [
          i,
          /* @__PURE__ */ p(l.Close, { className: "ep:ring-offset-background focus:ep:ring-ring data-[state=open]:ep:bg-accent data-[state=open]:ep:text-muted-foreground ep:absolute ep:top-4 ep:right-4 ep:rounded-xs ep:opacity-70 ep:transition-opacity hover:ep:opacity-100 focus:ep:ring-2 focus:ep:ring-offset-2 focus:ep:outline-hidden disabled:ep:pointer-events-none [&_svg]:ep:pointer-events-none [&_svg]:ep:shrink-0 [&_svg:not([class*=size-])]:ep:size-4", children: [
            /* @__PURE__ */ a(d, {}),
            /* @__PURE__ */ a("span", { className: "ep:sr-only", children: "Close" })
          ] })
        ]
      }
    )
  ] });
}
o(N, "DialogContent");
function C({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "dialog-header",
      className: n(
        "ep:flex ep:flex-col ep:gap-2 ep:text-center sm:ep:text-left",
        e
      ),
      ...t
    }
  );
}
o(C, "DialogHeader");
function k({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "dialog-footer",
      className: n(
        "ep:flex ep:flex-col-reverse ep:gap-2 ep:sm:flex-row ep:sm:justify-end",
        e
      ),
      ...t
    }
  );
}
o(k, "DialogFooter");
function T({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    l.Title,
    {
      "data-slot": "dialog-title",
      className: n("ep:text-lg ep:leading-none ep:font-semibold", e),
      ...t
    }
  );
}
o(T, "DialogTitle");
function j({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    l.Description,
    {
      "data-slot": "dialog-description",
      className: n("ep:text-muted-foreground ep:text-sm", e),
      ...t
    }
  );
}
o(j, "DialogDescription");
export {
  h as Dialog,
  z as DialogClose,
  N as DialogContent,
  j as DialogDescription,
  k as DialogFooter,
  C as DialogHeader,
  f as DialogOverlay,
  c as DialogPortal,
  T as DialogTitle,
  y as DialogTrigger
};

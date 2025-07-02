var d = Object.defineProperty;
var r = (e, t) => d(e, "name", { value: t, configurable: !0 });
import { jsx as a } from "react/jsx-runtime";
import { cn as o } from "../lib/utils.js";
function c({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "card",
      className: o(
        "ep:bg-card ep:text-card-foreground ep:flex ep:flex-col ep:gap-6 ep:rounded-xl ep:border ep:py-6 ep:shadow-sm",
        e
      ),
      ...t
    }
  );
}
r(c, "Card");
function i({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "card-header",
      className: o(
        "ep:@container/card-header ep:grid ep:auto-rows-min ep:grid-rows-[auto_auto] ep:items-start ep:gap-1.5 ep:px-6 ep:has-data-[slot=card-action]:grid-cols-[1fr_auto] ep:[.border-b]:pb-6",
        e
      ),
      ...t
    }
  );
}
r(i, "CardHeader");
function l({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "card-title",
      className: o("ep:leading-none ep:font-semibold", e),
      ...t
    }
  );
}
r(l, "CardTitle");
function u({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "card-description",
      className: o("ep:text-muted-foreground ep:text-sm", e),
      ...t
    }
  );
}
r(u, "CardDescription");
function f({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "card-action",
      className: o(
        "ep:col-start-2 ep:row-span-2 ep:row-start-1 ep:self-start ep:justify-self-end",
        e
      ),
      ...t
    }
  );
}
r(f, "CardAction");
function m({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "card-content",
      className: o("ep:px-6", e),
      ...t
    }
  );
}
r(m, "CardContent");
function x({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "card-footer",
      className: o("ep:flex ep:items-center ep:px-6 ep:[.border-t]:pt-6", e),
      ...t
    }
  );
}
r(x, "CardFooter");
export {
  c as Card,
  f as CardAction,
  m as CardContent,
  u as CardDescription,
  x as CardFooter,
  i as CardHeader,
  l as CardTitle
};

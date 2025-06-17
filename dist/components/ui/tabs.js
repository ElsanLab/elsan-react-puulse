var i = Object.defineProperty;
var p = (e, t) => i(e, "name", { value: t, configurable: !0 });
import { jsx as s } from "react/jsx-runtime";
import { Tabs as n } from "radix-ui";
import { cn as r } from "../../lib/utils.js";
function u({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ s(
    n.Root,
    {
      "data-slot": "tabs",
      className: r("ep:flex ep:flex-col ep:gap-2", e),
      ...t
    }
  );
}
p(u, "Tabs");
function f({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ s(
    n.List,
    {
      "data-slot": "tabs-list",
      className: r(
        "ep:bg-muted ep:text-muted-foreground ep:inline-flex ep:h-9 ep:w-fit ep:items-center ep:justify-center ep:rounded-lg ep:p-[3px]",
        e
      ),
      ...t
    }
  );
}
p(f, "TabsList");
function b({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ s(
    n.Trigger,
    {
      "data-slot": "tabs-trigger",
      className: r(
        "ep:focus-visible:border-ring ep:focus-visible:ring-ring/50 ep:focus-visible:outline-ring ep:text-foreground ep:inline-flex ep:h-[calc(100%-1px)] ep:flex-1 ep:items-center ep:justify-center ep:gap-1.5 ep:rounded-sm ep:border ep:border-transparent ep:px-2 ep:py-1 ep:text-sm ep:font-medium ep:whitespace-nowrap ep:transition-[color,box-shadow] ep:focus-visible:ring-[3px] ep:focus-visible:outline-1 ep:disabled:pointer-events-none ep:disabled:opacity-50 ep:[&_svg]:pointer-events-none ep:[&_svg]:shrink-0 ep:[&_svg:not([class*=size-])]:size-4",
        "ep:data-[state=active]:bg-primary ep:data-[state=active]:text-primary-foreground ep:hover:bg-accent ep:active:text-primary",
        e
      ),
      ...t
    }
  );
}
p(b, "TabsTrigger");
function d({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ s(
    n.Content,
    {
      "data-slot": "tabs-content",
      className: r("ep:flex-1 ep:outline-none", e),
      ...t
    }
  );
}
p(d, "TabsContent");
export {
  u as Tabs,
  d as TabsContent,
  f as TabsList,
  b as TabsTrigger
};

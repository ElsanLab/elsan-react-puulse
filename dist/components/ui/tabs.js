var s = Object.defineProperty;
var a = (e, t) => s(e, "name", { value: t, configurable: !0 });
import { jsx as p } from "react/jsx-runtime";
import * as r from "@radix-ui/react-tabs";
import { cn as i } from "../../lib/utils.js";
function c({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ p(
    r.Root,
    {
      "data-slot": "tabs",
      className: i("ep:flex ep:flex-col ep:gap-2", e),
      ...t
    }
  );
}
a(c, "Tabs");
function l({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ p(
    r.List,
    {
      "data-slot": "tabs-list",
      className: i(
        "ep:bg-muted ep:text-muted-foreground ep:inline-flex ep:h-9 ep:w-fit ep:items-center ep:justify-center ep:rounded-lg ep:p-[3px]",
        e
      ),
      ...t
    }
  );
}
a(l, "TabsList");
function u({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ p(
    r.Trigger,
    {
      "data-slot": "tabs-trigger",
      className: i(
        "ep:data-[state=active]:bg-primary ep:data-[state=active]:text-primary-foreground ep:dark:data-[state=active]:text-primary-foreground ep:focus-visible:border-ring ep:focus-visible:ring-ring/50 ep:focus-visible:outline-ring ep:dark:data-[state=active]:border-input ep:dark:data-[state=active]:bg-input/30 ep:text-foreground ep:dark:text-muted-foreground ep:inline-flex ep:h-[calc(100%-1px)] ep:flex-1 ep:items-center ep:justify-center ep:gap-1.5 ep:rounded-md ep:border ep:border-transparent ep:px-2 ep:py-1 ep:text-sm ep:font-medium ep:whitespace-nowrap ep:transition-[color,box-shadow] ep:focus-visible:ring-[3px] ep:focus-visible:outline-1 ep:disabled:pointer-events-none ep:disabled:opacity-50 ep:data-[state=active]:shadow-sm ep:[&_svg]:pointer-events-none ep:[&_svg]:shrink-0 ep:[&_svg:not([class*=size-])]:size-4",
        e
      ),
      ...t
    }
  );
}
a(u, "TabsTrigger");
function f({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ p(
    r.Content,
    {
      "data-slot": "tabs-content",
      className: i("ep:flex-1 ep:outline-none", e),
      ...t
    }
  );
}
a(f, "TabsContent");
export {
  c as Tabs,
  f as TabsContent,
  l as TabsList,
  u as TabsTrigger
};

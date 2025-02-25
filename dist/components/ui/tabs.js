import { jsx as s } from "/Users/clementgrihon/Elsan/Projects/elsan-react-puulse/node_modules/react/jsx-runtime.js";
import * as i from "/Users/clementgrihon/Elsan/Projects/elsan-react-puulse/node_modules/@radix-ui/react-tabs/dist/index.mjs";
import { cn as n } from "../../lib/utils.js";
function r({
  className: t,
  ...e
}) {
  return /* @__PURE__ */ s(
    i.Root,
    {
      "data-slot": "tabs",
      className: n("flex flex-col gap-2", t),
      ...e
    }
  );
}
function l({
  className: t,
  ...e
}) {
  return /* @__PURE__ */ s(
    i.List,
    {
      "data-slot": "tabs-list",
      className: n(
        "bg-muted text-muted-foreground inline-flex h-9 w-fit items-center justify-center rounded-lg p-1",
        t
      ),
      ...e
    }
  );
}
function c({
  className: t,
  ...e
}) {
  return /* @__PURE__ */ s(
    i.Trigger,
    {
      "data-slot": "tabs-trigger",
      className: n(
        "data-[state=active]:bg-background data-[state=active]:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:outline-ring inline-flex items-center justify-center gap-2 rounded-md px-2 py-1 text-sm font-medium whitespace-nowrap transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:shadow-sm [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        t
      ),
      ...e
    }
  );
}
function u({
  className: t,
  ...e
}) {
  return /* @__PURE__ */ s(
    i.Content,
    {
      "data-slot": "tabs-content",
      className: n("flex-1 outline-none", t),
      ...e
    }
  );
}
export {
  r as Tabs,
  u as TabsContent,
  l as TabsList,
  c as TabsTrigger
};

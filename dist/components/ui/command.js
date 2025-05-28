var s = Object.defineProperty;
var o = (e, p) => s(e, "name", { value: p, configurable: !0 });
import { jsx as t, jsxs as d } from "react/jsx-runtime";
import { Command as a } from "cmdk";
import { SearchIcon as c } from "lucide-react";
import { cn as n } from "../../lib/utils.js";
import { Dialog as i, DialogHeader as l, DialogTitle as u, DialogDescription as g, DialogContent as f } from "./dialog.js";
function h({
  className: e,
  ...p
}) {
  return /* @__PURE__ */ t(
    a,
    {
      "data-slot": "command",
      className: n(
        "ep:bg-popover ep:text-popover-foreground ep:flex ep:h-full ep:w-full ep:flex-col ep:overflow-hidden ep:rounded-md",
        e
      ),
      ...p
    }
  );
}
o(h, "Command");
function C({
  title: e = "Command Palette",
  description: p = "Search for a command to run...",
  children: r,
  ...m
}) {
  return /* @__PURE__ */ d(i, { ...m, children: [
    /* @__PURE__ */ d(l, { className: "ep:sr-only", children: [
      /* @__PURE__ */ t(u, { children: e }),
      /* @__PURE__ */ t(g, { children: p })
    ] }),
    /* @__PURE__ */ t(f, { className: "ep:overflow-hidden ep:p-0", children: /* @__PURE__ */ t(h, { className: "ep:[&_[cmdk-group-heading]]:text-muted-foreground ep:**:data-[slot=command-input-wrapper]:h-12 ep:[&_[cmdk-group-heading]]:px-2 ep:[&_[cmdk-group-heading]]:font-medium ep:[&_[cmdk-group]]:px-2 ep:[&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 ep:[&_[cmdk-input-wrapper]_svg]:h-5 ep:[&_[cmdk-input-wrapper]_svg]:w-5 ep:[&_[cmdk-input]]:h-12 ep:[&_[cmdk-item]]:px-2 ep:[&_[cmdk-item]]:py-3 ep:[&_[cmdk-item]_svg]:h-5 ep:[&_[cmdk-item]_svg]:w-5", children: r }) })
  ] });
}
o(C, "CommandDialog");
function N({
  className: e,
  ...p
}) {
  return /* @__PURE__ */ d(
    "div",
    {
      "data-slot": "command-input-wrapper",
      className: "ep:flex ep:h-9 ep:items-center ep:gap-2 ep:border-b ep:px-3",
      children: [
        /* @__PURE__ */ t(c, { className: "ep:size-4 ep:shrink-0 ep:opacity-50" }),
        /* @__PURE__ */ t(
          a.Input,
          {
            "data-slot": "command-input",
            className: n(
              "ep:placeholder:text-muted-foreground ep:flex ep:h-10 ep:w-full ep:rounded-md ep:bg-transparent ep:py-3 ep:text-sm ep:outline-hidden ep:disabled:cursor-not-allowed ep:disabled:opacity-50",
              e
            ),
            ...p
          }
        )
      ]
    }
  );
}
o(N, "CommandInput");
function b({
  className: e,
  ...p
}) {
  return /* @__PURE__ */ t(
    a.List,
    {
      "data-slot": "command-list",
      className: n(
        "ep:max-h-[300px] ep:scroll-py-1 ep:overflow-x-hidden ep:overflow-y-auto",
        e
      ),
      ...p
    }
  );
}
o(b, "CommandList");
function D({
  ...e
}) {
  return /* @__PURE__ */ t(
    a.Empty,
    {
      "data-slot": "command-empty",
      className: "ep:py-6 ep:text-center ep:text-sm",
      ...e
    }
  );
}
o(D, "CommandEmpty");
function I({
  className: e,
  ...p
}) {
  return /* @__PURE__ */ t(
    a.Group,
    {
      "data-slot": "command-group",
      className: n(
        "ep:text-foreground ep:[&_[cmdk-group-heading]]:text-muted-foreground ep:overflow-hidden ep:p-1 ep:[&_[cmdk-group-heading]]:px-2 ep:[&_[cmdk-group-heading]]:py-1.5 ep:[&_[cmdk-group-heading]]:text-xs ep:[&_[cmdk-group-heading]]:font-medium",
        e
      ),
      ...p
    }
  );
}
o(I, "CommandGroup");
function S({
  className: e,
  ...p
}) {
  return /* @__PURE__ */ t(
    a.Separator,
    {
      "data-slot": "command-separator",
      className: n("ep:bg-border ep:-mx-1 ep:h-px", e),
      ...p
    }
  );
}
o(S, "CommandSeparator");
function z({
  className: e,
  ...p
}) {
  return /* @__PURE__ */ t(
    a.Item,
    {
      "data-slot": "command-item",
      className: n(
        "ep:data-[selected=true]:bg-accent ep:data-[selected=true]:text-accent-foreground ep:[&_svg:not([class*=text-])]:text-muted-foreground ep:relative ep:flex ep:cursor-default ep:items-center ep:gap-2 ep:rounded-sm ep:px-2 ep:py-1.5 ep:text-sm ep:outline-hidden ep:select-none ep:data-[disabled=true]:pointer-events-none ep:data-[disabled=true]:opacity-50 ep:[&_svg]:pointer-events-none ep:[&_svg]:shrink-0 ep:[&_svg:not([class*=size-])]:size-4",
        e
      ),
      ...p
    }
  );
}
o(z, "CommandItem");
function j({
  className: e,
  ...p
}) {
  return /* @__PURE__ */ t(
    "span",
    {
      "data-slot": "command-shortcut",
      className: n(
        "ep:text-muted-foreground ep:ml-auto ep:text-xs ep:tracking-widest",
        e
      ),
      ...p
    }
  );
}
o(j, "CommandShortcut");
export {
  h as Command,
  C as CommandDialog,
  D as CommandEmpty,
  I as CommandGroup,
  N as CommandInput,
  z as CommandItem,
  b as CommandList,
  S as CommandSeparator,
  j as CommandShortcut
};

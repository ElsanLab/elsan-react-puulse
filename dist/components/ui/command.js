var c = Object.defineProperty;
var o = (e, p) => c(e, "name", { value: p, configurable: !0 });
import { jsx as t, jsxs as d } from "react/jsx-runtime";
import { Command as n } from "cmdk";
import { SearchIcon as i } from "lucide-react";
import { cn as a } from "../../lib/utils.js";
import { Dialog as l, DialogHeader as u, DialogTitle as g, DialogDescription as f, DialogContent as h } from "./dialog.js";
function x({
  className: e,
  ...p
}) {
  return /* @__PURE__ */ t(
    n,
    {
      "data-slot": "command",
      className: a(
        "ep:bg-popover ep:text-popover-foreground ep:flex ep:h-full ep:w-full ep:flex-col ep:overflow-hidden ep:rounded-md",
        e
      ),
      ...p
    }
  );
}
o(x, "Command");
function N({
  title: e = "Command Palette",
  description: p = "Search for a command to run...",
  children: r,
  className: m,
  // showCloseButton = true,
  ...s
}) {
  return /* @__PURE__ */ d(l, { ...s, children: [
    /* @__PURE__ */ d(u, { className: "ep:sr-only", children: [
      /* @__PURE__ */ t(g, { children: e }),
      /* @__PURE__ */ t(f, { children: p })
    ] }),
    /* @__PURE__ */ t(
      h,
      {
        className: a("ep:overflow-hidden ep:p-0", m),
        children: /* @__PURE__ */ t(x, { className: "ep:[&_[cmdk-group-heading]]:text-muted-foreground ep:**:data-[slot=command-input-wrapper]:h-12 ep:[&_[cmdk-group-heading]]:px-2 ep:[&_[cmdk-group-heading]]:font-medium ep:[&_[cmdk-group]]:px-2 ep:[&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 ep:[&_[cmdk-input-wrapper]_svg]:h-5 ep:[&_[cmdk-input-wrapper]_svg]:w-5 ep:[&_[cmdk-input]]:h-12 ep:[&_[cmdk-item]]:px-2 ep:[&_[cmdk-item]]:py-3 ep:[&_[cmdk-item]_svg]:h-5 ep:[&_[cmdk-item]_svg]:w-5", children: r })
      }
    )
  ] });
}
o(N, "CommandDialog");
function b({
  className: e,
  ...p
}) {
  return /* @__PURE__ */ d(
    "div",
    {
      "data-slot": "command-input-wrapper",
      className: "ep:flex ep:h-9 ep:items-center ep:gap-2 ep:border-b ep:px-3",
      children: [
        /* @__PURE__ */ t(i, { className: "ep:size-4 ep:shrink-0 ep:opacity-50" }),
        /* @__PURE__ */ t(
          n.Input,
          {
            "data-slot": "command-input",
            className: a(
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
o(b, "CommandInput");
function D({
  className: e,
  ...p
}) {
  return /* @__PURE__ */ t(
    n.List,
    {
      "data-slot": "command-list",
      className: a(
        "ep:max-h-[300px] ep:scroll-py-1 ep:overflow-x-hidden ep:overflow-y-auto",
        e
      ),
      ...p
    }
  );
}
o(D, "CommandList");
function I({
  ...e
}) {
  return /* @__PURE__ */ t(
    n.Empty,
    {
      "data-slot": "command-empty",
      className: "ep:py-6 ep:text-center ep:text-sm",
      ...e
    }
  );
}
o(I, "CommandEmpty");
function S({
  className: e,
  ...p
}) {
  return /* @__PURE__ */ t(
    n.Group,
    {
      "data-slot": "command-group",
      className: a(
        "ep:text-foreground ep:[&_[cmdk-group-heading]]:text-muted-foreground ep:overflow-hidden ep:p-1 ep:[&_[cmdk-group-heading]]:px-2 ep:[&_[cmdk-group-heading]]:py-1.5 ep:[&_[cmdk-group-heading]]:text-xs ep:[&_[cmdk-group-heading]]:font-medium",
        e
      ),
      ...p
    }
  );
}
o(S, "CommandGroup");
function z({
  className: e,
  ...p
}) {
  return /* @__PURE__ */ t(
    n.Separator,
    {
      "data-slot": "command-separator",
      className: a("ep:bg-border ep:-mx-1 ep:h-px", e),
      ...p
    }
  );
}
o(z, "CommandSeparator");
function j({
  className: e,
  ...p
}) {
  return /* @__PURE__ */ t(
    n.Item,
    {
      "data-slot": "command-item",
      className: a(
        "ep:data-[selected=true]:bg-accent ep:data-[selected=true]:text-accent-foreground ep:[&_svg:not([class*=text-])]:text-muted-foreground ep:relative ep:flex ep:cursor-default ep:items-center ep:gap-2 ep:rounded-sm ep:px-2 ep:py-1.5 ep:text-sm ep:outline-hidden ep:select-none ep:data-[disabled=true]:pointer-events-none ep:data-[disabled=true]:opacity-50 ep:[&_svg]:pointer-events-none ep:[&_svg]:shrink-0 ep:[&_svg:not([class*=size-])]:size-4",
        e
      ),
      ...p
    }
  );
}
o(j, "CommandItem");
function E({
  className: e,
  ...p
}) {
  return /* @__PURE__ */ t(
    "span",
    {
      "data-slot": "command-shortcut",
      className: a(
        "ep:text-muted-foreground ep:ml-auto ep:text-xs ep:tracking-widest",
        e
      ),
      ...p
    }
  );
}
o(E, "CommandShortcut");
export {
  x as Command,
  N as CommandDialog,
  I as CommandEmpty,
  S as CommandGroup,
  b as CommandInput,
  j as CommandItem,
  D as CommandList,
  z as CommandSeparator,
  E as CommandShortcut
};

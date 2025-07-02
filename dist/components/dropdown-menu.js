var i = Object.defineProperty;
var p = (e, o) => i(e, "name", { value: o, configurable: !0 });
import { jsx as t, jsxs as s } from "react/jsx-runtime";
import * as n from "@radix-ui/react-dropdown-menu";
import { CheckIcon as u, CircleIcon as c, ChevronRightIcon as l } from "lucide-react";
import { cn as r } from "../lib/utils.js";
function w({
  ...e
}) {
  return /* @__PURE__ */ t(n.Root, { "data-slot": "dropdown-menu", ...e });
}
p(w, "DropdownMenu");
function x({
  ...e
}) {
  return /* @__PURE__ */ t(n.Portal, { "data-slot": "dropdown-menu-portal", ...e });
}
p(x, "DropdownMenuPortal");
function b({
  ...e
}) {
  return /* @__PURE__ */ t(
    n.Trigger,
    {
      "data-slot": "dropdown-menu-trigger",
      ...e
    }
  );
}
p(b, "DropdownMenuTrigger");
function h({
  className: e,
  sideOffset: o = 4,
  ...a
}) {
  return /* @__PURE__ */ t(n.Portal, { children: /* @__PURE__ */ t(
    n.Content,
    {
      "data-slot": "dropdown-menu-content",
      sideOffset: o,
      className: r(
        "ep:bg-popover ep:text-popover-foreground ep:data-[state=open]:animate-in ep:data-[state=closed]:animate-out ep:data-[state=closed]:fade-out-0 ep:data-[state=open]:fade-in-0 ep:data-[state=closed]:zoom-out-95 ep:data-[state=open]:zoom-in-95 ep:data-[side=bottom]:slide-in-from-top-2 ep:data-[side=left]:slide-in-from-right-2 ep:data-[side=right]:slide-in-from-left-2 ep:data-[side=top]:slide-in-from-bottom-2 ep:z-50 ep:max-h-(--radix-dropdown-menu-content-available-height) ep:min-w-[8rem] ep:origin-(--radix-dropdown-menu-content-transform-origin) ep:overflow-x-hidden ep:overflow-y-auto ep:rounded-md ep:border ep:p-1 ep:shadow-md",
        e
      ),
      ...a
    }
  ) });
}
p(h, "DropdownMenuContent");
function z({
  ...e
}) {
  return /* @__PURE__ */ t(n.Group, { "data-slot": "dropdown-menu-group", ...e });
}
p(z, "DropdownMenuGroup");
function D({
  className: e,
  inset: o,
  variant: a = "default",
  ...d
}) {
  return /* @__PURE__ */ t(
    n.Item,
    {
      "data-slot": "dropdown-menu-item",
      "data-inset": o,
      "data-variant": a,
      className: r(
        "ep:focus:bg-accent ep:focus:text-accent-foreground ep:data-[variant=destructive]:text-destructive ep:data-[variant=destructive]:focus:bg-destructive/10 ep:dark:data-[variant=destructive]:focus:bg-destructive/20 ep:data-[variant=destructive]:focus:text-destructive ep:data-[variant=destructive]:*:[svg]:!text-destructive ep:[&_svg:not([class*=text-])]:text-muted-foreground ep:relative ep:flex ep:cursor-default ep:items-center ep:gap-2 ep:rounded-sm ep:px-2 ep:py-1.5 ep:text-sm ep:outline-hidden ep:select-none ep:data-[disabled]:pointer-events-none ep:data-[disabled]:opacity-50 ep:data-[inset]:pl-8 ep:[&_svg]:pointer-events-none ep:[&_svg]:shrink-0 ep:[&_svg:not([class*=size-])]:size-4",
        e
      ),
      ...d
    }
  );
}
p(D, "DropdownMenuItem");
function M({
  className: e,
  children: o,
  checked: a,
  ...d
}) {
  return /* @__PURE__ */ s(
    n.CheckboxItem,
    {
      "data-slot": "dropdown-menu-checkbox-item",
      className: r(
        "ep:focus:bg-accent ep:focus:text-accent-foreground ep:relative ep:flex ep:cursor-default ep:items-center ep:gap-2 ep:rounded-sm ep:py-1.5 ep:pr-2 ep:pl-8 ep:text-sm ep:outline-hidden ep:select-none ep:data-[disabled]:pointer-events-none ep:data-[disabled]:opacity-50 ep:[&_svg]:pointer-events-none ep:[&_svg]:shrink-0 ep:[&_svg:not([class*=size-])]:size-4",
        e
      ),
      checked: a,
      ...d,
      children: [
        /* @__PURE__ */ t("span", { className: "ep:pointer-events-none ep:absolute ep:left-2 ep:flex ep:size-3.5 ep:items-center ep:justify-center", children: /* @__PURE__ */ t(n.ItemIndicator, { children: /* @__PURE__ */ t(u, { className: "ep:size-4" }) }) }),
        o
      ]
    }
  );
}
p(M, "DropdownMenuCheckboxItem");
function N({
  ...e
}) {
  return /* @__PURE__ */ t(
    n.RadioGroup,
    {
      "data-slot": "dropdown-menu-radio-group",
      ...e
    }
  );
}
p(N, "DropdownMenuRadioGroup");
function I({
  className: e,
  children: o,
  ...a
}) {
  return /* @__PURE__ */ s(
    n.RadioItem,
    {
      "data-slot": "dropdown-menu-radio-item",
      className: r(
        "ep:focus:bg-accent ep:focus:text-accent-foreground ep:relative ep:flex ep:cursor-default ep:items-center ep:gap-2 ep:rounded-sm ep:py-1.5 ep:pr-2 ep:pl-8 ep:text-sm ep:outline-hidden ep:select-none ep:data-[disabled]:pointer-events-none ep:data-[disabled]:opacity-50 ep:[&_svg]:pointer-events-none ep:[&_svg]:shrink-0 ep:[&_svg:not([class*=size-])]:size-4",
        e
      ),
      ...a,
      children: [
        /* @__PURE__ */ t("span", { className: "ep:pointer-events-none ep:absolute ep:left-2 ep:flex ep:size-3.5 ep:items-center ep:justify-center", children: /* @__PURE__ */ t(n.ItemIndicator, { children: /* @__PURE__ */ t(c, { className: "ep:size-2 ep:fill-current" }) }) }),
        o
      ]
    }
  );
}
p(I, "DropdownMenuRadioItem");
function y({
  className: e,
  inset: o,
  ...a
}) {
  return /* @__PURE__ */ t(
    n.Label,
    {
      "data-slot": "dropdown-menu-label",
      "data-inset": o,
      className: r(
        "ep:px-2 ep:py-1.5 ep:text-sm ep:font-medium ep:data-[inset]:pl-8",
        e
      ),
      ...a
    }
  );
}
p(y, "DropdownMenuLabel");
function _({
  className: e,
  ...o
}) {
  return /* @__PURE__ */ t(
    n.Separator,
    {
      "data-slot": "dropdown-menu-separator",
      className: r("ep:bg-border ep:-mx-1 ep:my-1 ep:h-px", e),
      ...o
    }
  );
}
p(_, "DropdownMenuSeparator");
function k({
  className: e,
  ...o
}) {
  return /* @__PURE__ */ t(
    "span",
    {
      "data-slot": "dropdown-menu-shortcut",
      className: r(
        "ep:text-muted-foreground ep:ml-auto ep:text-xs ep:tracking-widest",
        e
      ),
      ...o
    }
  );
}
p(k, "DropdownMenuShortcut");
function C({
  ...e
}) {
  return /* @__PURE__ */ t(n.Sub, { "data-slot": "dropdown-menu-sub", ...e });
}
p(C, "DropdownMenuSub");
function S({
  className: e,
  inset: o,
  children: a,
  ...d
}) {
  return /* @__PURE__ */ s(
    n.SubTrigger,
    {
      "data-slot": "dropdown-menu-sub-trigger",
      "data-inset": o,
      className: r(
        "ep:focus:bg-accent ep:focus:text-accent-foreground ep:data-[state=open]:bg-accent ep:data-[state=open]:text-accent-foreground ep:flex ep:cursor-default ep:items-center ep:rounded-sm ep:px-2 ep:py-1.5 ep:text-sm ep:outline-hidden ep:select-none ep:data-[inset]:pl-8",
        e
      ),
      ...d,
      children: [
        a,
        /* @__PURE__ */ t(l, { className: "ep:ml-auto ep:size-4" })
      ]
    }
  );
}
p(S, "DropdownMenuSubTrigger");
function R({
  className: e,
  ...o
}) {
  return /* @__PURE__ */ t(
    n.SubContent,
    {
      "data-slot": "dropdown-menu-sub-content",
      className: r(
        "ep:bg-popover ep:text-popover-foreground ep:data-[state=open]:animate-in ep:data-[state=closed]:animate-out ep:data-[state=closed]:fade-out-0 ep:data-[state=open]:fade-in-0 ep:data-[state=closed]:zoom-out-95 ep:data-[state=open]:zoom-in-95 ep:data-[side=bottom]:slide-in-from-top-2 ep:data-[side=left]:slide-in-from-right-2 ep:data-[side=right]:slide-in-from-left-2 ep:data-[side=top]:slide-in-from-bottom-2 ep:z-50 ep:min-w-[8rem] ep:origin-(--radix-dropdown-menu-content-transform-origin) ep:overflow-hidden ep:rounded-md ep:border ep:p-1 ep:shadow-lg",
        e
      ),
      ...o
    }
  );
}
p(R, "DropdownMenuSubContent");
export {
  w as DropdownMenu,
  M as DropdownMenuCheckboxItem,
  h as DropdownMenuContent,
  z as DropdownMenuGroup,
  D as DropdownMenuItem,
  y as DropdownMenuLabel,
  x as DropdownMenuPortal,
  N as DropdownMenuRadioGroup,
  I as DropdownMenuRadioItem,
  _ as DropdownMenuSeparator,
  k as DropdownMenuShortcut,
  C as DropdownMenuSub,
  R as DropdownMenuSubContent,
  S as DropdownMenuSubTrigger,
  b as DropdownMenuTrigger
};

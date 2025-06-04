var d = Object.defineProperty;
var n = (e, o) => d(e, "name", { value: o, configurable: !0 });
import { jsx as r } from "react/jsx-runtime";
import * as a from "react";
import * as c from "@radix-ui/react-dialog";
import { DialogContent as p, DialogHeader as h, DialogFooter as C, DialogTitle as D, DialogDescription as f } from "../ui/dialog.js";
import { SheetContent as x, SheetHeader as W, SheetBody as S, SheetFooter as O, SheetTitle as T, SheetDescription as b } from "../ui/sheet.js";
import { cn as k } from "../../lib/utils.js";
const l = a.createContext({
  mode: "sheet"
}), B = /* @__PURE__ */ n(({ mode: e = "sheet", ref: o, ...t }) => {
  const [s, i] = a.useState(t.defaultOpen ?? !1), m = /* @__PURE__ */ n((u) => {
    var g;
    i(u), (g = t.onOpenChange) == null || g.call(t, u);
  }, "handleOpenChange");
  return a.useImperativeHandle(o, () => ({
    open: /* @__PURE__ */ n(() => i(!0), "open"),
    close: /* @__PURE__ */ n(() => i(!1), "close")
  })), /* @__PURE__ */ r(l.Provider, { value: { mode: e }, children: /* @__PURE__ */ r(
    c.Root,
    {
      ...t,
      open: s,
      onOpenChange: m
    }
  ) });
}, "DialogWrapper"), P = c.Trigger, R = /* @__PURE__ */ n(({ className: e, children: o, ...t }) => {
  const { mode: s } = a.useContext(l);
  switch (s) {
    case "sheet":
      return /* @__PURE__ */ r(
        x,
        {
          ...t,
          className: k(e, "ep:flex ep:flex-col"),
          side: "right",
          children: o
        }
      );
    case "dialog":
      return /* @__PURE__ */ r(p, { ...t, className: e, children: o });
    default:
      return null;
  }
}, "DialogWrapperContent"), j = /* @__PURE__ */ n((e) => {
  const { mode: o } = a.useContext(l);
  return /* @__PURE__ */ r(o === "sheet" ? W : h, { ...e });
}, "DialogWrapperHeader"), I = /* @__PURE__ */ n((e) => {
  const { mode: o } = a.useContext(l);
  switch (o) {
    case "dialog":
      return /* @__PURE__ */ r(a.Fragment, { ...e });
    case "sheet":
      return /* @__PURE__ */ r(S, { ...e });
    default:
      return null;
  }
}, "DialogWrapperBody"), q = /* @__PURE__ */ n((e) => {
  const { mode: o } = a.useContext(l);
  return /* @__PURE__ */ r(o === "sheet" ? O : C, { ...e });
}, "DialogWrapperFooter"), z = /* @__PURE__ */ n((e) => {
  const { mode: o } = a.useContext(l);
  let t = null;
  switch ({ ...e }, o) {
    case "sheet":
      t = T;
      break;
    case "dialog":
      t = D;
      break;
    default:
      return null;
  }
  return /* @__PURE__ */ r(t, { ...e });
}, "DialogWrapperTitle"), A = /* @__PURE__ */ n(({ ...e }) => {
  const { mode: o } = a.useContext(l);
  let t = null;
  switch ({ ...e }, o) {
    case "sheet":
      t = b;
      break;
    case "dialog":
      t = f;
      break;
    default:
      return null;
  }
  return t && /* @__PURE__ */ r(t, { ...e });
}, "DialogWrapperDescription"), E = c.Close;
export {
  B as DialogWrapper,
  I as DialogWrapperBody,
  E as DialogWrapperClose,
  R as DialogWrapperContent,
  A as DialogWrapperDescription,
  q as DialogWrapperFooter,
  j as DialogWrapperHeader,
  z as DialogWrapperTitle,
  P as DialogWrapperTrigger
};

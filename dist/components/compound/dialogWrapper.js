var d = Object.defineProperty;
var n = (e, o) => d(e, "name", { value: o, configurable: !0 });
import { jsx as r } from "react/jsx-runtime";
import * as a from "react";
import { Trigger as m, Close as p, Root as h } from "../../node_modules/.pnpm/@radix-ui_react-dialog@1.1.6_@types_react-dom@19.0.4_@types_react@19.0.10__@types_react_244bf796b280e77e0de13fdc9c7bb382/node_modules/@radix-ui/react-dialog/dist/index.js";
import { DialogContent as C, DialogHeader as D, DialogFooter as f, DialogTitle as x, DialogDescription as W } from "../ui/dialog.js";
import { SheetContent as S, SheetHeader as O, SheetBody as T, SheetFooter as b, SheetTitle as k, SheetDescription as w } from "../ui/sheet.js";
import { cn as F } from "../../lib/utils.js";
const l = a.createContext({
  mode: "sheet"
}), I = /* @__PURE__ */ n(({ mode: e = "sheet", ref: o, ...t }) => {
  const [s, i] = a.useState(t.defaultOpen ?? !1), g = /* @__PURE__ */ n((c) => {
    var u;
    i(c), (u = t.onOpenChange) == null || u.call(t, c);
  }, "handleOpenChange");
  return a.useImperativeHandle(o, () => ({
    open: /* @__PURE__ */ n(() => i(!0), "open"),
    close: /* @__PURE__ */ n(() => i(!1), "close")
  })), /* @__PURE__ */ r(l.Provider, { value: { mode: e }, children: /* @__PURE__ */ r(
    h,
    {
      ...t,
      open: s,
      onOpenChange: g
    }
  ) });
}, "DialogWrapper"), P = m, q = /* @__PURE__ */ n(({ className: e, children: o, ...t }) => {
  const { mode: s } = a.useContext(l);
  switch (s) {
    case "sheet":
      return /* @__PURE__ */ r(
        S,
        {
          ...t,
          className: F(e, "ep:flex ep:flex-col"),
          side: "right",
          children: o
        }
      );
    case "dialog":
      return /* @__PURE__ */ r(C, { ...t, className: e, children: o });
    default:
      return null;
  }
}, "DialogWrapperContent"), z = /* @__PURE__ */ n((e) => {
  const { mode: o } = a.useContext(l);
  return /* @__PURE__ */ r(o === "sheet" ? O : D, { ...e });
}, "DialogWrapperHeader"), A = /* @__PURE__ */ n((e) => {
  const { mode: o } = a.useContext(l);
  switch (o) {
    case "dialog":
      return /* @__PURE__ */ r(a.Fragment, { ...e });
    case "sheet":
      return /* @__PURE__ */ r(T, { ...e });
    default:
      return null;
  }
}, "DialogWrapperBody"), E = /* @__PURE__ */ n((e) => {
  const { mode: o } = a.useContext(l);
  return /* @__PURE__ */ r(o === "sheet" ? b : f, { ...e });
}, "DialogWrapperFooter"), G = /* @__PURE__ */ n((e) => {
  const { mode: o } = a.useContext(l);
  let t = null;
  switch ({ ...e }, o) {
    case "sheet":
      t = k;
      break;
    case "dialog":
      t = x;
      break;
    default:
      return null;
  }
  return /* @__PURE__ */ r(t, { ...e });
}, "DialogWrapperTitle"), J = /* @__PURE__ */ n(({ ...e }) => {
  const { mode: o } = a.useContext(l);
  let t = null;
  switch ({ ...e }, o) {
    case "sheet":
      t = w;
      break;
    case "dialog":
      t = W;
      break;
    default:
      return null;
  }
  return t && /* @__PURE__ */ r(t, { ...e });
}, "DialogWrapperDescription"), K = p;
export {
  I as DialogWrapper,
  A as DialogWrapperBody,
  K as DialogWrapperClose,
  q as DialogWrapperContent,
  J as DialogWrapperDescription,
  E as DialogWrapperFooter,
  z as DialogWrapperHeader,
  G as DialogWrapperTitle,
  P as DialogWrapperTrigger
};

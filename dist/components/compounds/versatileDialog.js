import { jsx as a } from "/Users/clementgrihon/Elsan/Projects/elsan-react-puulse/node_modules/react/jsx-runtime.js";
import * as r from "/Users/clementgrihon/Elsan/Projects/elsan-react-puulse/node_modules/react/index.js";
import * as c from "/Users/clementgrihon/Elsan/Projects/elsan-react-puulse/node_modules/@radix-ui/react-dialog/dist/index.mjs";
import { DialogContent as g, DialogHeader as f, DialogFooter as C, DialogTitle as D, DialogDescription as w } from "../ui/dialog.js";
import { SheetContent as x, SheetHeader as h, SheetFooter as V, SheetTitle as p, SheetDescription as S } from "../ui/sheet.js";
import { ScrollArea as R } from "../ui/scroll-area.js";
import { cn as v } from "../../lib/utils.js";
const l = r.createContext({
  mode: "drawer",
  size: "md"
}), H = r.forwardRef(({ mode: e = "drawer", size: o = "md", ...t }, n) => {
  const [s, i] = r.useState(t.defaultOpen ?? !1), u = (d) => {
    var m;
    i(d), (m = t.onOpenChange) == null || m.call(t, d);
  };
  return r.useImperativeHandle(n, () => ({
    open: () => i(!0),
    close: () => i(!1)
  })), /* @__PURE__ */ a(l.Provider, { value: { mode: e, size: o }, children: /* @__PURE__ */ a(
    c.Root,
    {
      ...t,
      open: s,
      onOpenChange: u
    }
  ) });
}), z = c.Trigger, N = r.forwardRef(({ className: e, children: o, ...t }, n) => {
  const { mode: s, size: i } = r.useContext(l);
  switch (s) {
    case "drawer":
      return /* @__PURE__ */ a(
        x,
        {
          ref: n,
          ...t,
          className: v(e, "flex flex-col"),
          side: "right",
          size: i,
          children: o
        }
      );
    case "dialog":
      return /* @__PURE__ */ a(g, { ref: n, ...t, className: e, size: i, children: o });
    default:
      return null;
  }
}), P = (e) => {
  const { mode: o } = r.useContext(l);
  return /* @__PURE__ */ a(o === "drawer" ? h : f, { ...e });
}, j = ({
  children: e,
  ...o
}) => {
  const { mode: t } = r.useContext(l);
  switch (t) {
    case "dialog":
      return /* @__PURE__ */ a(r.Fragment, { ...o, children: e });
    case "drawer":
      return /* @__PURE__ */ a(R, { className: "flex-1", children: /* @__PURE__ */ a("div", { className: "flex-1 mx-6", children: e }) });
    default:
      return null;
  }
}, y = (e) => {
  const { mode: o } = r.useContext(l);
  return /* @__PURE__ */ a(o === "drawer" ? V : C, { ...e });
}, A = r.forwardRef(({ ...e }, o) => {
  const { mode: t } = r.useContext(l);
  let n = null;
  switch ({ ...e }, t) {
    case "drawer":
      n = p;
      break;
    case "dialog":
      n = D;
      break;
    default:
      return null;
  }
  return /* @__PURE__ */ a(n, { ref: o, ...e });
}), B = r.forwardRef(({ ...e }, o) => {
  const { mode: t } = r.useContext(l);
  let n = null;
  switch ({ ...e }, t) {
    case "drawer":
      n = S;
      break;
    case "dialog":
      n = w;
      break;
    default:
      return null;
  }
  return /* @__PURE__ */ a(n, { ref: o, ...e });
}), I = c.Close;
export {
  H as VersatileDialog,
  j as VersatileDialogBody,
  I as VersatileDialogClose,
  N as VersatileDialogContent,
  B as VersatileDialogDescription,
  y as VersatileDialogFooter,
  P as VersatileDialogHeader,
  A as VersatileDialogTitle,
  z as VersatileDialogTrigger
};

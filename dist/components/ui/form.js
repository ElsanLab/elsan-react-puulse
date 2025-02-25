import { jsx as m } from "/Users/clementgrihon/Elsan/Projects/elsan-react-puulse/node_modules/react/jsx-runtime.js";
import * as s from "/Users/clementgrihon/Elsan/Projects/elsan-react-puulse/node_modules/react/index.js";
import { Slot as f } from "/Users/clementgrihon/Elsan/Projects/elsan-react-puulse/node_modules/@radix-ui/react-slot/dist/index.mjs";
import { FormProvider as u, useFormContext as F, useFormState as x, Controller as I } from "/Users/clementgrihon/Elsan/Projects/elsan-react-puulse/node_modules/react-hook-form/dist/index.esm.mjs";
import { cn as a } from "../../lib/utils.js";
import { Label as g } from "./label.js";
const S = u, c = s.createContext(
  {}
), $ = ({
  ...e
}) => /* @__PURE__ */ m(c.Provider, { value: { name: e.name }, children: /* @__PURE__ */ m(I, { ...e }) }), d = () => {
  const e = s.useContext(c), o = s.useContext(l), { getFieldState: t } = F(), r = x({ name: e.name }), n = t(e.name, r);
  if (!e)
    throw new Error("useFormField should be used within <FormField>");
  const { id: i } = o;
  return {
    id: i,
    name: e.name,
    formItemId: `${i}-form-item`,
    formDescriptionId: `${i}-form-item-description`,
    formMessageId: `${i}-form-item-message`,
    ...n
  };
}, l = s.createContext(
  {}
);
function D({ className: e, ...o }) {
  const t = s.useId();
  return /* @__PURE__ */ m(l.Provider, { value: { id: t }, children: /* @__PURE__ */ m(
    "div",
    {
      "data-slot": "form-item",
      className: a("grid gap-2", e),
      ...o
    }
  ) });
}
function M({
  className: e,
  ...o
}) {
  const { error: t, formItemId: r } = d();
  return /* @__PURE__ */ m(
    g,
    {
      "data-slot": "form-label",
      "data-error": !!t,
      className: a("data-[error=true]:text-destructive-foreground", e),
      htmlFor: r,
      ...o
    }
  );
}
function N({ ...e }) {
  const { error: o, formItemId: t, formDescriptionId: r, formMessageId: n } = d();
  return /* @__PURE__ */ m(
    f,
    {
      "data-slot": "form-control",
      id: t,
      "aria-describedby": o ? `${r} ${n}` : `${r}`,
      "aria-invalid": !!o,
      ...e
    }
  );
}
function w({ className: e, ...o }) {
  const { formDescriptionId: t } = d();
  return /* @__PURE__ */ m(
    "p",
    {
      "data-slot": "form-description",
      id: t,
      className: a("text-muted-foreground text-sm", e),
      ...o
    }
  );
}
function P({ className: e, ...o }) {
  const { error: t, formMessageId: r } = d(), n = t ? String(t == null ? void 0 : t.message) : o.children;
  return n ? /* @__PURE__ */ m(
    "p",
    {
      "data-slot": "form-message",
      id: r,
      className: a("text-destructive-foreground text-sm", e),
      ...o,
      children: n
    }
  ) : null;
}
export {
  S as Form,
  N as FormControl,
  w as FormDescription,
  $ as FormField,
  D as FormItem,
  M as FormLabel,
  P as FormMessage,
  d as useFormField
};

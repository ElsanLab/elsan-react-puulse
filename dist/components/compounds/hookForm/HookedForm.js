import { jsx as m } from "/Users/clementgrihon/Elsan/Projects/elsan-react-puulse/node_modules/react/jsx-runtime.js";
import { Form as d } from "../../ui/form.js";
import { cloneElement as p } from "/Users/clementgrihon/Elsan/Projects/elsan-react-puulse/node_modules/react/index.js";
import { useForm as c } from "/Users/clementgrihon/Elsan/Projects/elsan-react-puulse/node_modules/react-hook-form/dist/index.esm.mjs";
const b = ({
  defaultValues: t = void 0,
  resolver: e = void 0,
  onSubmit: i,
  onInvalid: n,
  children: r,
  ...f
}) => {
  const o = c({
    defaultValues: t,
    resolver: e
  });
  return /* @__PURE__ */ m(d, { ...o, children: /* @__PURE__ */ m("form", { ...f, onSubmit: o.handleSubmit(i, n), children: r && p(r, { form: o }) }) });
};
export {
  b as HookedForm
};

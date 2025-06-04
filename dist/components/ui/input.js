var t = Object.defineProperty;
var p = (e, i) => t(e, "name", { value: i, configurable: !0 });
import { jsx as n } from "react/jsx-runtime";
import { cn as o } from "../../lib/utils.js";
function s({ className: e, type: i, ...r }) {
  return /* @__PURE__ */ n(
    "input",
    {
      type: i,
      "data-slot": "input",
      className: o(
        "ep:file:text-foreground ep:placeholder:text-muted-foreground ep:selection:bg-primary ep:selection:text-primary-foreground ep:dark:bg-input/30 ep:border-input ep:flex ep:h-9 ep:w-full ep:min-w-0 ep:rounded-md ep:border ep:bg-transparent ep:px-3 ep:py-1 ep:text-base ep:shadow-xs ep:transition-[color,box-shadow] ep:outline-none ep:file:inline-flex ep:file:h-7 ep:file:border-0 ep:file:bg-transparent ep:file:text-sm ep:file:font-medium ep:disabled:pointer-events-none ep:disabled:cursor-not-allowed ep:disabled:opacity-50 ep:md:text-sm",
        "ep:focus-visible:border-ring ep:focus-visible:ring-ring/50 ep:focus-visible:ring-[3px]",
        "ep:aria-invalid:ring-destructive/20 ep:dark:aria-invalid:ring-destructive/40 ep:aria-invalid:border-destructive",
        e
      ),
      ...r
    }
  );
}
p(s, "Input");
export {
  s as Input
};

var N = Object.defineProperty;
var n = (o, r) => N(o, "name", { value: r, configurable: !0 });
import { jsx as e, jsxs as s } from "react/jsx-runtime";
import { ChevronsUpDown as C, CheckIcon as y } from "lucide-react";
import * as i from "react-phone-number-input";
import { Button as b } from "./button.js";
import { Command as x, CommandInput as g, CommandList as I, CommandEmpty as v, CommandGroup as P, CommandItem as S } from "./command.js";
import { Input as w } from "./input.js";
import { Popover as F, PopoverTrigger as R, PopoverContent as j } from "./popover.js";
import { ScrollArea as k } from "./scroll-area.js";
import { cn as d } from "../lib/utils.js";
import z from "../node_modules/.pnpm/country-flag-icons@1.5.19/node_modules/country-flag-icons/modules/react/3x2/index.js";
const A = /* @__PURE__ */ n(({
  className: o,
  internationalization: r = !1,
  defaultCountry: p = "FR",
  countryOptionsOrder: t = ["FR", "..."],
  international: l = !1,
  countries: m = void 0,
  onChange: a,
  ...f
}) => /* @__PURE__ */ e(
  i.default,
  {
    className: d("ep:flex ep:w-fit", o),
    flagComponent: c,
    countrySelectComponent: $,
    countrySelectProps: { internationalization: r },
    inputComponent: u,
    smartCaret: !1,
    countries: m,
    onChange: /* @__PURE__ */ n((h) => a == null ? void 0 : a(h || ""), "onChange"),
    defaultCountry: p,
    countryOptionsOrder: t,
    international: l,
    ...f
  }
), "PhoneNumberInput");
A.displayName = "PhoneNumberInput";
const u = /* @__PURE__ */ n(({
  className: o,
  ...r
}) => /* @__PURE__ */ e(w, { className: d("ep:rounded-s-none", o), ...r }), "InputComponent");
u.displayName = "InputComponent";
const $ = /* @__PURE__ */ n(({
  disabled: o,
  value: r,
  options: p,
  internationalization: t = !1,
  onChange: l
}) => t ? /* @__PURE__ */ s(F, { children: [
  /* @__PURE__ */ e(R, { asChild: !0, children: /* @__PURE__ */ s(
    b,
    {
      type: "button",
      variant: "secondary",
      className: "ep:rounded-e-none ep:rounded-s-sm ep:border-border ep:border ep:border-r-0",
      disabled: o,
      children: [
        /* @__PURE__ */ e(
          c,
          {
            country: r,
            countryName: r
          }
        ),
        /* @__PURE__ */ e(
          C,
          {
            className: d(
              "ep:-mx-2 ep:size-4 ep:opacity-50",
              o ? "ep:hidden" : "ep:opacity-100"
            )
          }
        )
      ]
    }
  ) }),
  /* @__PURE__ */ e(j, { className: "ep:w-[300px] ep:p-0", children: /* @__PURE__ */ s(x, { children: [
    /* @__PURE__ */ e(g, { placeholder: "Chercher..." }),
    /* @__PURE__ */ e(I, { children: /* @__PURE__ */ s(k, { className: "ep:h-72", children: [
      /* @__PURE__ */ e(v, { children: "Aucun pays trouvé" }),
      /* @__PURE__ */ e(P, { children: p.map(
        ({ value: m, label: a }) => m ? /* @__PURE__ */ e(
          B,
          {
            country: m,
            countryName: a,
            selectedCountry: r,
            onChange: l
          },
          m
        ) : null
      ) })
    ] }) })
  ] }) })
] }) : /* @__PURE__ */ e("div", { className: "ep:rounded-s-sm ep:rounded-e-none ep:border-border ep:border ep:border-r-0 ep:bg-background ep:px-3 ep:items-center ep:flex", children: /* @__PURE__ */ e(
  c,
  {
    country: r,
    countryName: r
  }
) }), "CountrySelect"), B = /* @__PURE__ */ n(({ country: o, countryName: r, selectedCountry: p, onChange: t }) => /* @__PURE__ */ s(S, { className: "ep:gap-2", onSelect: /* @__PURE__ */ n(() => t(o), "onSelect"), children: [
  /* @__PURE__ */ e(c, { country: o, countryName: r }),
  /* @__PURE__ */ e("span", { className: "ep:flex-1 ep:text-sm", children: r }),
  /* @__PURE__ */ e("span", { className: "ep:text-sm ep:text-foreground", children: `+${i.getCountryCallingCode(
    o
  )}` }),
  /* @__PURE__ */ e(
    y,
    {
      className: `ep:ml-auto ep:size-4 ${o === p ? "ep:opacity-100" : "ep:opacity-0"}`
    }
  )
] }), "CountrySelectOption"), c = /* @__PURE__ */ n(({ country: o, countryName: r }) => {
  const p = z[o];
  return /* @__PURE__ */ e("span", { className: "ep:w-6 ep:[>_svg]:h-6", children: p && /* @__PURE__ */ e(p, { title: r }) });
}, "FlagComponent");
export {
  A as PhoneNumberInput
};

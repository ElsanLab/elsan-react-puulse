var N = Object.defineProperty;
var n = (p, o) => N(p, "name", { value: o, configurable: !0 });
import { jsx as e, jsxs as s } from "react/jsx-runtime";
import { ChevronsUpDown as C, CheckIcon as y } from "lucide-react";
import * as d from "react-phone-number-input";
import { Button as g } from "../ui/button.js";
import { Command as x, CommandInput as I, CommandList as b, CommandEmpty as v, CommandGroup as P, CommandItem as S } from "../ui/command.js";
import { Input as w } from "../ui/input.js";
import { Popover as F, PopoverTrigger as R, PopoverContent as j } from "../ui/popover.js";
import { ScrollArea as k } from "../ui/scroll-area.js";
import { cn as i } from "../../lib/utils.js";
import z from "../../../node_modules/.pnpm/country-flag-icons@1.5.18/node_modules/country-flag-icons/modules/react/3x2/index.js";
const A = /* @__PURE__ */ n(({
  className: p,
  internationalization: o = !1,
  defaultCountry: r = "FR",
  countryOptionsOrder: t = ["FR", "..."],
  international: c = !1,
  countries: m = void 0,
  onChange: a,
  ...f
}) => /* @__PURE__ */ e(
  d.default,
  {
    className: i("ep:flex ep:w-fit", p),
    flagComponent: l,
    countrySelectComponent: $,
    countrySelectProps: { internationalization: o },
    inputComponent: u,
    smartCaret: !1,
    countries: m,
    onChange: /* @__PURE__ */ n((h) => a == null ? void 0 : a(h || ""), "onChange"),
    defaultCountry: r,
    countryOptionsOrder: t,
    international: c,
    ...f
  }
), "PhoneNumberInput");
A.displayName = "PhoneNumberInput";
const u = /* @__PURE__ */ n(({
  className: p,
  ...o
}) => /* @__PURE__ */ e(w, { className: i("ep:rounded-s-none", p), ...o }), "InputComponent");
u.displayName = "InputComponent";
const $ = /* @__PURE__ */ n(({
  disabled: p,
  value: o,
  options: r,
  internationalization: t = !1,
  onChange: c
}) => t ? /* @__PURE__ */ s(F, { children: [
  /* @__PURE__ */ e(R, { asChild: !0, children: /* @__PURE__ */ s(
    g,
    {
      type: "button",
      variant: "outline",
      className: "ep:rounded-e-none ep:rounded-s-lg ep:border-r-0",
      disabled: p,
      children: [
        /* @__PURE__ */ e(
          l,
          {
            country: o,
            countryName: o
          }
        ),
        /* @__PURE__ */ e(
          C,
          {
            className: i(
              "ep:-mr-2 ep:size-4 ep:opacity-50",
              p ? "ep:hidden" : "ep:opacity-100"
            )
          }
        )
      ]
    }
  ) }),
  /* @__PURE__ */ e(j, { className: "ep:w-[300px] ep:p-0", children: /* @__PURE__ */ s(x, { children: [
    /* @__PURE__ */ e(I, { placeholder: "Chercher..." }),
    /* @__PURE__ */ e(b, { children: /* @__PURE__ */ s(k, { className: "ep:h-72", children: [
      /* @__PURE__ */ e(v, { children: "Aucun pays trouvé" }),
      /* @__PURE__ */ e(P, { children: r.map(
        ({ value: m, label: a }) => m ? /* @__PURE__ */ e(
          B,
          {
            country: m,
            countryName: a,
            selectedCountry: o,
            onChange: c
          },
          m
        ) : null
      ) })
    ] }) })
  ] }) })
] }) : /* @__PURE__ */ e("div", { className: "ep:border-input ep:rounded-s-md ep:rounded-e-none ep:border-r-0 ep:rounded-md ep:border ep:bg-background ep:px-3 ep:items-center ep:flex", children: /* @__PURE__ */ e(
  l,
  {
    country: o,
    countryName: o
  }
) }), "CountrySelect"), B = /* @__PURE__ */ n(({ country: p, countryName: o, selectedCountry: r, onChange: t }) => /* @__PURE__ */ s(S, { className: "ep:gap-2", onSelect: /* @__PURE__ */ n(() => t(p), "onSelect"), children: [
  /* @__PURE__ */ e(l, { country: p, countryName: o }),
  /* @__PURE__ */ e("span", { className: "ep:flex-1 ep:text-sm", children: o }),
  /* @__PURE__ */ e("span", { className: "ep:text-sm ep:text-foreground", children: `+${d.getCountryCallingCode(
    p
  )}` }),
  /* @__PURE__ */ e(
    y,
    {
      className: `ep:ml-auto ep:size-4 ${p === r ? "ep:opacity-100" : "ep:opacity-0"}`
    }
  )
] }), "CountrySelectOption"), l = /* @__PURE__ */ n(({ country: p, countryName: o }) => {
  const r = z[p];
  return /* @__PURE__ */ e("span", { className: "ep:w-6 ep:[>_svg]:h-6", children: r && /* @__PURE__ */ e(r, { title: o }) });
}, "FlagComponent");
export {
  A as PhoneNumberInput
};

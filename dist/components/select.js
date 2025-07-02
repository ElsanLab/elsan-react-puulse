var f = Object.defineProperty;
var t = (d, p) => f(d, "name", { value: p, configurable: !0 });
import { jsx as g } from "react/jsx-runtime";
import { cn as u } from "../lib/utils.js";
import { useState as v } from "react";
import x from "react-select";
const h = /* @__PURE__ */ t(({ options: d, placeholder: p = "Sélectionner", onChange: o, ...i }) => {
  const l = i.value !== void 0, [m, s] = v(), n = /* @__PURE__ */ t((e) => {
    l || s(e), Array.isArray(e) ? o == null || o(e.map((r) => r.value)) : o == null || o((e == null ? void 0 : e.value) || null);
  }, "handleChange"), c = /* @__PURE__ */ t(() => l ? i.isMulti ? d.filter(
    (e) => {
      var r;
      return (r = i.value) == null ? void 0 : r.includes(e.value);
    }
  ) : d.find((e) => e.value === i.value) : m, "getSelectedOptions"), a = /* @__PURE__ */ t((e) => {
    const r = e.relatedTarget;
    r && (r.tagName === "A" || r.tagName === "BUTTON" || r.tagName === "TEXTAREA" || r.tagName === "INPUT") && r.focus();
  }, "onBlurWorkaround");
  return /* @__PURE__ */ g(
    x,
    {
      ...i,
      options: d,
      onChange: n,
      value: c(),
      classNames: {
        control: /* @__PURE__ */ t((e) => u(
          "ep:bg-transparent! ep:border ep:border-border! ep:rounded-sm ep:text-base! ep:md:text-sm! ep:min-h-9! ep:shadow-none!",
          {
            "ep:ring-1 ep:ring-ring": e.isFocused,
            "ep:cursor-not-allowed! ep:opacity-50!": e.isDisabled
          }
        ), "control"),
        menu: /* @__PURE__ */ t(() => "ep:bg-popover! ep:border! ep:rounded-sm! ep:py-0! ep:overflow-hidden! ep:shadow-md!", "menu"),
        menuList: /* @__PURE__ */ t(() => "ep:py-0!", "menuList"),
        option: /* @__PURE__ */ t((e) => u("ep:text-foreground! ep:text-base! ep:md:text-sm!", {
          "ep:bg-muted!": e.isFocused,
          "ep:text-foreground!": e.isFocused,
          "ep:bg-primary-light! ep:text-primary-light-foreground!": e.isSelected
        }), "option"),
        singleValue: /* @__PURE__ */ t(() => "ep:text-foreground!", "singleValue"),
        input: /* @__PURE__ */ t(() => u("ep:text-foreground!"), "input"),
        placeholder: /* @__PURE__ */ t(() => "ep:text-muted-foreground!", "placeholder"),
        multiValue: /* @__PURE__ */ t(() => "ep:bg-muted! ep:text-muted-foreground!", "multiValue"),
        multiValueRemove: /* @__PURE__ */ t(() => "ep:text-muted-foreground! ep:hover:bg-destructive-light! ep:hover:text-destructive-light-foreground!", "multiValueRemove"),
        multiValueLabel: /* @__PURE__ */ t(() => "ep:text-muted-foreground!", "multiValueLabel"),
        dropdownIndicator: /* @__PURE__ */ t(() => "ep:py-0!", "dropdownIndicator"),
        clearIndicator: /* @__PURE__ */ t(() => "ep:py-0!", "clearIndicator")
      },
      onBlur: a,
      placeholder: p
    }
  );
}, "Select");
export {
  h as Select
};

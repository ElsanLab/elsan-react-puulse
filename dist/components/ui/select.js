var m = Object.defineProperty;
var r = (u, o) => m(u, "name", { value: o, configurable: !0 });
import { jsx as g } from "react/jsx-runtime";
import { cn as l } from "../../lib/utils.js";
import c from "react-select";
const b = /* @__PURE__ */ r(({ options: u, placeholder: o = "Sélectionner", onChange: n, ...d }) => {
  const p = /* @__PURE__ */ r((e) => {
    Array.isArray(e) ? n(e.map((t) => t.value)) : n((e == null ? void 0 : e.value) || null);
  }, "handleChange"), a = /* @__PURE__ */ r(() => d.isMulti ? u.filter(
    (e) => {
      var t;
      return (t = d.value) == null ? void 0 : t.includes(e.value);
    }
  ) : u.find((e) => e.value === d.value), "getSelectedOptions"), i = /* @__PURE__ */ r((e) => {
    const t = e.relatedTarget;
    t && (t.tagName === "A" || t.tagName === "BUTTON" || t.tagName === "TEXTAREA" || t.tagName === "INPUT") && t.focus();
  }, "onBlurWorkaround");
  return /* @__PURE__ */ g(
    c,
    {
      ...d,
      options: u,
      onChange: p,
      value: a(),
      classNames: {
        control: /* @__PURE__ */ r((e) => l(
          "ep:bg-transparent! ep:border ep:border-input! ep:rounded-md ep:text-base! ep:md:text-sm! ep:min-h-9! ep:shadow-none!",
          {
            "ep:ring-1 ep:ring-ring": e.isFocused,
            "ep:cursor-not-allowed! ep:opacity-50!": e.isDisabled
          }
        ), "control"),
        menu: /* @__PURE__ */ r(() => "ep:bg-popover! ep:border! ep:rounded-md! ep:py-0! ep:overflow-hidden! ep:shadow-md!", "menu"),
        menuList: /* @__PURE__ */ r(() => "ep:py-0!", "menuList"),
        option: /* @__PURE__ */ r((e) => l("ep:text-foreground! ep:text-base! ep:md:text-sm!", {
          "ep:bg-muted!": e.isFocused,
          "ep:text-foreground!": e.isFocused,
          "ep:bg-primary-light! ep:text-primary-light-foreground!": e.isSelected
        }), "option"),
        singleValue: /* @__PURE__ */ r(() => "ep:text-foreground!", "singleValue"),
        input: /* @__PURE__ */ r(() => l("ep:text-foreground!"), "input"),
        placeholder: /* @__PURE__ */ r(() => "ep:text-muted-foreground!", "placeholder"),
        multiValue: /* @__PURE__ */ r(() => "ep:bg-muted! ep:text-muted-foreground!", "multiValue"),
        multiValueRemove: /* @__PURE__ */ r(() => "ep:text-muted-foreground! ep:hover:bg-destructive-light! ep:hover:text-destructive-light-foreground!", "multiValueRemove"),
        multiValueLabel: /* @__PURE__ */ r(() => "ep:text-muted-foreground!", "multiValueLabel"),
        dropdownIndicator: /* @__PURE__ */ r(() => "ep:py-0!", "dropdownIndicator"),
        clearIndicator: /* @__PURE__ */ r(() => "ep:py-0!", "clearIndicator")
      },
      onBlur: i,
      placeholder: o
    }
  );
}, "Select");
export {
  b as Select
};

var r = Object.defineProperty;
var t = (e, o) => r(e, "name", { value: o, configurable: !0 });
import { jsx as s } from "react/jsx-runtime";
import { useTheme as p } from "next-themes";
import { Toaster as n } from "sonner";
const d = /* @__PURE__ */ t(({ ...e }) => {
  const { theme: o = "system" } = p();
  return /* @__PURE__ */ s(
    n,
    {
      theme: o,
      className: "toaster ep:group",
      toastOptions: {
        unstyled: !0,
        classNames: {
          toast: "ep:group toast ep:shadow-lg ep:border-b-4 ep:rounded-sm ep:bg-popover ep:text-popover-foreground ep:pt-4 ep:pb-6 ep:pl-6 ep:pr-3 ep:flex ep:gap-x-4",
          title: "ep:text-xs",
          default: "",
          description: "ep:text-xs ep:text-popover-foreground!",
          loader: "",
          closeButton: "",
          cancelButton: "",
          actionButton: "",
          error: "ep:border-destructive-light-foreground toast-error",
          info: "ep:border-info-light-foreground toast-info",
          success: "ep:border-success-light-foreground toast-success",
          warning: "ep:border-warning-light-foreground toast-warning",
          loading: "",
          content: "",
          icon: "ep:group-[.toast-success]:text-success-light-foreground ep:group-[.toast-info]:text-info-light-foreground ep:group-[.toast-error]:text-destructive-light-foreground ep:group-[.toast-info]:text-info-light-foreground ep:group-[.toast-warning]:text-warning-light-foreground"
        }
        // style: {
        //   background: "var(--success-light)",
        //   color: "var(--success-light-foreground)",
        // },
        // classNames: {
        //   toast: "ep:group toast ep:group-[.toaster]:shadow-lg",
        //   description: "ep:group-[.toast]:text-muted-foreground",
        //   actionButton:
        //     "ep:group-[.toast]:bg-primary ep:group-[.toast]:text-primary-foreground",
        //   cancelButton:
        //     "ep:group-[.toast]:bg-muted ep:group-[.toast]:text-muted-foreground",
        //   success: "ep:bg-success! ep:text-success-foreground!",
        // },
      },
      ...e
    }
  );
}, "Toaster");
export {
  d as Toaster
};

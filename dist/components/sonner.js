var p = Object.defineProperty;
var n = (r, t) => p(r, "name", { value: t, configurable: !0 });
import { jsx as e } from "react/jsx-runtime";
import { faTimes as a, faSpinner as i, faExclamationTriangle as s, faInfoCircle as c, faCheckCircle as u } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon as o } from "@fortawesome/react-fontawesome";
import { useTheme as f } from "next-themes";
import { Toaster as g } from "sonner";
import { toast as y } from "sonner";
const h = /* @__PURE__ */ n(({ ...r }) => {
  const { theme: t = "system" } = f();
  return /* @__PURE__ */ e(
    g,
    {
      theme: t,
      className: "toaster ep:group",
      toastOptions: {
        unstyled: !0,
        classNames: {
          toast: "ep:group toast ep:text-secondary-foreground ep:bodyXS ep:shadow-lg ep:border-b-4 ep:rounded-sm ep:bg-popover ep:text-popover-foreground ep:pt-4 ep:pb-6 ep:pl-6 ep:pr-3 ep:flex ep:gap-x-4 ep:flex ep:items-center",
          title: "",
          default: "",
          description: "ep:text-xs ep:text-popover-foreground!",
          loader: "ep:left-5!",
          closeButton: "ep:text-sm ep:bg-background! ep:text-foreground!",
          cancelButton: "",
          actionButton: "",
          error: "ep:border-destructive-light-foreground toast-error",
          info: "ep:border-info-foreground toast-info",
          success: "ep:border-success-foreground toast-success",
          warning: "ep:border-warning-foreground toast-warning",
          loading: "",
          content: "",
          icon: "ep:text-xl ep:group-[.toast-success]:text-success-foreground ep:group-[.toast-info]:text-info-foreground ep:group-[.toast-error]:text-destructive-light-foreground ep:group-[.toast-warning]:text-warning-foreground"
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
      icons: {
        success: /* @__PURE__ */ e(o, { icon: u }),
        info: /* @__PURE__ */ e(o, { icon: c }),
        warning: /* @__PURE__ */ e(o, { icon: s }),
        error: /* @__PURE__ */ e(o, { icon: s }),
        loading: /* @__PURE__ */ e(o, { icon: i, spin: !0 }),
        close: /* @__PURE__ */ e(o, { icon: a })
      },
      ...r
    }
  );
}, "Toaster");
export {
  h as Toaster,
  y as toast
};

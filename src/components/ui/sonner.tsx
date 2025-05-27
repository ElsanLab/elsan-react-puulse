import { useTheme } from "next-themes";
import { Toaster as Sonner, ToasterProps } from "sonner";

/* CHANGES FROM DEFAULT SHADCN
 *
 * fixed prefix placement
 * Restyled completely
 *
 */

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme();

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster ep:group"
      toastOptions={{
        unstyled: true,
        classNames: {
          toast:
            "ep:group toast ep:shadow-lg ep:border-b-4 ep:rounded-sm ep:bg-popover ep:text-popover-foreground ep:pt-4 ep:pb-6 ep:pl-6 ep:pr-3 ep:flex ep:gap-x-4",
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
          icon: "ep:group-[.toast-success]:text-success-light-foreground ep:group-[.toast-info]:text-info-light-foreground ep:group-[.toast-error]:text-destructive-light-foreground ep:group-[.toast-info]:text-info-light-foreground ep:group-[.toast-warning]:text-warning-light-foreground",
        },
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
      }}
      {...props}
    />
  );
};

export { Toaster };

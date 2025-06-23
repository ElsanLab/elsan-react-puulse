import {
  faCheckCircle,
  faExclamationTriangle,
  faInfoCircle,
  faSpinner,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTheme } from "next-themes";
import { Toaster as Sonner, ToasterProps } from "sonner";

/* CHANGES FROM DEFAULT SHADCN
 *
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
            "ep:group toast ep:text-secondary-foreground ep:bodyXS ep:shadow-lg ep:border-b-4 ep:rounded-sm ep:bg-popover ep:text-popover-foreground ep:pt-4 ep:pb-6 ep:pl-6 ep:pr-3 ep:flex ep:gap-x-4 ep:flex ep:items-center",
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
          icon: "ep:text-xl ep:group-[.toast-success]:text-success-foreground ep:group-[.toast-info]:text-info-foreground ep:group-[.toast-error]:text-destructive-light-foreground ep:group-[.toast-warning]:text-warning-foreground",
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
      icons={{
        success: <FontAwesomeIcon icon={faCheckCircle} />,
        info: <FontAwesomeIcon icon={faInfoCircle} />,
        warning: <FontAwesomeIcon icon={faExclamationTriangle} />,
        error: <FontAwesomeIcon icon={faExclamationTriangle} />,
        loading: <FontAwesomeIcon icon={faSpinner} spin />,
        close: <FontAwesomeIcon icon={faTimes} />,
      }}
      {...props}
    />
  );
};

export { Toaster };
export { toast } from "sonner";

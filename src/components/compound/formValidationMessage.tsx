import { cn } from "@/lib/utils";
import { OctagonAlert } from "lucide-react";

const FormValidationMessage: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className,
  children,
  ...props
}) => {
  return (
    <div
      className={cn("flex items-center gap-x-2 text-destructive", className)}
      {...props}
    >
      <OctagonAlert className="size-4" />
      <div className="text-xs">{children}</div>
    </div>
  );
};

export { FormValidationMessage };

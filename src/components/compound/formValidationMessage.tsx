import { cn } from "@/lib/utils";
import { OctagonAlert } from "lucide-react";

const FormValidationMessage: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className,
  children,
  ...props
}) => {
  return (
    <div
      className={cn(
        "ep:flex ep:items-center ep:gap-x-2 ep:text-destructive",
        className
      )}
      {...props}
    >
      <OctagonAlert className="ep:size-4" />
      <div className="ep:text-xs">{children}</div>
    </div>
  );
};

export { FormValidationMessage };

import { cn } from "@/lib/utils";

type HelperTextProps = React.HTMLAttributes<HTMLParagraphElement>;

const HelperText: React.FC<HelperTextProps> = ({ className, ...props }) => {
  return (
    <p className={cn("text-sm text-muted-foreground", className)} {...props} />
  );
};

export { HelperText };

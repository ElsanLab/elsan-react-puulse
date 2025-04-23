import { cn } from "@/lib/utils";

const HelperText: React.FC<React.HTMLAttributes<HTMLParagraphElement>> = ({
  className,
  ...props
}) => {
  return (
    <p
      className={cn("ep:text-sm ep:text-muted-foreground", className)}
      {...props}
    />
  );
};

export { HelperText };

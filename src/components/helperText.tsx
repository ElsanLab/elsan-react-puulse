import { cn } from "@/lib/utils";

const HelperText: React.FC<React.HTMLAttributes<HTMLParagraphElement>> = ({
  className,
  ...props
}) => {
  return (
    <p
      className={cn(
        "ep:text-xs ep:text-secondary-foreground ep:leading-4",
        className
      )}
      {...props}
    />
  );
};

export { HelperText };

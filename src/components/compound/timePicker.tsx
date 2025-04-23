import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";

const TimePicker: React.FC<
  Omit<React.ComponentProps<typeof Input>, "type">
> = ({ disabled = false, className, ...props }) => {
  return (
    <Input
      {...props}
      type="time"
      disabled={disabled}
      className={cn("ep:w-fit", className)}
    />
  );
};

export { TimePicker };

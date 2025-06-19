import { cn } from "@/lib/utils";
import { Input } from "@/components/input";

const TimePicker: React.FC<
  Omit<React.ComponentProps<typeof Input>, "type">
> = ({ disabled = false, className, ...props }) => {
  return (
    <Input
      {...props}
      type="time"
      disabled={disabled}
      className={cn(
        "ep:w-fit ep:[&::-webkit-calendar-picker-indicator]:hidden ep:[&::-webkit-calendar-picker-indicator]:appearance-none",
        className
      )}
    />
  );
};

export { TimePicker };

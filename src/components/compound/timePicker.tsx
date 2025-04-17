import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";

type TimePickerProps = Omit<React.ComponentProps<typeof Input>, "type">;

const TimePicker: React.FC<TimePickerProps> = ({
  disabled = false,
  className,
  ...props
}) => {
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

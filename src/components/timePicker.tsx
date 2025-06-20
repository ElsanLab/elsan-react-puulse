import { cn } from "@/lib/utils";
import { Input } from "@/components/input";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";

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
      left={<FontAwesomeIcon icon={faClock} />}
    />
  );
};

export { TimePicker };

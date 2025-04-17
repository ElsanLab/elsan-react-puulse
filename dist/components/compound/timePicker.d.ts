import { Input } from "../ui/input";
type TimePickerProps = Omit<React.ComponentProps<typeof Input>, "type">;
declare const TimePicker: React.FC<TimePickerProps>;
export { TimePicker };

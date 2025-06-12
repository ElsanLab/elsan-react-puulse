import { cn } from "@/lib/utils";
import { ColorPickerBaseProps } from "node_modules/react-colorful/dist/types";
import { HexColorPicker } from "react-colorful";

const ColorPicker: React.FC<
  ColorPickerBaseProps<string> & {
    className?: string;
  }
> = ({ className, ...props }) => {
  return <HexColorPicker {...props} className={cn("ep:w-full", className)} />;
};

export { ColorPicker };

import { cn } from "@/lib/utils";
import { ColorPickerBaseProps } from "node_modules/react-colorful/dist/types";
import { HexColorPicker } from "react-colorful";

type ColorPickerProps = ColorPickerBaseProps<string> & {
  className?: string;
};

const ColorPicker: React.FC<ColorPickerProps> = ({ className, ...props }) => {
  return (
    <div className={cn("ep:w-full", className)}>
      <HexColorPicker {...props} />
    </div>
  );
};

export { ColorPicker };

import { cn } from "@/lib/utils";
import { ColorPickerBaseProps } from "node_modules/react-colorful/dist/types";
import { ComponentProps } from "react";
import { HexColorPicker } from "react-colorful";

const ColorPicker: React.FC<
  Omit<ColorPickerBaseProps<string>, "color"> & {
    value?: ComponentProps<typeof HexColorPicker>["color"];
    className?: string;
  }
> = ({ value, className, ...props }) => {
  return (
    <HexColorPicker
      {...props}
      color={value}
      className={cn("ep:w-full", className)}
    />
  );
};

export { ColorPicker };

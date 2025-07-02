import { ColorPickerBaseProps } from "node_modules/react-colorful/dist/types";
import { ComponentProps } from "react";
import { HexColorPicker } from "react-colorful";
declare const ColorPicker: React.FC<Omit<ColorPickerBaseProps<string>, "color"> & {
    value?: ComponentProps<typeof HexColorPicker>["color"];
    className?: string;
}>;
export { ColorPicker };

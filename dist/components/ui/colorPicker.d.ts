import { ColorPickerBaseProps } from "node_modules/react-colorful/dist/types";
type ColorPickerProps = ColorPickerBaseProps<string> & {
    className?: string;
};
declare const ColorPicker: React.FC<ColorPickerProps>;
export { ColorPicker };

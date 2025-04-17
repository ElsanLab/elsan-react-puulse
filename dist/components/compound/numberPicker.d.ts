type NumberInputProps = Omit<React.ComponentProps<"input">, "type"> & {
    min?: number;
    max?: number;
    step?: number;
};
declare const NumberPicker: React.FC<NumberInputProps>;
export { NumberPicker };

declare const NumberPicker: React.FC<Omit<React.ComponentProps<"input">, "type"> & {
    min?: number;
    max?: number;
    step?: number;
}>;
export { NumberPicker };

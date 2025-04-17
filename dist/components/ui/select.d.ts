type Option = {
    label: string;
    value: string;
};
type SelectProps = {
    options: Option[];
    placeholder?: string;
    onChange: (value: string | string[] | null) => void;
    isMulti?: boolean;
    value?: string | string[] | null;
    isClearable?: boolean;
    isDisabled?: boolean;
    isSearchable?: boolean;
};
declare const Select: React.FC<SelectProps>;
export { Select };

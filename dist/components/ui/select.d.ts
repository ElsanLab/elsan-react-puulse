export type SelectOption = {
    label: string;
    value: string;
};
declare const Select: React.FC<{
    options: SelectOption[];
    placeholder?: string;
    onChange: (value: string | string[] | null) => void;
    isMulti?: boolean;
    value?: string | string[] | null;
    isClearable?: boolean;
    isDisabled?: boolean;
    isSearchable?: boolean;
}>;
export { Select };

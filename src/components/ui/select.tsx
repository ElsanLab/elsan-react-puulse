import { cn } from "@/lib/utils";
import SelectPrimitive, {
  ActionMeta,
  MultiValue,
  SingleValue,
} from "react-select";

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

const Select: React.FC<SelectProps> = ({
  options,
  placeholder = "Sélectionner",
  onChange,
  ...props
}) => {
  const handleChange: (
    newValue: MultiValue<Option> | SingleValue<Option>,
    actionMeta: ActionMeta<Option>
  ) => void = (options) => {
    if (Array.isArray(options)) {
      onChange(options.map((option) => option.value));
    } else {
      onChange((options as Option | undefined)?.value || null);
    }
  };

  const getSelectedOptions = () => {
    if (props.isMulti) {
      return options.filter((option) =>
        (props.value as string[])?.includes(option.value)
      );
    }

    return options.find((option) => option.value === props.value);
  };

  const onBlurWorkaround: React.FocusEventHandler<HTMLInputElement> = (
    event
  ) => {
    const element = event.relatedTarget;
    if (
      element &&
      (element.tagName === "A" ||
        element.tagName === "BUTTON" ||
        element.tagName === "TEXTAREA" ||
        element.tagName === "INPUT")
    ) {
      (element as HTMLElement).focus();
    }
  };

  return (
    <SelectPrimitive
      {...props}
      options={options}
      onChange={handleChange}
      value={getSelectedOptions()}
      classNames={{
        control: (state) =>
          cn(
            "bg-transparent! border border-input! rounded-md text-base! md:text-sm! min-h-9! shadow-none!",
            {
              "ring-1 ring-ring": state.isFocused,
              "cursor-not-allowed! opacity-50!": state.isDisabled,
            }
          ),
        menu: () =>
          "bg-popover! border! rounded-md! py-0! overflow-hidden! shadow-md!",
        menuList: () => "py-0!",
        option: (state) =>
          cn("text-foreground! text-base! md:text-sm!", {
            "bg-muted!": state.isFocused,
            "text-foreground!": state.isFocused,
            "bg-primary-light! text-primary-light-foreground!":
              state.isSelected,
          }),
        singleValue: () => "text-foreground!",
        input: () => cn("text-foreground!"),
        placeholder: () => "text-muted-foreground!",
        multiValue: () => "bg-muted! text-muted-foreground!",
        multiValueRemove: () =>
          "text-muted-foreground! hover:bg-destructive-light! hover:text-destructive-light-foreground!",
        multiValueLabel: () => "text-muted-foreground!",
        dropdownIndicator: () => "py-0!",
        clearIndicator: () => "py-0!",
      }}
      onBlur={onBlurWorkaround}
      placeholder={placeholder}
    />
  );
};

export { Select };

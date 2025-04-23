import { cn } from "@/lib/utils";
import SelectPrimitive, {
  ActionMeta,
  MultiValue,
  SingleValue,
} from "react-select";

export type SelectOption = {
  label: string;
  value: string;
};

/** CHANGES FROM DEFAULT SHADCN
 *
 * Everything, this is not a shadcn component
 *
 */

const Select: React.FC<{
  options: SelectOption[];
  placeholder?: string;
  onChange: (value: string | string[] | null) => void;
  isMulti?: boolean;
  value?: string | string[] | null;
  isClearable?: boolean;
  isDisabled?: boolean;
  isSearchable?: boolean;
}> = ({ options, placeholder = "Sélectionner", onChange, ...props }) => {
  const handleChange: (
    newValue: MultiValue<SelectOption> | SingleValue<SelectOption>,
    actionMeta: ActionMeta<SelectOption>
  ) => void = (options) => {
    if (Array.isArray(options)) {
      onChange(options.map((option) => option.value));
    } else {
      onChange((options as SelectOption | undefined)?.value || null);
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
            "ep:bg-transparent! ep:border ep:border-input! ep:rounded-md ep:text-base! ep:md:text-sm! ep:min-h-9! ep:shadow-none!",
            {
              "ep:ring-1 ep:ring-ring": state.isFocused,
              "ep:cursor-not-allowed! ep:opacity-50!": state.isDisabled,
            }
          ),
        menu: () =>
          "ep:bg-popover! ep:border! ep:rounded-md! ep:py-0! ep:overflow-hidden! ep:shadow-md!",
        menuList: () => "ep:py-0!",
        option: (state) =>
          cn("ep:text-foreground! ep:text-base! ep:md:text-sm!", {
            "ep:bg-muted!": state.isFocused,
            "ep:text-foreground!": state.isFocused,
            "ep:bg-primary-light! ep:text-primary-light-foreground!":
              state.isSelected,
          }),
        singleValue: () => "ep:text-foreground!",
        input: () => cn("ep:text-foreground!"),
        placeholder: () => "ep:text-muted-foreground!",
        multiValue: () => "ep:bg-muted! ep:text-muted-foreground!",
        multiValueRemove: () =>
          "ep:text-muted-foreground! ep:hover:bg-destructive-light! ep:hover:text-destructive-light-foreground!",
        multiValueLabel: () => "ep:text-muted-foreground!",
        dropdownIndicator: () => "ep:py-0!",
        clearIndicator: () => "ep:py-0!",
      }}
      onBlur={onBlurWorkaround}
      placeholder={placeholder}
    />
  );
};

export { Select };

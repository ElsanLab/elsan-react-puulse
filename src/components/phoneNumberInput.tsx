import * as React from "react";
import { CheckIcon, ChevronsUpDown } from "lucide-react";
import * as RPNInput from "react-phone-number-input";
import flags from "react-phone-number-input/flags";

import { Button } from "@/components/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/command";
import { Input } from "@/components/input";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/popover";
import { ScrollArea } from "@/components/scroll-area";
import { cn } from "@/lib/utils";

const PhoneNumberInput: React.FC<
  Omit<React.ComponentProps<"input">, "onChange" | "value" | "ref" | "type"> &
    Omit<RPNInput.Props<typeof RPNInput.default>, "onChange"> & {
      onChange?: (value: RPNInput.Value) => void;
      internationalization?: boolean;
    }
> = ({
  className,
  internationalization = false,
  defaultCountry = "FR",
  countryOptionsOrder = ["FR", "..."],
  international = false,
  countries = undefined,
  onChange,
  ...props
}) => (
  <RPNInput.default
    className={cn("ep:flex ep:w-fit", className)}
    flagComponent={FlagComponent}
    countrySelectComponent={CountrySelect}
    countrySelectProps={{ internationalization }}
    inputComponent={InputComponent}
    smartCaret={false}
    countries={countries}
    /**
     * Handles the onChange event.
     *
     * react-phone-number-input might trigger the onChange event as undefined
     * when a valid phone number is not entered. To prevent this,
     * the value is coerced to an empty string.
     *
     * @param {E164Number | undefined} value - The entered value
     */
    onChange={(value) => onChange?.(value || ("" as RPNInput.Value))}
    defaultCountry={defaultCountry}
    countryOptionsOrder={countryOptionsOrder}
    international={international}
    {...props}
  />
);
PhoneNumberInput.displayName = "PhoneNumberInput";

const InputComponent: React.FC<React.ComponentProps<typeof Input>> = ({
  className,
  ...props
}) => <Input className={cn("ep:rounded-s-none", className)} {...props} />;
InputComponent.displayName = "InputComponent";

type CountryEntry = { label: string; value: RPNInput.Country | undefined };

type CountrySelectProps = {
  disabled?: boolean;
  value: RPNInput.Country;
  options: CountryEntry[];
  onChange: (country: RPNInput.Country) => void;
  internationalization?: boolean;
};

const CountrySelect: React.FC<CountrySelectProps> = ({
  disabled,
  value: selectedCountry,
  options: countryList,
  internationalization = false,
  onChange,
}) => {
  if (!internationalization) {
    return (
      <div className="ep:rounded-s-sm ep:rounded-e-none ep:border-border ep:border ep:border-r-0 ep:bg-background ep:px-3 ep:items-center ep:flex">
        <FlagComponent
          country={selectedCountry}
          countryName={selectedCountry}
        />
      </div>
    );
  }

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          type="button"
          variant="secondary"
          className="ep:rounded-e-none ep:rounded-s-sm ep:border-border ep:border ep:border-r-0"
          disabled={disabled}
        >
          <FlagComponent
            country={selectedCountry}
            countryName={selectedCountry}
          />
          <ChevronsUpDown
            className={cn(
              "ep:-mx-2 ep:size-4 ep:opacity-50",
              disabled ? "ep:hidden" : "ep:opacity-100"
            )}
          />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="ep:w-[300px] ep:p-0">
        <Command>
          <CommandInput placeholder="Chercher..." />
          <CommandList>
            <ScrollArea className="ep:h-72">
              <CommandEmpty>Aucun pays trouvé</CommandEmpty>
              <CommandGroup>
                {countryList.map(({ value, label }) =>
                  value ? (
                    <CountrySelectOption
                      key={value}
                      country={value}
                      countryName={label}
                      selectedCountry={selectedCountry}
                      onChange={onChange}
                    />
                  ) : null
                )}
              </CommandGroup>
            </ScrollArea>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
};

const CountrySelectOption: React.FC<
  RPNInput.FlagProps & {
    selectedCountry: RPNInput.Country;
    onChange: (country: RPNInput.Country) => void;
  }
> = ({ country, countryName, selectedCountry, onChange }) => {
  return (
    <CommandItem className="ep:gap-2" onSelect={() => onChange(country)}>
      <FlagComponent country={country} countryName={countryName} />
      <span className="ep:flex-1 ep:text-sm">{countryName}</span>
      <span className="ep:text-sm ep:text-foreground">{`+${RPNInput.getCountryCallingCode(
        country
      )}`}</span>
      <CheckIcon
        className={`ep:ml-auto ep:size-4 ${
          country === selectedCountry ? "ep:opacity-100" : "ep:opacity-0"
        }`}
      />
    </CommandItem>
  );
};

const FlagComponent = ({ country, countryName }: RPNInput.FlagProps) => {
  const Flag = flags[country];

  return (
    <span className="ep:w-6 ep:[>_svg]:h-6">
      {Flag && <Flag title={countryName} />}
    </span>
  );
};

export { PhoneNumberInput };

import * as React from "react";
import { CheckIcon, ChevronsUpDown } from "lucide-react";
import * as RPNInput from "react-phone-number-input";
import flags from "react-phone-number-input/flags";

import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";

type PhoneNumberInputProps = Omit<
  React.ComponentProps<"input">,
  "onChange" | "value" | "ref" | "type"
> &
  Omit<RPNInput.Props<typeof RPNInput.default>, "onChange"> & {
    onChange?: (value: RPNInput.Value) => void;
    internationalization?: boolean;
  };

const PhoneNumberInput: React.FC<PhoneNumberInputProps> = ({
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
    className={cn("flex w-fit", className)}
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
}) => <Input className={cn("rounded-s-none", className)} {...props} />;
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
      <div className="border-input rounded-s-md rounded-e-none border-r-0 rounded-md border bg-background px-3 items-center flex">
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
          variant="outline"
          className="rounded-e-none rounded-s-lg border-r-0"
          disabled={disabled}
        >
          <FlagComponent
            country={selectedCountry}
            countryName={selectedCountry}
          />
          <ChevronsUpDown
            className={cn(
              "-mr-2 size-4 opacity-50",
              disabled ? "hidden" : "opacity-100"
            )}
          />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[300px] p-0">
        <Command>
          <CommandInput placeholder="Chercher..." />
          <CommandList>
            <ScrollArea className="h-72">
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

interface CountrySelectOptionProps extends RPNInput.FlagProps {
  selectedCountry: RPNInput.Country;
  onChange: (country: RPNInput.Country) => void;
}

const CountrySelectOption: React.FC<CountrySelectOptionProps> = ({
  country,
  countryName,
  selectedCountry,
  onChange,
}) => {
  return (
    <CommandItem className="gap-2" onSelect={() => onChange(country)}>
      <FlagComponent country={country} countryName={countryName} />
      <span className="flex-1 text-sm">{countryName}</span>
      <span className="text-sm text-foreground">{`+${RPNInput.getCountryCallingCode(
        country
      )}`}</span>
      <CheckIcon
        className={`ml-auto size-4 ${
          country === selectedCountry ? "opacity-100" : "opacity-0"
        }`}
      />
    </CommandItem>
  );
};

const FlagComponent = ({ country, countryName }: RPNInput.FlagProps) => {
  const Flag = flags[country];

  return (
    <span className="w-6 [>_svg]:h-6">
      {Flag && <Flag title={countryName} />}
    </span>
  );
};

export { PhoneNumberInput };

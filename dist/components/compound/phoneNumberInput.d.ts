import * as React from "react";
import * as RPNInput from "react-phone-number-input";
type PhoneNumberInputProps = Omit<React.ComponentProps<"input">, "onChange" | "value" | "ref" | "type"> & Omit<RPNInput.Props<typeof RPNInput.default>, "onChange"> & {
    onChange?: (value: RPNInput.Value) => void;
    internationalization?: boolean;
};
declare const PhoneNumberInput: React.FC<PhoneNumberInputProps>;
export { PhoneNumberInput };

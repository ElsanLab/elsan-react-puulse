import * as React from "react";
import * as RPNInput from "react-phone-number-input";
declare const PhoneNumberInput: React.FC<Omit<React.ComponentProps<"input">, "onChange" | "value" | "ref" | "type"> & Omit<RPNInput.Props<typeof RPNInput.default>, "onChange"> & {
    onChange?: (value: RPNInput.Value) => void;
    internationalization?: boolean;
}>;
export { PhoneNumberInput };

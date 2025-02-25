import { FieldValues, Resolver, SubmitErrorHandler, SubmitHandler } from "react-hook-form";
type HookedFormProps = {
    onSubmit: SubmitHandler<FieldValues>;
    onInvalid?: SubmitErrorHandler<FieldValues> | undefined;
    defaultValues?: FieldValues;
    resolver?: Resolver;
    children?: React.ReactElement;
};
declare const HookedForm: React.FC<HookedFormProps>;
export { HookedForm };
//# sourceMappingURL=HookedForm.d.ts.map
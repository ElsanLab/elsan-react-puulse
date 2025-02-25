import { Form } from "../../ui/form";
import { cloneElement } from "react";
import {
  FieldValues,
  Resolver,
  SubmitErrorHandler,
  SubmitHandler,
  useForm,
} from "react-hook-form";

type HookedFormProps = {
  onSubmit: SubmitHandler<FieldValues>;
  onInvalid?: SubmitErrorHandler<FieldValues> | undefined;
  defaultValues?: FieldValues;
  resolver?: Resolver;
  children?: React.ReactElement;
};

const HookedForm: React.FC<HookedFormProps> = ({
  defaultValues = undefined,
  resolver = undefined,
  onSubmit,
  onInvalid,
  children,
  ...props
}) => {
  const form = useForm({
    defaultValues,
    resolver,
  });

  return (
    <Form {...form}>
      <form {...props} onSubmit={form.handleSubmit(onSubmit, onInvalid)}>
        {children && cloneElement(children, { form } as never)}
      </form>
    </Form>
  );
};

export { HookedForm };

import type { Meta, StoryObj } from "@storybook/react";

import { PhoneNumberInput } from "@/components/compound/phoneNumberInput";

interface StoryArgs {
  required: boolean;
}

const meta = {
  title: "Forms/PhoneNumberInput",
  component: PhoneNumberInput,
} satisfies Meta<typeof PhoneNumberInput>;

export default meta;

type Story = StoryObj<StoryArgs>;

export const Default: Story = {
  args: {
    required: false,
  },
  render: function Render(args) {
    return (
      <div className="space-y-2">
        <PhoneNumberInput required={args.required} defaultCountry="FR" />
      </div>
    );
  },
};

export const Internationalization: Story = {
  args: {
    required: false,
  },
  render: function Render(args) {
    return (
      <div className="space-y-2">
        <PhoneNumberInput
          required={args.required}
          defaultCountry="FR"
          internationalization
        />
      </div>
    );
  },
};

export const LimitedContriesList: Story = {
  args: {
    required: false,
  },
  render: function Render(args) {
    return (
      <div className="space-y-2">
        <PhoneNumberInput
          required={args.required}
          defaultCountry="FR"
          internationalization
          countries={["FR", "BE", "MA"]}
        />
      </div>
    );
  },
};

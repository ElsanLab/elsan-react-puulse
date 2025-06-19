import type { Meta, StoryObj } from "@storybook/react-vite";

import { PhoneNumberInput } from "@/components/phoneNumberInput";

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
      <div className="ep:space-y-2">
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
      <div className="ep:space-y-2">
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
      <div className="ep:space-y-2">
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

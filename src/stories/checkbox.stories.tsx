import type { Meta, StoryObj } from "@storybook/react-vite";

import { Checkbox } from "@/components/checkbox";

interface StoryArgs {
  label: string;
  disabled: boolean;
  invalid: boolean;
}

const meta = {
  title: "Forms/Checkbox",
  component: Checkbox,
} satisfies Meta<typeof Checkbox>;

export default meta;

type Story = StoryObj<StoryArgs>;

export const Default: Story = {
  args: {
    label: "Accept terms and conditions",
    disabled: false,
    invalid: false,
  },
  render: function Render(args) {
    return (
      <div className="ep:flex ep:items-center ep:space-x-2">
        <Checkbox
          id="terms"
          disabled={args.disabled}
          aria-invalid={args.invalid}
        />
        <label
          htmlFor="terms"
          className="ep:text-sm ep:font-medium ep:leading-none ep:peer-disabled:cursor-not-allowed ep:peer-disabled:opacity-70"
        >
          {args.label}
        </label>
      </div>
    );
  },
};

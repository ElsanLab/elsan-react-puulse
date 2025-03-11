import type { Meta, StoryObj } from "@storybook/react";

import { Checkbox } from "@/components/ui/checkbox";

interface StoryArgs {
  label: string;
  disabled: boolean;
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
  },
  render: function Render(args) {
    return (
      <div className="flex items-center space-x-2">
        <Checkbox id="terms" disabled={args.disabled} />
        <label
          htmlFor="terms"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          {args.label}
        </label>
      </div>
    );
  },
};

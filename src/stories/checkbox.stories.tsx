import type { Meta, StoryObj } from "@storybook/react";

import { User } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";

interface StoryArgs {
  label: string;
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
  },
  render: function Render(args) {
    return (
      <div className="flex items-center space-x-2">
        <Checkbox id="terms" />
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

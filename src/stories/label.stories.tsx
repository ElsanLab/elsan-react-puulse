import type { Meta, StoryObj } from "@storybook/react";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useId } from "react";

interface StoryArgs {
  text: string;
  required: boolean;
}

const meta = {
  title: "Forms/Label",
  component: Label,
} satisfies Meta<typeof Label>;

export default meta;

type Story = StoryObj<StoryArgs>;

export const Default: Story = {
  args: {
    text: "First name",
    required: false,
  },
  render: function Render(args) {
    return (
      <div className="space-y-2">
        <Label required={args.required}>{args.text}</Label>
      </div>
    );
  },
};

export const WithInput: Story = {
  args: {
    text: "First name",
    required: false,
  },
  render: function Render(args) {
    const id = useId();
    return (
      <div className="space-y-2">
        <Label htmlFor={id} required={args.required}>
          {args.text}
        </Label>
        <Input id={id} name={id} type="text" placeholder={args.text} />
      </div>
    );
  },
};

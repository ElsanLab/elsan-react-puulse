import type { Meta, StoryObj } from "@storybook/react-vite";

import { FormValidationMessage } from "@/components/compound/formValidationMessage";
import { Input } from "@/components/ui/input";
import { useId } from "react";
import { Label } from "@/components/ui/label";

interface StoryArgs {
  text: string;
}

const meta = {
  title: "Forms/FormValidationMessage",
  component: FormValidationMessage,
} satisfies Meta<typeof FormValidationMessage>;

export default meta;

type Story = StoryObj<StoryArgs>;

export const Default: Story = {
  args: {
    text: "This field is required, please fill it out.",
  },
  render: function Render(args) {
    return (
      <div className="ep:space-y-2">
        <FormValidationMessage>{args.text}</FormValidationMessage>
      </div>
    );
  },
};

export const WithInput: Story = {
  args: {
    text: "Please enter your first name.",
  },
  render: function Render(args) {
    const id = useId();
    return (
      <div className="ep:space-y-2">
        <Label htmlFor={id} required>
          First name
        </Label>
        <Input
          id={id}
          name={id}
          type="text"
          placeholder="First name"
          aria-invalid
        />
        <FormValidationMessage>{args.text}</FormValidationMessage>
      </div>
    );
  },
};

import type { Meta, StoryObj } from "@storybook/react-vite";

import { HelperText } from "@/components/helperText";
import { Label } from "@/components/label";
import { Input } from "@/components/input";

type StoryArgs = {
  text: string;
};

const meta = {
  title: "Forms/HelperText",
  component: HelperText,
} satisfies Meta<typeof HelperText>;

export default meta;

type Story = StoryObj<StoryArgs>;

export const Default: Story = {
  argTypes: {
    text: {
      control: {
        type: "text",
      },
    },
  },
  args: {
    text: "I am an input description.",
  },
  render: (args) => <HelperText>{args.text}</HelperText>,
};

export const WithInput: Story = {
  argTypes: {
    text: {
      control: {
        type: "text",
      },
    },
  },
  args: {
    text: "Please enter your email address.",
  },
  render: (args) => (
    <div className="ep:space-y-2">
      <Label htmlFor="email" className="ep:mb-2">
        Email address
      </Label>
      <HelperText>{args.text}</HelperText>
      <Input type="email" id="email" name="email" placeholder="email address" />
    </div>
  ),
};

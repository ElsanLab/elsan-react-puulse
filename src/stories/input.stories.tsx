import type { Meta, StoryObj } from "@storybook/react-vite";

import { Input } from "@/components/ui/input";

interface StoryArgs {
  placeholder: string;
  disabled: boolean;
}

const meta = {
  title: "Forms/Input",
  component: Input,
  argTypes: {
    placeholder: {
      control: {
        type: "text",
      },
      description: "Placeholder text for the input field.",
    },
    disabled: {
      control: {
        type: "boolean",
      },
      description: "Disables the input field.",
      table: {
        defaultValue: {
          summary: "false",
        },
      },
    },
  },
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<StoryArgs>;

export const Default: Story = {
  args: {
    placeholder: "Email",
    disabled: false,
  },
  render: function Render(args) {
    return <Input {...args} />;
  },
};

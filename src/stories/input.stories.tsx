import type { Meta, StoryObj } from "@storybook/react-vite";

import { Input } from "@/components/input";
import { Mail } from "lucide-react";

interface StoryArgs {
  placeholder: string;
  disabled: boolean;
  withIcon: boolean;
  invalid: boolean;
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
    withIcon: {
      control: {
        type: "boolean",
      },
      description: "Whether to display an icon inside the input field.",
      table: {
        defaultValue: {
          summary: "false",
        },
      },
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
    invalid: {
      control: {
        type: "boolean",
      },
      description: "Set input fiel as invalid.",
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
    invalid: false,
  },
  render: function Render(args) {
    return (
      <Input
        {...args}
        icon={args.withIcon ? <Mail /> : undefined}
        aria-invalid={args.invalid}
      />
    );
  },
};

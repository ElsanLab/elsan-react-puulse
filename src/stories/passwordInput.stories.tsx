import type { Meta, StoryObj } from "@storybook/react-vite";

import { PasswordInput } from "@/components/passwordInput";

interface StoryArgs {
  placeholder: string;
  disabled: boolean;
  invalid: boolean;
}

const meta = {
  title: "Forms/PasswordInput",
  component: PasswordInput,
  argTypes: {
    placeholder: {
      control: {
        type: "text",
      },
      description: "Placeholder text for the passwordInput field.",
    },
    disabled: {
      control: {
        type: "boolean",
      },
      description: "Disables the passwordInput field.",
      table: {
        defaultValue: {
          summary: "false",
        },
      },
    },
  },
} satisfies Meta<typeof PasswordInput>;

export default meta;

type Story = StoryObj<StoryArgs>;

export const Default: Story = {
  args: {
    placeholder: "Password",
    disabled: false,
    invalid: false,
  },
  render: function Render(args) {
    return <PasswordInput {...args} aria-invalid={args.invalid} />;
  },
};

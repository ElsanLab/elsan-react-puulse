import type { Meta, StoryObj } from "@storybook/react";

import { TimePicker } from "@/components/compound/timePicker";

interface StoryArgs {
  disabled: boolean;
}

const meta = {
  title: "Forms/TimePicker",
  component: TimePicker,
  argTypes: {
    disabled: {
      control: {
        type: "boolean",
      },
      table: {
        defaultValue: { summary: "false" },
      },
    },
    value: {
      table: {
        disable: true,
      },
    },
    onChange: {
      table: {
        disable: true,
      },
    },
  },
} satisfies Meta<typeof TimePicker>;

export default meta;

type Story = StoryObj<StoryArgs>;

export const Default: Story = {
  args: {
    disabled: false,
  },
  render: function Render(args) {
    return <TimePicker id="terms" disabled={args.disabled} />;
  },
};

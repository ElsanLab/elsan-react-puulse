import type { Meta, StoryObj } from "@storybook/react";

import { NumberPicker } from "@/components/compound/numberPicker";

interface StoryArgs {
  placeholder: string;
  disabled: boolean;
  min: number;
  max: number;
  step: number;
}

const meta = {
  title: "Forms/NumberPicker",
  component: NumberPicker,
  argTypes: {
    min: {
      control: {
        type: "number",
      },
      description: "The minimum accepted value.",
    },
    max: {
      control: {
        type: "number",
      },
      description: "The maximum accepted value.",
    },
    step: {
      control: {
        type: "number",
      },
      description: "The number to increment or decrement by.",
      table: {
        defaultValue: {
          summary: "1",
        },
      },
    },
    placeholder: {
      control: {
        type: "text",
      },
      description: "Placeholder text for the numberPicker field.",
    },
    disabled: {
      control: {
        type: "boolean",
      },
      description: "Disables the numberPicker field.",
      table: {
        defaultValue: {
          summary: "false",
        },
      },
    },
    className: {
      table: {
        disable: true,
      },
    },
  },
} satisfies Meta<typeof NumberPicker>;

export default meta;

type Story = StoryObj<StoryArgs>;

export const Default: Story = {
  args: {
    placeholder: "Number",
    disabled: false,
  },
  render: function Render(args) {
    return <NumberPicker {...args} />;
  },
};

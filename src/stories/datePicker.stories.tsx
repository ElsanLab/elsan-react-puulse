import type { Meta, StoryObj } from "@storybook/react";

import { DatePicker } from "@/components/compound/datePicker";

interface StoryArgs {
  placeholder: string;
  dateFormat: string;
  min: Date | undefined;
  max: Date | undefined;
}

const meta = {
  title: "Forms/DatePicker",
  component: DatePicker,
  argTypes: {
    placeholder: {
      control: { type: "text" },
      description: "Placeholder text",
    },
    dateFormat: {
      control: { type: "select" },
      options: ["dd/MM/yyyy", "MM/dd/yyyy", "yyyy-MM-dd"],
      description: "Date format in the 'trigger' component",
      defaultValue: "dd/MM/yyyy",
    },
    children: {
      table: {
        disable: true,
      },
    },

    selected: {
      table: {
        disable: true,
      },
    },

    onSelect: {
      table: {
        disable: true,
      },
    },

    min: {
      control: { type: "date" },
      description: "Minimum selectable date",
      table: {
        type: { summary: "Date" },
      },
    },

    max: {
      control: { type: "date" },
      description: "Maximum selectable date",
      table: {
        type: { summary: "Date" },
      },
    },
  },
} satisfies Meta<typeof DatePicker>;

export default meta;

type Story = StoryObj<StoryArgs>;

export const Default: Story = {
  args: {
    placeholder: "Choisir",
    dateFormat: "dd/MM/yyyy",
    min: undefined,
    max: undefined,
  },
  render: (args) => {
    return (
      <DatePicker
        placeholder={args.placeholder}
        dateFormat={args.dateFormat}
        min={args.min}
        max={args.max}
      />
    );
  },
};

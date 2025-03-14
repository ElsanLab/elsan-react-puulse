import type { Meta, StoryObj } from "@storybook/react";

import { DatePicker } from "@/components/compound/datePicker";
import { fr, enUS } from "date-fns/locale";

interface StoryArgs {
  placeholder: string;
  dateFormat: string;
  min: Date | undefined;
  max: Date | undefined;
  locale: string;
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
    locale: {
      control: { type: "select" },
      options: ["enUS", "fr"],
      description:
        "Select the calendar's language. The default is English (enUS). It uses date-fns locales.",
      table: {
        defaultValue: {
          summary: "fr",
        },
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
    locale: "fr",
  },
  render: (args) => {
    return (
      <DatePicker
        placeholder={args.placeholder}
        dateFormat={args.dateFormat}
        min={args.min}
        max={args.max}
        locale={args.locale === "fr" ? fr : enUS}
      />
    );
  },
};

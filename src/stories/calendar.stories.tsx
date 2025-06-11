/* eslint-disable react-hooks/rules-of-hooks */
import type { Meta, StoryObj } from "@storybook/react-vite";

import { Calendar } from "@/components/ui/calendar";
import { useState } from "react";

import { fr, enUS } from "date-fns/locale";

interface StoryArgs {
  showOutsideDays: boolean;
  fixedWeeks: boolean;
  locale: string;
}

const meta = {
  title: "Components/Calendar",
  component: Calendar,
  argTypes: {
    showOutsideDays: {
      control: { type: "boolean" },
      description: "Show days outside the current month",
    },
    fixedWeeks: {
      control: { type: "boolean" },
      description:
        "In a year, months can have between 4 and 6 weeks. This will always show 6 weeks.",
      table: {
        defaultValue: {
          summary: "false",
        },
      },
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
  },
} satisfies Meta<typeof Calendar>;

export default meta;

type Story = StoryObj<StoryArgs>;

export const Default: Story = {
  args: {
    showOutsideDays: true,
    fixedWeeks: false,
    locale: "fr",
  },
  render: (args) => {
    const [date, setDate] = useState<Date | undefined>(new Date());

    const locale = args.locale === "fr" ? fr : enUS;

    return (
      <Calendar
        mode="single"
        locale={locale}
        showOutsideDays={args.showOutsideDays}
        fixedWeeks={args.fixedWeeks}
        selected={date}
        onSelect={setDate}
      />
    );
  },
};

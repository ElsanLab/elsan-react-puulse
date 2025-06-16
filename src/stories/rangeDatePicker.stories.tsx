import type { Meta, StoryObj } from "@storybook/react-vite";

import { fr, enUS } from "date-fns/locale";
import { useId, useState } from "react";
import {
  RangeDatePicker,
  RangeDatePickerValue,
} from "@/components/compound/rangeDatePicker";

interface StoryArgs {
  fromPlaceholder: string;
  toPlaceholder: string;
  dateFormat: string;
  min: Date | undefined;
  max: Date | undefined;
  locale: string;
}

const meta = {
  title: "Forms/DatePickers/RangeDatePicker",
  component: RangeDatePicker,
  argTypes: {
    fromPlaceholder: {
      control: { type: "text" },
      description: "Placeholder text",
    },
    toPlaceholder: {
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
} satisfies Meta<typeof RangeDatePicker>;

export default meta;

type Story = StoryObj<StoryArgs>;

export const Default: Story = {
  args: {
    dateFormat: "dd/MM/yyyy",
    min: undefined,
    max: undefined,
    locale: "fr",
  },
  render: (args) => {
    const id = useId();

    const [selectedDate, setSelectedDate] = useState<
      RangeDatePickerValue | undefined
    >();

    let endMonth: Date | undefined = args.max;
    if (!endMonth) {
      endMonth = new Date();
      endMonth.setFullYear(endMonth.getFullYear() + 10);
    }

    return (
      <>
        <RangeDatePicker
          id={id}
          name="range-date-picker"
          dateFormat={args.dateFormat}
          startMonth={args.min ?? new Date()}
          endMonth={endMonth}
          locale={args.locale === "fr" ? fr : enUS}
          value={selectedDate}
          fromPlaceholder={args.fromPlaceholder}
          toPlaceholder={args.toPlaceholder}
          onChange={(date) => {
            setSelectedDate(date);
          }}
        />
      </>
    );
  },
};

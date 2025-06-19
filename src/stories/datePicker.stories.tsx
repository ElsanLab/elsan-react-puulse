import type { Meta, StoryObj } from "@storybook/react-vite";

import { DatePicker } from "@/components/compound/datePicker";
import { fr, enUS } from "date-fns/locale";
import { ComponentProps, useState } from "react";
import { Matcher } from "react-day-picker";
import {
  addDays,
  endOfToday,
  nextMonday,
  nextSunday,
  startOfToday,
  startOfTomorrow,
} from "date-fns";

interface StoryArgs {
  placeholder: string;
  dateFormat: string;
  min: Date | undefined;
  max: Date | undefined;
  locale: string;
  disabled:
    | "true"
    | "false"
    | "Date"
    | "Date[]"
    | "DateRange"
    | "DateBefore"
    | "DateAfter"
    | "DateInterval"
    | "DayOfWeek"
    | "function"
    | "Matcher[]";
}

const meta = {
  title: "Forms/DatePickers/DatePicker",
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

    disabled: {
      control: {
        type: "radio",
        labels: {
          false: "false (boolean) / undefined",
          true: "true (boolean)",
          Date: "Date (tomorrow)",
          "Date[]": "Date[] (tomorrow and the day after)",
          DateRange: "DateRange - limits included (next week)",
          DateInterval:
            "DateInterval - limits not included (next tuesday to saturday)",
          DateBefore: "DateBefore (before today)",
          DateAfter: "DateAfter (after today)",

          DayOfWeek: "DayOfWeek (weekends disabled)",
          function: "function (every 5 first days of the month)",
          "Matcher[]": "Matcher[] (next week, and the week after)",
        },
      },
      options: [
        "false",
        "true",
        "Date",
        "Date[]",
        "DateRange",
        "DateInterval",
        "DateBefore",
        "DateAfter",
        "DayOfWeek",
        "function",
        "Matcher[]",
      ],
      description:
        "Disable dates in the calendar. See https://daypicker.dev/docs/selection-modes#disabled",
      table: {
        defaultValue: {
          summary: "false",
        },
        type: {
          summary: "Matcher | Matcher[]",
        },
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
    disabled: "false",
  },
  render: (args) => {
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);

    let endMonth: Date | undefined = args.max;
    if (!endMonth) {
      endMonth = new Date();
      endMonth.setFullYear(endMonth.getFullYear() + 10);
    }

    let disabled: Matcher | Matcher[] | boolean = false;
    switch (args.disabled) {
      case "true":
        disabled = true;
        break;
      case "Date":
        disabled = startOfTomorrow();
        break;
      case "Date[]":
        disabled = [startOfTomorrow(), addDays(startOfTomorrow(), 1)];
        break;
      case "DateRange":
        disabled = {
          from: nextMonday(Date.now()),
          to: nextSunday(nextMonday(Date.now())),
        };
        break;
      case "DateInterval":
        disabled = {
          after: nextMonday(Date.now()),
          before: nextSunday(nextMonday(Date.now())),
        };
        break;
      case "DateBefore":
        disabled = { before: startOfToday() };
        break;
      case "DateAfter":
        disabled = { after: endOfToday() };
        break;
      case "DayOfWeek":
        disabled = {
          dayOfWeek: [0, 6], // Weekends disabled (0 = Sunday, 6 = Saturday)
        };
        break;
      case "function":
        disabled = (date: Date) => {
          const day = date.getDate();
          return day <= 5;
        };
        break;
      case "Matcher[]":
        disabled = [
          {
            from: nextMonday(Date.now()),
            to: nextSunday(Date.now()),
          },
          {
            from: addDays(nextMonday(Date.now()), 7),
            to: addDays(nextSunday(Date.now()), 7),
          },
        ];
        break;
      default:
        disabled = false;
    }

    console.log("Disabled dates:", disabled);

    return (
      <>
        <DatePicker
          id="date-picker"
          name="date-picker"
          placeholder={args.placeholder}
          dateFormat={args.dateFormat}
          startMonth={args.min ?? new Date()}
          endMonth={endMonth}
          disabled={disabled}
          locale={args.locale === "fr" ? fr : enUS}
          value={selectedDate}
          onChange={(date) => {
            setSelectedDate(date);
          }}
        />
      </>
    );
  },
};

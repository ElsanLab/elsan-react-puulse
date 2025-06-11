/* eslint-disable react-hooks/rules-of-hooks */
import type { Meta, StoryObj } from "@storybook/react-vite";

import { Calendar } from "@/components/ui/calendar";
import { useMemo, useState } from "react";

import { fr, enUS } from "date-fns/locale";
import { VariantProps } from "class-variance-authority";
import { buttonVariants } from "@/components/ui/button";
import { DateRange } from "react-day-picker";
import { formatDate } from "date-fns";

interface StoryArgs {
  buttonVariant: VariantProps<typeof buttonVariants>["variant"];
  captionLayout: React.ComponentProps<typeof Calendar>["captionLayout"];
  showOutsideDays: React.ComponentProps<typeof Calendar>["showOutsideDays"];
  mode: React.ComponentProps<typeof Calendar>["mode"];
  numberOfMonths?: React.ComponentProps<typeof Calendar>["numberOfMonths"];
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
    buttonVariant: {
      control: { type: "select" },
      options: ["default", "primary", "secondary", "ghost"],
      description:
        "Choose the variant for the navigation buttons. The default is 'ghost'.",
      table: {
        defaultValue: {
          summary: "ghost",
        },
      },
    },
    captionLayout: {
      control: { type: "select" },
      options: ["dropdown", "buttons", "label"],
      description:
        "Choose how the caption is displayed. The default is 'label'.",
      table: {
        defaultValue: {
          summary: "label",
        },
      },
    },
    mode: {
      control: { type: "select" },
      options: ["single", "multiple", "range"],
      description:
        "Select the calendar mode. The default is 'single', allowing selection of one date.",
      table: {
        defaultValue: {
          summary: "single",
        },
      },
    },
    numberOfMonths: {
      control: { type: "number" },
      description:
        "Number of months to display. The default is 1. Use this to show multiple months at once.",
      table: {
        defaultValue: {
          summary: "1",
        },
      },
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
    const [selected, setSelected] = useState<
      Date | Date[] | DateRange | undefined
    >(undefined);

    const locale = args.locale === "fr" ? fr : enUS;

    // adapt selected date based on mode
    const date = useMemo(() => {
      switch (args.mode) {
        case "multiple":
          return Array.isArray(selected) ? selected : undefined;
        case "range":
          return selected &&
            typeof selected === "object" &&
            "from" in selected &&
            "to" in selected
            ? selected
            : undefined;
        default:
        case "single":
          return selected instanceof Date ? selected : undefined;
      }
    }, [selected, args.mode]);

    return (
      <div className="flex gap-x-4">
        <Calendar
          locale={locale}
          buttonVariant={args.buttonVariant}
          captionLayout={args.captionLayout}
          showOutsideDays={args.showOutsideDays}
          mode={args.mode}
          fixedWeeks={args.fixedWeeks}
          numberOfMonths={args.numberOfMonths}
          selected={date}
          onSelect={setSelected}
          startMonth={new Date()}
          endMonth={new Date().setFullYear(new Date().getFullYear() + 2)}
        />
        <div>
          Selected:&nbsp;
          {date instanceof Date && formatDate(date, "dd-MM-yyyy")}
          {Array.isArray(date) && (
            <ul>
              {date.map((d, i) => (
                <li key={i}>{formatDate(d, "dd-MM-yyyy")}</li>
              ))}
            </ul>
          )}
          {date &&
            typeof date === "object" &&
            "from" in date &&
            "to" in date && (
              <ul>
                <li>
                  From:
                  {date.from && formatDate(date.from, "dd-MM-yyyy")}
                </li>
                <li>To: {date.to && formatDate(date.to, "dd-MM-yyyy")}</li>
              </ul>
            )}
        </div>
      </div>
    );
  },
};

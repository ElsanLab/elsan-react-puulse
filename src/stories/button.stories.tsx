import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "@/components/ui/button";

const meta = {
  component: Button,
  argTypes: {
    variant: {
      control: {
        type: "select",
      },
      options: [
        "default",
        "destructive",
        "outline",
        "secondary",
        "ghost",
        "link",
      ],
      table: {
        defaultValue: { summary: "default" },
      },
    },
    size: {
      control: {
        type: "select",
      },
      options: ["default", "sm", "lg", "icon"],
      table: {
        defaultValue: { summary: "default" },
      },
    },
    asChild: {
      table: {
        disable: true,
      },
    },
    children: {
      control: {
        type: "text",
      },
      defaultValue: "Button",
      table: {
        defaultValue: { summary: "button" },
      },
    },
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Button",
  },
};

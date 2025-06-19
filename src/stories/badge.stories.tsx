import type { Meta, StoryObj } from "@storybook/react-vite";

import { User } from "lucide-react";
import { Badge } from "@/components/badge";

interface BadgeStoryArgs {
  variant: "neutral" | "info" | "success" | "warning" | "destructive";
  text: string;
  withIcon: boolean;
}

const meta = {
  title: "Components/Badge",
  component: Badge,
  argTypes: {
    variant: {
      control: {
        type: "select",
      },
      options: [
        "neutral",
        "primary",
        "info",
        "success",
        "warning",
        "destructive",
      ],
      table: {
        defaultValue: { summary: "neutral" },
      },
    },
    asChild: {
      table: {
        disable: true,
      },
    },
  },
  args: {
    variant: "neutral",
  },
} satisfies Meta<typeof Badge>;

export default meta;

type Story = StoryObj<BadgeStoryArgs>;

export const Default: Story = {
  args: {
    variant: "neutral",
    text: "Badge",
    withIcon: true,
  },
  render: function Render(args) {
    return (
      <Badge variant={args.variant}>
        {args.withIcon && <User />}
        {args.text}
      </Badge>
    );
  },
};

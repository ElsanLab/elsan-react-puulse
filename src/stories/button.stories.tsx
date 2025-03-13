import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Ambulance } from "lucide-react";

type StoryArgs = {
  variant:
    | "primary"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link";
  size: "sm" | "md" | "lg";
  children: React.ReactNode;
  icon?: string[];
  contentType?: "default" | "icon";
};

const meta = {
  title: "Components/Button",
  component: Button,
  argTypes: {
    variant: {
      control: {
        type: "select",
      },
      options: [
        "primary",
        "destructive",
        "outline",
        "secondary",
        "ghost",
        "link",
      ],
      table: {
        defaultValue: { summary: "primary" },
      },
    },
    size: {
      control: {
        type: "inline-radio",
      },
      options: ["sm", "md", "lg"],
      table: {
        defaultValue: { summary: "md" },
      },
    },
  },
  render: (args) => {
    const [count, setCount] = useState(0);
    return (
      <div className="flex items-center gap-x-4">
        <Button
          variant={args.variant}
          size={args.size}
          onClick={() => setCount(count + 1)}
          contentType={args.contentType}
        >
          {args.icon?.includes("Left") && <Ambulance />}
          {args.children}
          {args.icon?.includes("Right") && <Ambulance />}
        </Button>
        <div>Clicked {count} times</div>
      </div>
    );
  },
} satisfies Meta<StoryArgs>;

export default meta;

type Story = StoryObj<StoryArgs>;

export const Default: Story = {
  argTypes: {
    icon: {
      control: {
        type: "inline-check",
      },
      options: ["Left", "Right"],
    },
  },
  args: {
    children: "Button",
    variant: "primary",
    size: "md",
  },
};

export const IconOnly: Story = {
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
  },
  args: {
    variant: "primary",
    size: "md",
    contentType: "icon",
    children: <Ambulance />,
  },
};

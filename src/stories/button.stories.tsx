import type { Meta, StoryObj } from "@storybook/react-vite";

import { Button } from "@/components/button";
import { useState } from "react";
import { Ambulance } from "lucide-react";

type StoryArgs = {
  variant:
    | "primary"
    | "secondary"
    | "tertiary"
    | "destructive"
    | "destructiveLight"
    | "ghost"
    | "link";
  size: "small" | "medium" | "large";
  children: React.ReactNode;
  icon?: string[];
  content?: "default" | "icon";
  disabled?: boolean;
  asChild?: boolean;
};

const meta = {
  title: "Components/Button",
  component: Button,
  argTypes: {
    asChild: {
      table: {
        disable: true,
      },
    },
    children: {
      table: {
        disable: true,
      },
    },
    variant: {
      control: {
        type: "select",
      },
      options: [
        "primary",
        "secondary",
        "tertiary",
        "destructive",
        "destructiveLight",
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
      options: ["small", "medium", "large"],
      table: {
        defaultValue: { summary: "medium" },
      },
    },
    content: {
      control: {
        type: "inline-radio",
      },
      options: ["default", "icon"],
      table: {
        defaultValue: { summary: "default" },
      },
    },
    disabled: {
      control: {
        type: "boolean",
      },
    },
  },
  render: (args) => {
    const [count, setCount] = useState(0);
    return (
      <div className="ep:flex ep:items-center ep:gap-x-4">
        <Button
          variant={args.variant}
          size={args.size}
          onClick={() => setCount(count + 1)}
          contentType={args.content}
          disabled={args.disabled}
        >
          {args.content !== "icon" && args.icon?.includes("Left") && (
            <Ambulance />
          )}
          {args.content !== "icon" && args.children}
          {args.content !== "icon" && args.icon?.includes("Right") && (
            <Ambulance />
          )}
          {args.content === "icon" && <Ambulance />}
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
    size: "medium",
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
    size: "medium",
    content: "icon",
    children: <Ambulance />,
  },
};

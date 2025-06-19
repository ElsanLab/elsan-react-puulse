import type { Meta, StoryObj } from "@storybook/react-vite";

import {
  Tooltip,
  TooltipProvider,
  TooltipTrigger,
  TooltipContent,
} from "@/components/tooltip";

interface TooltipStoryArgs {
  text: string;
  side: "top" | "right" | "bottom" | "left" | undefined;
}

const meta = {
  title: "Components/Tooltip",
  component: Tooltip,
} satisfies Meta<typeof Tooltip>;

export default meta;

type Story = StoryObj<TooltipStoryArgs>;

export const Default: Story = {
  argTypes: {
    text: {
      control: {
        type: "text",
      },
      table: {
        defaultValue: { summary: "Mon tooltip" },
      },
    },
    side: {
      control: {
        type: "radio",
      },
      options: ["top", "right", "bottom", "left"],
      table: {
        defaultValue: { summary: "top" },
      },
    },
  },
  args: {
    text: "Mon tooltip",
    side: "top",
  },
  render: function Render(args) {
    return (
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>Hover</TooltipTrigger>
          <TooltipContent side={args.side}>{args.text}</TooltipContent>
        </Tooltip>
      </TooltipProvider>
    );
  },
};

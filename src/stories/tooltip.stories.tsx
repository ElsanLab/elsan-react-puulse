import type { Meta, StoryObj } from "@storybook/react";

import {
  Tooltip,
  TooltipProvider,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";

interface TooltipStoryArgs {
  text: string;
}

const meta = {
  title: "Components/Tooltip",
  component: Tooltip,
} satisfies Meta<typeof Tooltip>;

export default meta;

type Story = StoryObj<TooltipStoryArgs>;

export const Default: Story = {
  args: {
    text: "Mon tooltip",
  },
  render: function Render(args) {
    return (
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>Hover</TooltipTrigger>
          <TooltipContent>
            {args.text}
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    );
  },
};

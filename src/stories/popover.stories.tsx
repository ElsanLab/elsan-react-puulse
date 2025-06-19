import type { Meta, StoryObj } from "@storybook/react-vite";

import { Popover, PopoverContent, PopoverTrigger } from "@/components/popover";
import { Button } from "@/components/button";

interface StoryArgs {
  label: string;
}

const meta = {
  title: "Components/Popover",
  component: Popover,
} satisfies Meta<typeof Popover>;

export default meta;

type Story = StoryObj<StoryArgs>;

export const Default: Story = {
  args: {},
  render: function Render() {
    return (
      <Popover>
        <PopoverTrigger>Open</PopoverTrigger>
        <PopoverContent>Place content for the popover here.</PopoverContent>
      </Popover>
    );
  },
};

export const ButtonTrigger: Story = {
  args: {},
  render: function Render() {
    return (
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline">Open</Button>
        </PopoverTrigger>
        <PopoverContent>Place content for the popover here.</PopoverContent>
      </Popover>
    );
  },
};

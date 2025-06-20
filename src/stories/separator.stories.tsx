import { Separator } from "@/components/separator";
import type { Meta, StoryObj } from "@storybook/react-vite";

interface StoryArgs {
  orientation?: "horizontal" | "vertical";
  decorative?: boolean;
}

const meta = {
  title: "Components/Separator",
  component: Separator,
  argTypes: {},
} satisfies Meta<typeof Separator>;

export default meta;

type Story = StoryObj<StoryArgs>;

export const Default: Story = {
  args: {
    orientation: "horizontal",
    decorative: true,
  },
  render: function Render(args) {
    return (
      <div className="ep:w-[200px] ep:h-[100px]">
        <Separator {...args} />
      </div>
    );
  },
};

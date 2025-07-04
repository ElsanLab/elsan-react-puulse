import { Textarea } from "@/components/textarea";
import type { Meta, StoryObj } from "@storybook/react-vite";

interface StoryArgs {
  placeholder: string;
  disabled: boolean;
  invalid: boolean;
}

const meta = {
  title: "Forms/Textarea",
  component: Textarea,
  argTypes: {},
} satisfies Meta<typeof Textarea>;

export default meta;

type Story = StoryObj<StoryArgs>;

export const Default: Story = {
  args: {
    placeholder: "Write some texte here...",
    disabled: false,
    invalid: false,
  },
  render: function Render(args) {
    return <Textarea {...args} aria-invalid={args.invalid} />;
  },
};

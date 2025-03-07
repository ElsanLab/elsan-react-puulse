import type { Meta, StoryObj } from "@storybook/react";

import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

interface AvatarStoryArgs {
  src: string;
  fallback: string;
}

const meta = {
  component: Avatar,
  title: "Components/Avatar",
} satisfies Meta<typeof Avatar>;

export default meta;

type Story = StoryObj<AvatarStoryArgs>;

export const Default: Story = {
  argTypes: {
    src: { control: "text" },
    fallback: { control: "text" },
  },
  args: {
    src: "https://github.com/shadcn.png",
    fallback: "SC",
  },
  render: function Render(args) {
    return (
      <Avatar>
        <AvatarImage src={args.src} />
        <AvatarFallback>{args.fallback}</AvatarFallback>
      </Avatar>
    );
  },
};

export const WithoutImage: Story = {
  argTypes: {
    fallback: { control: "text" },
  },
  args: {
    fallback: "CN",
  },
  render: function Render(args) {
    return (
      <Avatar>
        <AvatarFallback>{args.fallback}</AvatarFallback>
      </Avatar>
    );
  },
};

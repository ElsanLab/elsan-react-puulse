import type { Meta, StoryObj } from "@storybook/react-vite";

import { Avatar, AvatarImage, AvatarFallback } from "@/components/avatar";

interface AvatarStoryArgs {
  src: string;
  fallback: string;
  size: "sm" | "md";
  variant: "info" | "warning" | "success" | "destructive";
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
    size: {
      control: {
        type: "inline-radio",
      },
      options: ["sm", "md"],
      table: {
        defaultValue: { summary: "md" },
      },
    },
    variant: {
      control: {
        type: "select",
      },
      options: ["info", "success", "warning", "destructive"],
      table: {
        defaultValue: { summary: "info" },
      },
    },
  },
  args: {
    src: "https://github.com/shadcn.png",
    fallback: "SC",
    size: "md",
    variant: "info",
  },
  render: function Render(args) {
    return (
      <Avatar size={args.size}>
        <AvatarImage src={args.src} />
        <AvatarFallback variant={args.variant}>{args.fallback}</AvatarFallback>
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
      <Avatar size={args.size}>
        <AvatarFallback variant={args.variant}>{args.fallback}</AvatarFallback>
      </Avatar>
    );
  },
};

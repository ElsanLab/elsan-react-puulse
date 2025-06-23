import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/card";

import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
  title: "Components/Card",
  component: Card,
  argTypes: {},
} satisfies Meta<typeof Card>;

export default meta;

type Story = StoryObj;

export const Default: Story = {
  args: {},
  render: function Render(args) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
          <CardDescription>Card Description</CardDescription>
          <CardAction>Card Action</CardAction>
        </CardHeader>
        <CardContent>
          <p>Card Content</p>
        </CardContent>
        <CardFooter>
          <p>Card Footer</p>
        </CardFooter>
      </Card>
    );
  },
};

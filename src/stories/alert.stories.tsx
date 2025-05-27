import type { Meta, StoryObj } from "@storybook/react";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import {
  CircleAlert,
  CircleCheck,
  InfoIcon,
  TriangleAlert,
} from "lucide-react";

interface AlertStoryArgs {
  variant: "info" | "success" | "warning" | "destructive";
  title: string;
  description: string;
  withIcon: boolean;
}

const meta = {
  title: "Components/Alert",
  component: Alert,
  argTypes: {
    variant: {
      control: {
        type: "select",
      },
      options: ["info", "success", "warning", "destructive"],
    },
  },
  args: {
    variant: "info",
  },
} satisfies Meta<typeof Alert>;

export default meta;

type Story = StoryObj<AlertStoryArgs>;

export const Default: Story = {
  args: {
    variant: "info",
    title: "Heads up!",
    description:
      "You can add components and dependencies to your app using the cli.",
    withIcon: true,
  },
  render: function Render(args) {
    let Icon = InfoIcon;

    switch (args.variant) {
      case "info":
        Icon = InfoIcon;
        break;
      case "success":
        Icon = CircleCheck;
        break;
      case "warning":
        Icon = TriangleAlert;
        break;
      case "destructive":
        Icon = CircleAlert;
        break;
      default:
        break;
    }

    return (
      <>
        <Alert variant={args.variant}>
          {args.withIcon && <Icon />}
          {args.title && <AlertTitle>{args.title}</AlertTitle>}
          <AlertDescription>{args.description}</AlertDescription>
        </Alert>
      </>
    );
  },
};

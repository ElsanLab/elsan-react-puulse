import type { Meta, StoryObj } from "@storybook/react-vite";

import { Alert, AlertDescription, AlertTitle } from "@/components/alert";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faExclamationTriangle,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";

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
    let icon = undefined;

    switch (args.variant) {
      case "info":
        icon = <FontAwesomeIcon icon={faInfoCircle} />;
        break;
      case "success":
        icon = <FontAwesomeIcon icon={faCheckCircle} />;
        break;
      case "warning":
        icon = <FontAwesomeIcon icon={faExclamationTriangle} />;
        break;
      case "destructive":
        icon = <FontAwesomeIcon icon={faExclamationTriangle} />;
        break;
      default:
        break;
    }

    return (
      <>
        <Alert variant={args.variant}>
          {args.withIcon && icon}
          {args.title && <AlertTitle>{args.title}</AlertTitle>}
          <AlertDescription>{args.description}</AlertDescription>
        </Alert>
      </>
    );
  },
};

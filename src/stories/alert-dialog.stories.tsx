import type { Meta, StoryObj } from "@storybook/react-vite";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/alert-dialog";
import { Button } from "@/components/button";

interface StoryArgs {
  title: string;
  description: string;
  actionVariant: "primary" | "destructive";
}

const meta = {
  component: AlertDialog,
  title: "Dialogs/Alert Dialog",
} satisfies Meta<typeof AlertDialog>;

export default meta;

type Story = StoryObj<StoryArgs>;

export const Default: Story = {
  argTypes: {
    title: {
      description: "Change or remove the sheet's title",
      control: { type: "text" },
    },
    description: {
      description: "Change or remove the sheet's description",
      control: { type: "text" },
    },
    actionVariant: {
      description: "Change the variant of the action button",
      control: {
        type: "select",
      },
      options: ["primary", "destructive"],
      table: {
        defaultValue: { summary: "primary" },
      },
    },
  },
  args: {
    title: "Are you absolutely sure?",
    description:
      "This action cannot be undone. This will permanently delete your account and remove your data from our servers.",
    actionVariant: "primary",
  },
  render: function Render(args) {
    return (
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button>Open</Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction variant={args.actionVariant}>
              Continue
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    );
  },
};

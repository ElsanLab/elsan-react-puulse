import type { Meta, StoryObj } from "@storybook/react-vite";

import {
  Dialog,
  DialogHeader,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogClose,
} from "@/components/dialog";

import { Button } from "@/components/button";

interface StoryArgs {
  size: "sm" | "md" | "lg" | "xl";
  title: string;
  description: string;
  body: string;
  footer: boolean;
}

const meta = {
  component: Dialog,
  title: "Dialogs/Dialog",
} satisfies Meta<typeof Dialog>;

export default meta;

type Story = StoryObj<StoryArgs>;

export const Default: Story = {
  argTypes: {
    size: {
      description: "Width of the dialog.",
      control: { type: "radio" },
      options: ["sm", "md", "lg", "xl"],
    },
    title: {
      description: "Change or remove the dialog's title",
      control: { type: "text" },
    },
    description: {
      description: "Change or remove the dialog's description",
      control: { type: "text" },
    },
    body: {
      description: "Change or remove the dialog's body",
      control: { type: "text" },
    },
    footer: {
      description: "Add or remove the dialog's footer",
      control: { type: "boolean" },
    },
  },
  args: {
    size: "md",
    title: "Are you absolutely sure?",
    description:
      "This action cannot be undone. This will permanently delete your account and remove your data from our servers.",
    body: "Lalalala",
    footer: true,
  },
  render: function Render(args) {
    return (
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="secondary">Open dialog</Button>
        </DialogTrigger>
        <DialogContent size={args.size}>
          <DialogHeader>
            {args.title && <DialogTitle>{args.title}</DialogTitle>}
            {args.description && (
              <DialogDescription>{args.description}</DialogDescription>
            )}
          </DialogHeader>
          {args.body}
          {args.footer && (
            <DialogFooter>
              <DialogClose>Close</DialogClose>
            </DialogFooter>
          )}
        </DialogContent>
      </Dialog>
    );
  },
};

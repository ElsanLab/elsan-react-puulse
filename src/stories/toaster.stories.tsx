import { Button } from "@/components/button";
import { Toaster } from "@/components/sonner";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { toast } from "sonner";

interface ToasterStoryArgs {
  text: string;
  description: string;
  withAction: boolean;
  color: "success" | "error" | "warning" | "info";
}

const meta = {
  title: "Components/Toaster",
  component: Toaster,
  decorators: [
    (Story) => (
      <div style={{ minHeight: "250px", padding: "2rem" }}>
        <Story />
        <Toaster duration={100000000000000000000} />
      </div>
    ),
  ],
  argTypes: {
    text: {
      control: {
        type: "text",
      },
    },
    color: {
      control: {
        type: "select",
      },
      options: ["info", "success", "warning", "error"],
      table: {
        defaultValue: { summary: "info" },
      },
    },
  },
  args: {
    text: "Event has been created",
  },
} satisfies Meta<ToasterStoryArgs>;

export default meta;

type Story = StoryObj<ToasterStoryArgs>;

export const Default: Story = {
  args: {
    text: "Event has been created lala ^plzeop kzfpj f jzepofj zefozp zk zepok ",
    description: "",
    withAction: true,
    color: "info",
  },
  render: function Render(args) {
    return (
      <>
        <Button
          variant="outline"
          onClick={() =>
            toast[args.color](args.text, {
              description: args.description,
              action: args.withAction
                ? {
                    label: "Undo",
                    onClick: () => alert("Undo"),
                  }
                : undefined,
            })
          }
        >
          Show toast
        </Button>
      </>
    );
  },
};

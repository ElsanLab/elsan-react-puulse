import { Button } from "@/components/button";
import { toast, Toaster } from "@/components/sonner";
import type { Meta, StoryObj } from "@storybook/react-vite";

interface ToasterStoryArgs {
  text: string;
  position?:
    | "top-left"
    | "top-center"
    | "top-right"
    | "bottom-left"
    | "bottom-center"
    | "bottom-right";
  description: string;
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
    position: {
      control: {
        type: "select",
      },
      options: [
        "top-left",
        "top-center",
        "top-right",
        "bottom-left",
        "bottom-center",
        "bottom-right",
      ],
    },
    color: {
      table: {
        disable: true,
      },
    },
    withAction: {
      table: {
        disable: true,
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
    text: "Hello i am a toast",
    position: "bottom-center",
    description: "",
  },
  render: function Render(args) {
    return (
      <div className="ep:grid ep:grid-cols-2 ep:md:grid-cols-3 ep:gap-4">
        {["info", "success", "warning", "error"].map((color) => (
          <Button
            key={color}
            variant="tertiary"
            onClick={() =>
              toast[color](args.text, {
                description: args.description,
              })
            }
          >
            {color}
          </Button>
        ))}
        <Button
          variant="tertiary"
          onClick={() => {
            const myPromise = new Promise<{ name: string }>((resolve) => {
              setTimeout(() => {
                resolve({ name: "My toast" });
              }, 3000);
            });

            toast.promise(myPromise, {
              loading: "Sauvegarde des données en cours...",
              success: (data: { name: string }) => {
                return `${data.name} toast has been added`;
              },
              error: "Error",
            });
          }}
        >
          Promise
        </Button>
      </div>
    );
  },
};

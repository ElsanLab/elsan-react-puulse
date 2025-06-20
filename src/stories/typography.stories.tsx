import { Typography } from "@/components/typography";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
  title: "Components/Typography",
  component: Typography,
  argTypes: {
    asChild: {
      table: {
        disable: true,
      },
    },
    className: {
      table: {
        disable: true,
      },
    },
    variant: {
      table: {
        disable: true,
      },
    },
  },
} satisfies Meta<typeof Typography>;

export default meta;

type Story = StoryObj;

const variants = [
  "heading2XL",
  "headingXL",
  "headingLG",
  "headingMD",
  "headingSM",
  "headingXS",
  "heading2XS",
  "bodyLG",
  "bodyMD",
  "bodySM",
  "bodyXS",
  "assetSM",
  "assetXS",
];

export const Default: Story = {
  args: {},
  render: function Render(args) {
    return (
      <ul className="ep:space-y-5">
        {variants.map((variant) => (
          <li key={variant}>
            variant&nbsp;<i className="ep:underline">{variant}</i>&nbsp;:
            <br />
            <Typography variant={variant}>
              The quick brown fox jumps over the lazy dog!
            </Typography>
          </li>
        ))}
      </ul>
    );
  },
};

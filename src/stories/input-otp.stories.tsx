import type { Meta, StoryObj } from "@storybook/react";

import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";

interface StoryArgs {
  length: number;
}

const meta = {
  title: "Forms/InputOtp",
  component: InputOTP,
  argTypes: {
    containerClassName: {
      table: {
        disable: true,
      },
    },
  },
} satisfies Meta<typeof InputOTP>;

export default meta;

type Story = StoryObj<StoryArgs>;

export const Default: Story = {
  argTypes: {
    length: {
      control: {
        type: "number",
      },
      description: "The code length.",
      table: {
        defaultValue: {
          summary: "6",
        },
      },
    },
  },
  args: {
    length: 6,
  },
  render: function Render(args) {
    return (
      <InputOTP maxLength={6}>
        <InputOTPGroup>
          {args.length > 0 &&
            Array.from({ length: args.length }, (_, index) => (
              <InputOTPSlot key={index} index={index} />
            ))}
        </InputOTPGroup>
      </InputOTP>
    );
  },
};

export const WithGroups: Story = {
  argTypes: {
    length: {
      control: {
        type: "number",
      },
      description: "The code length.",
      table: {
        defaultValue: {
          summary: "6",
        },
      },
    },
  },
  args: {
    length: 6,
  },
  render: function Render(args) {
    const spitAt = Math.ceil(args.length / 2);
    const firstGroup = Array.from({ length: spitAt }, (_, index) => (
      <InputOTPSlot key={index} index={index} />
    ));
    const secondGroup = Array.from(
      { length: args.length - spitAt },
      (_, index) => <InputOTPSlot key={index + spitAt} index={index + spitAt} />
    );

    return (
      <InputOTP maxLength={6}>
        <InputOTPGroup>{firstGroup}</InputOTPGroup>
        <InputOTPSeparator />
        <InputOTPGroup>{secondGroup}</InputOTPGroup>
      </InputOTP>
    );
  },
};

import {
  OTPField,
  OTPGroup,
  OTPInput,
  OTPSeparator,
} from "@/components/input-otp";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Fragment } from "react/jsx-runtime";

interface StoryArgs {
  length: number;
  separator: boolean;
  groupBy: number;
}

const meta = {
  title: "Forms/OTPField",
  component: OTPField,
  argTypes: {},
} satisfies Meta<typeof OTPField>;

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
    groupBy: {
      control: {
        type: "number",
      },
      description: "The number of characters in each group.",
      table: {
        defaultValue: {
          summary: 0,
        },
      },
    },
    separator: {
      control: {
        type: "boolean",
      },
      description: "Whether to show a separator between groups.",
      table: {
        defaultValue: {
          summary: false,
        },
      },
    },
  },
  args: {
    length: 6,
  },
  render: function Render(args) {
    const groups: Array<number> = [];

    if (args.groupBy === 0) {
      groups.push(args.length);
    } else {
      const fullGroups = Math.floor(args.length / args.groupBy);
      const remainder = args.length % args.groupBy;
      for (let i = 0; i < fullGroups; i++) {
        groups.push(args.groupBy);
      }
      if (remainder > 0) {
        groups.push(remainder);
      }
    }

    return (
      <OTPField name="story">
        {groups.map((groupLength, i) => (
          <Fragment key={i}>
            <OTPGroup>
              {groupLength > 0 &&
                Array.from({ length: groupLength }, (_, index) => (
                  <OTPInput key={index * i} />
                ))}
            </OTPGroup>
            {i < groups.length - 1 && args.separator && <OTPSeparator />}
          </Fragment>
        ))}
      </OTPField>
    );
  },
};

// export const WithGroups: Story = {
//   argTypes: {
//     length: {
//       control: {
//         type: "number",
//       },
//       description: "The code length.",
//       table: {
//         defaultValue: {
//           summary: "6",
//         },
//       },
//     },
//   },
//   args: {
//     length: 6,
//   },
//   render: function Render(args) {
//     const spitAt = Math.ceil(args.length / 2);
//     const firstGroup = Array.from({ length: spitAt }, (_, index) => (
//       <InputOTPSlot key={index} index={index} />
//     ));
//     const secondGroup = Array.from(
//       { length: args.length - spitAt },
//       (_, index) => <InputOTPSlot key={index + spitAt} index={index + spitAt} />
//     );

//     return (
//       <OTPField maxLength={6}>
//         <InputOTPGroup>{firstGroup}</InputOTPGroup>
//         <InputOTPSeparator />
//         <InputOTPGroup>{secondGroup}</InputOTPGroup>
//       </OTPField>
//     );
//   },
// };

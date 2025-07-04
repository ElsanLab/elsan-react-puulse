import type { Meta, StoryObj } from "@storybook/react-vite";

import { RadioGroup, RadioGroupItem } from "@/components/radio-group";
import { Label } from "@/components/label";

interface StoryArgs {
  disabled: boolean;
  invalid: boolean;
}

const meta = {
  title: "Forms/RadioGroup",
  component: RadioGroup,
} satisfies Meta<typeof RadioGroup>;

export default meta;

type Story = StoryObj<StoryArgs>;

export const Default: Story = {
  args: {
    disabled: false,
    invalid: false,
  },
  render: function Render(args) {
    return (
      <RadioGroup defaultValue="option-one" disabled={args.disabled} >
        <div className="ep:flex ep:items-center ep:space-x-2">
          <RadioGroupItem value="option-one" id="option-one" aria-invalid={args.invalid} />
          <Label htmlFor="option-one">Option One</Label>
        </div>
        <div className="ep:flex ep:items-center ep:space-x-2">
          <RadioGroupItem value="option-two" id="option-two" aria-invalid={args.invalid} />
          <Label htmlFor="option-two">Option Two</Label>
        </div>
      </RadioGroup>
    );
  },
};

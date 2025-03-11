import type { Meta, StoryObj } from "@storybook/react";

import { ColorPicker } from "@/components/ui/colorPicker";
import { useState } from "react";

const meta = {
  title: "Forms/ColorPicker",
  component: ColorPicker,
} satisfies Meta<typeof ColorPicker>;

export default meta;

export const Default: StoryObj = {
  args: {},
  render: function Render() {
    const [color, setColor] = useState("#000");

    return (
      <>
        <ColorPicker color={color} onChange={setColor} />
        <div className="mt-8 text-sm flex items-center gap-x-2">
          Selected color:
          <div className="size-4" style={{ backgroundColor: color }} />
          <div className="text-xs ">{color}</div>
        </div>
      </>
    );
  },
};

import type { Meta, StoryObj } from "@storybook/react-vite";

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
        <div className="ep:mt-8 ep:text-sm ep:flex ep:items-center ep:gap-x-2">
          Selected color:
          <div className="ep:size-4" style={{ backgroundColor: color }} />
          <div className="ep:text-xs ">{color}</div>
        </div>
      </>
    );
  },
};

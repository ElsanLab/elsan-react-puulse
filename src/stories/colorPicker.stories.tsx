import type { Meta, StoryObj } from "@storybook/react-vite";

import { ColorPicker } from "@/components/colorPicker";
import { useState } from "react";

const meta = {
  title: "Forms/ColorPicker",
  component: ColorPicker,
} satisfies Meta<typeof ColorPicker>;

export default meta;

export const Default: StoryObj = {
  args: {},
  render: function Render() {
    const [color, setColor] = useState("#29acb3");

    return (
      <>
        <ColorPicker value={color} onChange={setColor} />
        <div className="ep:mt-8 ep:text-sm ep:flex ep:items-center ep:gap-x-2">
          Selected color:
          <div className="ep:size-4" style={{ backgroundColor: color }} />
          <div className="ep:text-xs ">{color}</div>
        </div>
      </>
    );
  },
};

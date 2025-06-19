import { Pagination } from "@/components/pagination";
import type { StoryObj } from "@storybook/react-vite";
import { useState } from "react";

const meta = {
  title: "Components/Pagination",
};

export default meta;

type Story = StoryObj;

export const Default: Story = {
  render: function Render() {
    const [currentPage, setCurrentPage] = useState(1);

    return (
      <Pagination
        currentPage={currentPage}
        totalPages={10}
        onPageChange={setCurrentPage}
      />
    );
  },
};

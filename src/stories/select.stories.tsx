import type { Meta, StoryObj } from "@storybook/react-vite";

import { Select } from "@/components/ui/select";
import { useState } from "react";

interface StoryArgs {
  placeholder: string;
  isClearable: boolean;
  isDisabled: boolean;
  isSearchable: boolean;
}

const meta = {
  title: "Forms/Select",
  component: Select,
  argTypes: {
    placeholder: {
      control: { type: "text" },
      description: "Placeholder text",
      table: {
        type: { summary: "string" },
        defaultValue: {
          summary: "Sélectionner",
        },
      },
    },
    isClearable: {
      control: { type: "boolean" },
      description: "Allow clearing the selection",
      table: {
        type: { summary: "boolean" },
        defaultValue: {
          summary: "false",
        },
      },
    },
    isDisabled: {
      control: { type: "boolean" },
      description: "Disable the select component",
      table: {
        type: { summary: "boolean" },
        defaultValue: {
          summary: "false",
        },
      },
    },
    isSearchable: {
      control: { type: "boolean" },
      description: "Enable search functionality",
      table: {
        type: { summary: "boolean" },
        defaultValue: {
          summary: "false",
        },
      },
    },
  },
} satisfies Meta<typeof Select>;

export default meta;

type Story = StoryObj<StoryArgs>;

export const Default: Story = {
  args: {
    placeholder: "Sélectionner",
    isClearable: false,
    isDisabled: false,
    isSearchable: true,
  },
  render: function Render(args) {
    const [selected, setSelected] = useState<string | string[] | null>(null);

    const options = [
      { label: "Apple", value: "apple" },
      { label: "Orange", value: "orange" },
      { label: "Kiwi", value: "kiwi" },
      { label: "Banana", value: "banana" },
      { label: "Durian", value: "stinks" },
    ];

    let selectedLabel: string | null = null;
    if (selected) {
      selectedLabel =
        options.find((option) => option.value === selected)?.label ?? null;
    }

    return (
      <>
        <Select
          options={options}
          value={selected}
          onChange={setSelected}
          placeholder={args.placeholder}
          isClearable={args.isClearable}
          isSearchable={args.isSearchable}
          isDisabled={args.isDisabled}
        />
        <div className="ep:mt-4 ep:text-sm">
          <p>Selected value:</p>
          <p className="ep:text-xs">{selectedLabel ?? "none"}</p>
        </div>
      </>
    );
  },
};

export const Multi: Story = {
  args: {
    placeholder: "Sélectionner",
    isClearable: false,
    isDisabled: false,
    isSearchable: true,
  },
  render: function Render(args) {
    const [selected, setSelected] = useState<string | string[] | null>(null);

    const options = [
      { label: "Apple", value: "apple" },
      { label: "Orange", value: "orange" },
      { label: "Kiwi", value: "kiwi" },
      { label: "Banana", value: "banana" },
      { label: "Durian", value: "stinks" },
    ];

    let selectedLabels: string[] = [];
    if (selected) {
      selectedLabels =
        options
          .filter((option) => selected.includes(option.value))
          .map((option) => option.label) ?? [];
    }

    return (
      <>
        <Select
          isMulti
          options={options}
          value={selected}
          onChange={setSelected}
          placeholder={args.placeholder}
          isClearable={args.isClearable}
          isSearchable={args.isSearchable}
          isDisabled={args.isDisabled}
        />
        <div className="ep:mt-4 ep:text-sm">
          <p>Selected value:</p>
          {selectedLabels.length === 0 && "none"}

          {selectedLabels.length > 0 && (
            <ul className="ep:text-xs">
              {selectedLabels.map((label, i) => (
                <li key={i}>{label}</li>
              ))}
            </ul>
          )}
        </div>
      </>
    );
  },
};

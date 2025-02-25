import type { Preview } from "@storybook/react";
// import "../src/themes/pro.css";
import { ThemeDecorator } from "../src/stories/themeDecorator";

export const globalTypes = {
  theme: {
    name: "Theme",
    description: "Sélection du thème",
    defaultValue: "public",
    toolbar: {
      icon: "paintbrush",
      items: ["public", "pro"],
      showName: true,
    },
  },
};

const preview: Preview = {
  tags: ["autodocs"],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [ThemeDecorator],
};

export default preview;

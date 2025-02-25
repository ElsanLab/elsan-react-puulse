import { useEffect } from "react";

const ThemeDecorator = (Story, context) => {
  useEffect(() => {
    const theme = context.globals.theme;
    const linkId = "theme-stylesheet";
    let link = document.getElementById(linkId);

    if (!link) {
      link = document.createElement("link");
      link.id = linkId;
      link.rel = "stylesheet";
      document.head.appendChild(link);
    }

    link.href =
      theme === "pro" ? "../src/themes/pro.css" : "../src/themes/public.css";
  }, [context.globals.theme]);

  return <Story />;
};

export { ThemeDecorator };

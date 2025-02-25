import { Search } from "lucide-react";
import * as React from "react";
import { IconInput } from "./iconInput";

const SearchInput = React.forwardRef<
  HTMLInputElement,
  React.ComponentProps<"input">
>((props, ref) => {
  return <IconInput ref={ref} icon={<Search />} {...props} />;
});

export { SearchInput };

import { cloneElement } from "react";
import { Input } from "../ui/input";

const IconInput = ({
  icon,
  ...props
}: React.ComponentProps<"input"> & {
  icon: React.ReactElement;
}) => {
  return (
    <div className="relative">
      <div className="absolute left-0 top-0 bottom-0 aspect-square flex items-center justify-center text-muted-foreground">
        {cloneElement(icon, { className: "size-4" } as never)}
      </div>
      <Input className="w-full pl-8" {...props} />
    </div>
  );
};

IconInput.displayName = "Input";

export { IconInput };

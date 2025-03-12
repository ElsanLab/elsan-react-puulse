import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Eye } from "lucide-react";

type PasswordInputProps = Omit<React.ComponentProps<"input">, "type">;

const PasswordInput: React.FC<PasswordInputProps> = ({
  disabled,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="relative">
      <Input
        {...props}
        disabled={disabled}
        type={showPassword && !disabled ? "text" : "password"}
      />
      <button
        type="button"
        disabled={disabled}
        className="absolute top-1/2 -translate-y-1/2 right-4 text-muted-foreground"
        onMouseDown={() => setShowPassword(true)}
        onMouseUp={() => setShowPassword(false)}
        onMouseLeave={() => setShowPassword(false)}
      >
        <Eye className="size-4" />
      </button>
    </div>
  );
};

export { PasswordInput };

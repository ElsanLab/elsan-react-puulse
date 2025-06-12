import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Eye, EyeClosed, LockIcon } from "lucide-react";

const PasswordInput: React.FC<Omit<React.ComponentProps<"input">, "type">> = ({
  disabled,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="ep:relative">
      <Input
        {...props}
        disabled={disabled}
        type={showPassword && !disabled ? "text" : "password"}
        left={<LockIcon />}
        right={
          <button
            type="button"
            disabled={disabled}
            className="ep:absolute ep:top-1/2 ep:-translate-y-1/2 ep:right-4 ep:text-muted-foreground"
            onMouseDown={() => setShowPassword(true)}
            onMouseUp={() => setShowPassword(false)}
            onMouseLeave={() => setShowPassword(false)}
          >
            {showPassword && <Eye className="ep:size-4" />}
            {!showPassword && <EyeClosed className="ep:size-4" />}
          </button>
        }
      />
    </div>
  );
};

export { PasswordInput };

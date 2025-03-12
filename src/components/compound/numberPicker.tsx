import { Input } from "@/components/ui/input";
import { Button } from "../ui/button";
import { Minus, Plus } from "lucide-react";
import { useRef, useState } from "react";
import { cn } from "@/lib/utils";

type NumberInputProps = Omit<React.ComponentProps<"input">, "type"> & {
  min?: number;
  max?: number;
  step?: number;
};

const NumberPicker: React.FC<NumberInputProps> = ({
  disabled,
  className = undefined,
  min = undefined,
  max = undefined,
  step = 1,
  ...props
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null);

  const startDecreasing = () => {
    if (!inputRef.current) {
      return;
    }

    inputRef.current.stepDown(step);

    const id = setInterval(() => {
      inputRef.current?.stepDown(step);
    }, 100);

    setIntervalId(id);
  };

  const startIncreasing = () => {
    if (!inputRef.current) {
      return;
    }

    inputRef.current.stepUp(step);
    const id = setInterval(() => {
      inputRef.current?.stepUp(step);
    }, 100);

    setIntervalId(id);
  };

  const stop = () => {
    if (!intervalId) {
      return;
    }

    clearInterval(intervalId);
    setIntervalId(null);
  };

  return (
    <div className="relative">
      <Input
        {...props}
        ref={inputRef}
        className={cn("text-center", className)}
        type="number"
        min={min}
        max={max}
        disabled={disabled}
      />
      <Button
        variant="link"
        className="absolute top-1/2 -translate-y-1/2 left-0 text-muted-foreground"
        disabled={disabled}
        onMouseDown={startDecreasing}
        onMouseUp={stop}
        onMouseLeave={stop}
      >
        <Minus />
      </Button>
      <Button
        variant="link"
        className="absolute top-1/2 -translate-y-1/2 right-0 text-muted-foreground"
        disabled={disabled}
        onMouseDown={startIncreasing}
        onMouseUp={stop}
        onMouseLeave={stop}
      >
        <Plus />
      </Button>
    </div>
  );
};

export { NumberPicker };

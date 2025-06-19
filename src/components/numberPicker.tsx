import { Input } from "@/components/input";
import { Button } from "@/components/button";
import { Minus, Plus } from "lucide-react";
import { useRef, useState } from "react";
import { cn } from "@/lib/utils";

const NumberPicker: React.FC<
  Omit<React.ComponentProps<"input">, "type"> & {
    min?: number;
    max?: number;
    step?: number;
  }
> = ({
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
    <div className={cn("ep:relative", className)}>
      <Input
        {...props}
        ref={inputRef}
        className="ep:text-center ep:placeholder:text-center"
        type="number"
        min={min}
        max={max}
        disabled={disabled}
      />
      <Button
        variant="link"
        className="ep:absolute ep:top-1/2 ep:-translate-y-1/2 ep:left-0 ep:text-input-foreground"
        disabled={disabled}
        onMouseDown={startDecreasing}
        onMouseUp={stop}
        onMouseLeave={stop}
      >
        <Minus />
      </Button>
      <Button
        variant="link"
        className="ep:absolute ep:top-1/2 ep:-translate-y-1/2 ep:right-0 ep:text-foreground"
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

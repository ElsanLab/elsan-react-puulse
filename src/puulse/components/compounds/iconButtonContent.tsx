interface IconButtonContentProps {
  rightIcon?: React.ReactNode;
  leftIcon?: React.ReactNode;
  children?: React.ReactNode;
}
const IconButtonContent = ({
  rightIcon,
  leftIcon,
  children,
  ...props
}: React.ComponentProps<"input"> & IconButtonContentProps) => {
  return (
    <div className="flex items-center gap-x-2" {...props}>
      {leftIcon}
      {children}
      {rightIcon}
    </div>
  );
};

export { IconButtonContent };

import { cn } from "@utils";

const Text = ({ component, className, children, ...props }) => {
  const Component = component || "p";

  return (
    <Component
      className={cn(
        "text-neutral-600 text-xs sm:text-sm md:text-sm xl:text-base",
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
};

export default Text;

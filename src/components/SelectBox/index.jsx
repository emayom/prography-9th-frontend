import { cn } from "@utils";

const SelectBox = ({
  name,
  defaultValue,
  options = [],
  onChange,
  ...props
}) => {
  return (
    <select
      className={cn(
        "text-gray-500 border rounded p-1",
        "text-xs sm:text-sm md:text-sm xl:text-base"
      )}
      name={name}
      defaultValue={defaultValue}
      onChange={onChange}
      {...props}
    >
      {options.map(({ value, name }) => (
        <option key={value} value={value}>
          {name}
        </option>
      ))}
    </select>
  );
};

export default SelectBox;

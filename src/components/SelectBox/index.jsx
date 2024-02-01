import { cn } from "@utils";

const SelectBox = ({ defaultValue, options = [], onChange }) => {
  return (
    <select
      className={cn(
        "text-gray-500 border rounded p-1",
        "text-xs sm:text-sm md:text-sm xl:text-base"
      )}
      defaultValue={defaultValue}
      onChange={onChange}
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

import { filters } from "../../../constants";
import SelectBox from "@components/SelectBox";

const Filters = ({ device, filter, onChange }) => {
  return (
    <div className="flex gap-2">
      {filters.map(
        ({ name, defaultValue, options, responsive }) =>
          responsive[device] && (
            <SelectBox
              key={name}
              name={name}
              options={options}
              defaultValue={filter ? filter : defaultValue}
              onChange={onChange}
            ></SelectBox>
          )
      )}
    </div>
  );
};

export default Filters;

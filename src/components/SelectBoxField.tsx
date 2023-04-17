import { FunctionComponent } from "react";
import { SelectboxProps } from "../types/InputProps";
import useInput from "../hooks/useInput";

const SelectboxField: FunctionComponent<SelectboxProps> = ({
  source,
  label,
  validate,
    options,
}) => {
  const { value, onChange, error } = useInput({ source, validate });

  const errorMessage = error[source];
  console.log(error);

  return (
    <div>
      <label htmlFor={source}>
        {label}
        <select
          name={source}
          value={value}
          onChange={(e) => onChange(e.target.value)}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
};

export default SelectboxField;

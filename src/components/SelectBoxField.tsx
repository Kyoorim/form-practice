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

  return (
    <div>
      <label htmlFor={source}>
        {label}
        <select
          name={source}
          value={String(value)}
          onChange={(e) => onChange(e.target.value)}
          id={source}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </label>
      {errorMessage && <span style={{ color: "red" }}>{errorMessage}</span>}
    </div>
  );
};

export default SelectboxField;

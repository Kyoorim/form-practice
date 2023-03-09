import { FunctionComponent } from "react";
import { SelectboxProps } from "../types/formProps";
import useInput from "../hooks/useInput";

const options: SelectboxProps[] = [
  { value: "성별", label: "성별" },
  { value: "남성", label: "남성" },
  { value: "여성", label: "여성" },
];

const SelectboxField: FunctionComponent<SelectboxProps> = ({
  source,
  label,
}) => {
  const { value, onChange } = useInput({ source: source ?? "" });

  return (
    <div>
      <label htmlFor={source}>
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
        {label}
      </label>
    </div>
  );
};

export default SelectboxField;

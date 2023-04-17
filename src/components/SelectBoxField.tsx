import { FunctionComponent } from "react";
import { SelectboxProps } from "../types/InputProps";
import useInput from "../hooks/useInput";

const options: Record<string, string>[] = [
  { value: "성별", label: "성별" },
  { value: "남성", label: "남성" },
  { value: "여성", label: "여성" },
];

export const notDefaultValue = (notAllowedValue: string) => (value: string) => {
  if (value === notAllowedValue) return `${notAllowedValue}을 선택해주세요`;
  else return undefined;
};

const SelectboxField: FunctionComponent<SelectboxProps> = ({
  source,
  label,
  validate,
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

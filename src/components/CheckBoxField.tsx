import { FunctionComponent } from "react";
import { CheckboxProps } from "../types/InputProps";
import useInput from "../hooks/useInput";

const CheckboxField: FunctionComponent<CheckboxProps> = ({
  source,
  label,
  validate,
}) => {
  const { value, onChange, error } = useInput({
    source,
    validate,
  });

  const errorMessage = error[source];

  return (
    <div>
      <label htmlFor={source}>
        <input
          type="checkbox"
          name={source}
          checked={value}
          onChange={(e) => onChange(e.target.checked)}
        />
        {label}
      </label>
      {errorMessage && <span style={{ color: "red" }}>{errorMessage}</span>}
    </div>
  );
};

export default CheckboxField;

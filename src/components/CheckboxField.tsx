import { FunctionComponent, useState } from "react";
import { CheckboxProps } from "../types/checkboxProps";
import useInput from "../hooks/useInput";

const CheckboxField: FunctionComponent<CheckboxProps> = ({ source, label }) => {
  //   const { source, label } = props;
  const { value, onChange } = useInput({ source });

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
    </div>
  );
};

export default CheckboxField;

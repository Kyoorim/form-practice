import React, { FunctionComponent } from "react";
import { InputProps } from "../types/InputProps";
import useInput from "../hooks/useInput";

export const min = (length: number) => (value: string | number) => {
  return String(value).length >= length;
};

export const max = (length: number) => (value: string | number) => {
  return String(value).length <= length;
};

const TextField: FunctionComponent<InputProps> = ({
  source,
  label,
  placeholder,
  type,
  validate,
}) => {
  const { value, onChange } = useInput({ source, validate });

  return (
    <div>
      <div style={{ display: "flex", gridGap: "8px" }}>
        <label htmlFor={source}>{label}</label>
        <input
          value={value || ""}
          onChange={(e) => onChange(e.target.value)}
          name={source}
          type={type}
          placeholder={placeholder}
        />
      </div>
    </div>
  );
};

export default TextField;

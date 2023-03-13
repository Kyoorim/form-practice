import React, { FunctionComponent } from "react";
import { InputProps } from "../types/InputProps";
import useInput from "../hooks/useInput";

export const min = (length: number) => (value: string | number) => {
  if (String(value).length < length)
    return `최소 ${length}글자 이상 입력해주세요`;
  else undefined;
};

export const max = (length: number) => (value: string | number) => {
  if (String(value).length > length)
    return `최대 ${length}글자 이하로 입력해주세요`;
  else return undefined;
};

const TextField: FunctionComponent<InputProps> = ({
  source,
  label,
  placeholder,
  type,
  validate,
}) => {
  const { value, onChange, error } = useInput({ source, validate });

  const errorMessage = {
    name: `${validate[0](value) || ""}${validate[1](value) || ""}`,
    password: `${validate[0](value) || ""}${validate[1](value) || ""}`,
  };

  console.log(error);
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
        {error && <span style={{ color: "red" }}>{errorMessage[source]}</span>}
      </div>
    </div>
  );
};

export default TextField;

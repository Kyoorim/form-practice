import { HTMLInputTypeAttribute } from "react";

export interface InputProps {
  source: string;
  label: string;
  placeholder?: string;
  type?: HTMLInputTypeAttribute;
  validate?: ((value: string | number) => boolean)[];
}

export interface CheckboxProps {
  source: string;
  label: string;
  type?: "checkbox";
}

export interface SelectboxProps {
  value?: string;
  label: string;
  source?: string;
}

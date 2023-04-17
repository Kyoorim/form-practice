import { HTMLInputTypeAttribute } from "react";

export interface InputProps {
  source: string;
  label: string;
  placeholder?: string;
  type?: HTMLInputTypeAttribute;
  validate: ((value: string | number) => string | undefined)[];
}

export interface SelectboxProps {
  value?: string;
  label: string;
  source?: string;
  validate: ((value: string | number) => string | undefined)[];
}

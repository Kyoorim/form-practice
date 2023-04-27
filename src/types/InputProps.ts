import { HTMLInputTypeAttribute } from "react";

export interface InputProps {
  source: string;
  label: string;
  placeholder?: string;
  type?: HTMLInputTypeAttribute;
  validate: (<T>(value: T) => string | undefined)[];
}

export interface SelectboxProps {
  label: string;
  source: string;
  validate: ((value: string) => string | undefined)[];
  options: { label: string; value: string }[];
}

export interface CheckboxProps {
  source: string;
  label: string;
  type: "checkbox";
  validate: ((value: boolean) => string | undefined)[];
  value?: boolean;
}

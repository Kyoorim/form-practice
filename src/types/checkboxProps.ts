export interface CheckboxProps {
  source: string;
  label: string;
  onChange: (checked: boolean) => void;
  type?: "checkbox";
}

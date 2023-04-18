import { InputProps } from "../types/InputProps";
import { useCallback, useContext, useState } from "react";
import { FormContext } from "../components/SimpleForm";

interface UseInputProps extends Pick<InputProps, "source" | "validate"> {}

interface Validator {
  (value: string): string | undefined;
}

function useInput(props: UseInputProps) {
  const { setValues, values, error, setError } = useContext(FormContext);

  const [selected, setSelected] = useState("sex");

  const onChange = useCallback(
    (value: string) => {
      setValues({
        ...values,
        [props.source]: value,
      } as Record<string, string>);
      setSelected(value as string);

      const errorMessage = props.validate
        .map((validator: Validator) => validator(value))
        .filter((message) => message)
        .join(", ");

      setError({ ...error, [props.source]: errorMessage });
    },
    [values, props.source, props.validate, setError, setValues]
  );

  return { value: values[props.source], onChange, error };
}

export default useInput;

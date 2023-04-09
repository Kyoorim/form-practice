import { InputProps } from "../types/InputProps";
import { useCallback, useContext, useState } from "react";
import { FormContext } from "../components/SimpleForm";

interface UseInputProps extends Pick<InputProps, "source" | "validate"> {}

interface UseInputReturn {
  value: string | number;
  onChange: (v: string | number) => void;
  error: { message?: string; key: string } | undefined;
}

function useInput(props: UseInputProps) {
  const { setValues, values } = useContext(FormContext);
  console.log(props);

  const [error, setError] = useState<UseInputReturn["error"]>(undefined);

  const onChange = useCallback(
    (v: string | number) => {
      setValues({
        ...values,
        [props.source]: v,
      });

      const errorMessage = props.validate
        .map((validator) => validator(v))
        .filter(Boolean)
        .join(" ");

      setError({ message: errorMessage, key: props.source });
    },
    [values, props.source, props.validate, setError, setValues]
  );
  console.log(error);

  return { value: values[props.source], onChange, error };
}

export default useInput;

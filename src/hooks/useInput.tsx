import { InputProps } from "../types/InputProps";
import { useCallback, useContext } from "react";
import { FormContext } from "../components/SimpleForm";

interface UseInputProps extends Pick<InputProps, "source" | "validate"> {}

function useInput(props: UseInputProps) {
  const { setValues, values, error } = useContext(FormContext);
  const onChange = useCallback(
    (v: string | number) => {
      setValues({
        ...values,
        [props.source]: v,
      });
    },
    [values, props.source]
  );

  console.log(values);

  return { value: values[props.source], onChange, error };
}

export default useInput;

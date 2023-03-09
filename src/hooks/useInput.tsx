import { InputProps } from "../types/InputProps";
import { useCallback, useContext, useState } from "react";
import { FormContext } from "../components/SimpleForm";

interface UseInputProps extends Pick<InputProps, "source" | "validate"> {}

function useInput(props: UseInputProps) {
  const { setValues, values, error } = useContext(FormContext);

  const [checked, setChecked] = useState(false);

  const onChange = useCallback(
    (v: string | number | boolean) => {
      setValues({
        ...values,
        [props.source]: v,
      });
      setChecked(v as boolean);
    },
    [values, props.source]
  );

  return { value: values[props.source], onChange, error };
}

export default useInput;

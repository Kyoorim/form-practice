import { InputProps } from "../types/formProps";
import { useCallback, useContext, useState, useEffect } from "react";
import { FormContext } from "../components/SimpleForm";

interface UseInputProps extends Pick<InputProps, "source" | "validate"> {}

function useInput(props: UseInputProps) {
  const { setValues, values, error } = useContext(FormContext);

  const [checked, setChecked] = useState(false);
  const [selected, setSelected] = useState("sex");
  const onChange = useCallback(
    (v: string | number | boolean) => {
      setValues({
        ...values,
        [props.source]: v,
      });
      setChecked(v as boolean);
      setSelected(v as string);
    },
    [values, props.source]
  );

  useEffect(() => {
    console.log(selected);
  }, [selected]);

  return { value: values[props.source], onChange, error };
}

export default useInput;

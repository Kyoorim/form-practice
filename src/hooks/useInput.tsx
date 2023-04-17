import { InputProps } from "../types/InputProps";
import { useCallback, useContext, useState, useEffect } from "react";
import { FormContext } from "../components/SimpleForm";
import { notDefaultValue } from "../components/SelectBoxField";

interface UseInputProps extends Pick<InputProps, "source" | "validate"> {}

interface UseInputReturn {
  value: string | number;
  onChange: (v: string | number) => void;
  error: { message?: string; key: string } | undefined;
}

function useInput(props: UseInputProps) {
  const { setValues, values, error, setError } = useContext(FormContext);

  const [selected, setSelected] = useState("sex");

  const onChange = useCallback(
    (v: string | number) => {
      setValues({
        ...values,
        [props.source]: v,
      });
      setSelected(v as string);

      // const errorMessage = props.validate
      //   .map((validator) => validator(v))
      //   .join("");
      const errorMessage = props.validate
        .map((validator) => validator(values[props.source]))
        .concat(notDefaultValue("성별")(selected))
        // .filter((message) => message)
        .join("");
      console.log(props);
      setError({ ...error, [props.source]: errorMessage });
    },
    [values, props.source, props.validate, setError, setValues]
  );

  // useEffect(() => {
  //   console.log(selected);
  // }, [selected]);

  return { value: values[props.source], onChange, error };
}

export default useInput;

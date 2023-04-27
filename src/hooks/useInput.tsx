import { InputProps } from "../types/InputProps";
import { useCallback, useContext } from "react";
import { FormContext } from "../components/SimpleForm";

interface UseInputProps extends Pick<InputProps, "source" | "validate"> {}

interface Validator<T> {
    (value: T): string | undefined;
}

function useInput(props: UseInputProps) {
  const { setValues, values, error, setError } = useContext(FormContext);

  const onChange = useCallback(
    (value: string | boolean) => {
      setValues({
        ...values,
        [props.source]: value,
      });

      const errorMessages = props.validate
        .map((validator) => validator(value))

    // [undefined, "몇자 이상 입력해주세요."]
    // ["몇자 이상 입력해주세요.", undefined, ]
    // ["몇자 이상 입력해주세요.", "반드시 입력해주세요.", ]
    //     [undefined, undefined]
      const errorMessage = errorMessages.find((v) => v !== undefined);
      setError({ ...error, [props.source]: errorMessage });
    },
    [values, props.source, props.validate, setError, setValues]
  );

  return { value: values[props.source], onChange, error };
}

export default useInput;

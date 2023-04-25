import { InputProps } from "../types/InputProps";
import { useCallback, useContext } from "react";
import { FormContext } from "../components/SimpleForm";

interface UseInputProps extends Pick<InputProps, "source" | "validate"> {}

interface StringValidator {
  (value: string): string | undefined;
}

interface BooleanValidator {
  (value: boolean): string | undefined;
}

type Validator = StringValidator | BooleanValidator;

function useInput(props: UseInputProps) {
  const { setValues, values, error, setError } = useContext(FormContext);

  const onChange = useCallback(
    (value: string | boolean) => {
      setValues({
        ...values,
        [props.source]: value,
      });

      const errorMessage = props.validate
        .map((validator: Validator) =>
          typeof value === "string"
            ? (validator as StringValidator)(value)
            : (validator as BooleanValidator)(value)
        )
        .filter((message) => message)
        .join(", ");

      setError({ ...error, [props.source]: errorMessage });
    },
    [values, props.source, props.validate, setError, setValues]
  );

  return { value: values[props.source], onChange, error };
}

export default useInput;

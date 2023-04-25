import { createContext, PropsWithChildren, useMemo, useState } from "react";

type Error = Record<string, string | undefined>;
export type Value = Record<string, string | undefined | boolean>;

type FormContextType = {
  setValues: (v: Value) => void;
  values: Value;
  error: Error;
  setError: (errorMessage: Error) => void;
};

export const FormContext = createContext<FormContextType>({
  setValues: (v: Value) => {},
  values: {} as Value,
  error: {} as Error,
  setError: (errorMessage: Error) => {},
});

const SimpleForm = ({ children }: PropsWithChildren<{}>) => {
  const [values, setValues] = useState<Value>({
    name: "",
    password: "",
    sex: undefined,
    checkbox: undefined,
  });
  const [error, setError] = useState<Error>({
    name: undefined,
    password: undefined,
    sex: undefined,
    checkbox: undefined,
  });

  const value = useMemo(
    () => ({ setValues, values, error, setError }),
    [setValues, values, error, setError]
  );

  const onClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log(error);

    const isValid = (obj: Error) => {
      return Object.values(obj).every((value) => value === "");
    };

    if (isValid(error)) {
      alert(JSON.stringify(values));
      setValues({
        name: "",
        password: "",
        sex: undefined,
        checkbox: undefined,
      });
    } else {
      alert("제출 실패");
    }
  };

  return (
    <FormContext.Provider value={value}>
      <form>
        {children}
        <button type={"submit"} onClick={onClick}>
          제출
        </button>
      </form>
    </FormContext.Provider>
  );
};

export default SimpleForm;

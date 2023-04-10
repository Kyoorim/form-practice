import { createContext, PropsWithChildren, useMemo, useState } from "react";

type Error = Record<string, string | undefined>

type FormContextType = {
  setValues: (v: Record<string, string | number>) => void;
  values: Record<string, string | number>;
  error: Error;
  setError: (errorMessage: Error) => void;
};

export const FormContext = createContext<FormContextType>({
  setValues: (v: Record<string, string | number>) => {},
  values: {} as Record<string, string | number>,
  error: {} as Error,
  setError: (errorMessage: Error) => {},
});

const SimpleForm = ({ children }: PropsWithChildren<{}>) => {
  const [values, setValues] = useState<Record<string, any>>({});
  const [error, setError] = useState<Error>({
    name: undefined,
    password: undefined,
  });

  const value = useMemo(
    () => ({ setValues, values, error, setError }),
    [setValues, values, error, setError]
  );

  const onClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    const isValid = errors.length === 0;

    if (isValid) {
      alert(JSON.stringify(values));
      setError(false);
      setValues({});
    } else {
      alert("제출 실패");
      setError(true);
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

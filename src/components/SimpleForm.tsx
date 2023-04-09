import { createContext, PropsWithChildren, useMemo, useState } from "react";

type FormContextType = {
  setValues: (v: Record<string, string | number>) => void;
  values: Record<string, string | number>;
  error: boolean;
  setError: (errorMessage: boolean) => void;
};

export const FormContext = createContext<FormContextType>({
  setValues: (v: Record<string, string | number>) => {},
  values: {} as Record<string, string | number>,
  error: false,
  setError: (errorMessage: boolean) => {},
});

const SimpleForm = ({ children }: PropsWithChildren<{}>) => {
  const [values, setValues] = useState<Record<string, any>>({});
  const [error, setError] = useState(false);

  const value = useMemo(
    () => ({ setValues, values, error, setError }),
    [setValues, values, error, setError]
  );

  const onClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    const errors = (children as any)
      .map((child: any) => {
        const key = child.props.source;
        const value = values[key];
        const validateFuncs = child.props.validate || [];
        return validateFuncs.map((validateFunc: any) => validateFunc(value));
      })
      .flat()
      .filter(Boolean);

    console.log(errors);

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

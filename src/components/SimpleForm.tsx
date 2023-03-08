import { createContext, PropsWithChildren, useMemo, useState } from "react";

export const FormContext = createContext({
  setValues: (v: any) => {},
  values: {} as Record<string, any>,
  error: true || false,
});

const SimpleForm = ({ children }: PropsWithChildren<{}>) => {
  const [values, setValues] = useState({});
  const [error, setError] = useState(false);

  const value = useMemo(
    () => ({ setValues, values, error }),
    [setValues, values, error]
  );

  const onClick = (e: any) => {
    e.preventDefault();
    const isValid = Object.values(values as Record<string, string>).every(
      (value) => value.length >= 5 && value.length <= 10
    );
    // console.log(isValid);

    if (isValid) {
      alert(JSON.stringify(values));
      setValues("");
    } else {
      alert("제출 실패");
      setError(true);
      setValues("");
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

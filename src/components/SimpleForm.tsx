import { createContext, PropsWithChildren, useMemo, useState } from "react";

export const FormContext = createContext({
  setValues: (v: any) => {},
  values: {} as Record<string, any>,
  error: true || false,
});

const SimpleForm = ({ children }: PropsWithChildren<{}>) => {
  const [values, setValues] = useState({
    name: "",
    password: "",
    checkbox: false,
  });
  const [error, setError] = useState(false);

  const value = useMemo(
    () => ({ setValues, values, error }),
    [setValues, values, error]
  );

  const onClick = (e: any) => {
    e.preventDefault();

    const isValid =
      values.name.length >= 5 &&
      values.name.length <= 10 &&
      values.password.length >= 5 &&
      values.password.length <= 10 &&
      typeof values.checkbox === "boolean";

    if (isValid) {
      alert(JSON.stringify(values));
      setValues({
        name: "",
        password: "",
        checkbox: false,
      });
    } else {
      alert("제출 실패");
      setError(true);
      setValues({
        name: "",
        password: "",
        checkbox: false,
      });
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

import { createContext, PropsWithChildren, useMemo, useState } from "react";

type Error = Record<string, string | undefined>;

type FormContextType = {
  setValues: (v: Record<string, string>) => void;
  values: Record<string, string | undefined>;
  error: Error;
  setError: (errorMessage: Error) => void;
};

export const FormContext = createContext<FormContextType>({
  setValues: (v: Record<string, string>) => {},
  values: {} as Record<string, string>,
  error: {} as Error,
  setError: (errorMessage: Error) => {},
});

const SimpleForm = ({ children }: PropsWithChildren<{}>) => {
  const [values, setValues] = useState<Record<string, string | undefined>>({
    name: "",
    password: "",
    sex: undefined,
  });
  const [error, setError] = useState<Error>({
    name: undefined,
    password: undefined,
    sex: "성별을 선택해주세요",
  });

  const value = useMemo(
    () => ({ setValues, values, error, setError }),
    [setValues, values, error, setError]
  );
  console.log("values -->", values);
  console.log("values.sex -->", values.sex);

  const onClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    const isValid =
      (!error?.name || error?.name.trim() === "") &&
      (!error?.password || error?.password.trim() === "") &&
      values.sex !== undefined;

    if (isValid) {
      alert(JSON.stringify(values));
      setValues({});
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

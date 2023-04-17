import SelectboxField, { notDefaultValue } from "../components/SelectBoxField";
import SimpleForm from "../components/SimpleForm";
import TextField, { min, max } from "../components/TextField";

function UserInfoForm(): JSX.Element {
  return (
    <SimpleForm>
      <TextField validate={[min(3), max(5)]} source={"name"} label={"이름"} />
      <TextField
        validate={[min(6), max(10)]}
        type="password"
        source={"password"}
        label={"비밀번호"}
      />
      <SelectboxField
        label={"성별"}
        source={"sex"}
        validate={notDefaultValue("성별")}
      />
    </SimpleForm>
  );
}

export default UserInfoForm;

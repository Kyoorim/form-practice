import CheckboxField from "../components/CheckboxField";
import SelectboxField from "../components/SelectBoxField";
import SimpleForm from "../components/SimpleForm";
import TextField, { min, max } from "../components/TextField";

function UserInfoForm(): JSX.Element {
  return (
    <SimpleForm>
      <TextField validate={[min(5), max(10)]} source={"name"} label={"이름"} />
      <TextField
        validate={[min(5), max(10)]}
        type="password"
        source={"password"}
        label={"비밀번호"}
      />
      <CheckboxField
        label={"개인정보 제공에 동의합니다"}
        type="checkbox"
        source={"checkbox"}
      />
      <SelectboxField label={"성별"} source={"sex"} />
    </SimpleForm>
  );
}

export default UserInfoForm;

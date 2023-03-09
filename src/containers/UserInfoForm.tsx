import CheckboxField from "../components/CheckboxField";
import SimpleForm from "../components/SimpleForm";
import TextField, { min, max } from "../components/TextField";

function UserInfoForm(): JSX.Element {
  const handleCheckboxChange = (isChecked: boolean) => {
    console.log("Checkbox is checked: ", isChecked);
  };

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
        label="개인정보 제공에 동의합니다"
        type="checkbox"
        source={"checkbox"}
        onChange={handleCheckboxChange}
      />
    </SimpleForm>
  );
}

export default UserInfoForm;

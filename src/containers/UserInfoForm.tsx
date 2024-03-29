import SelectboxField from "../components/SelectBoxField";
import SimpleForm from "../components/SimpleForm";
import TextField from "../components/TextField";
import CheckboxField from "../components/CheckBoxField";
import { isChecked, max, min, required } from "../validation";

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
        validate={[required("성별을 선택해주세요")]}
        options={[
          { value: "성별", label: "성별" },
          { value: "남성", label: "남성" },
          { value: "여성", label: "여성" },
        ]}
      />
      <CheckboxField
        label={"개인정보 제공에 동의합니다"}
        type="checkbox"
        source={"checkbox"}
        validate={[isChecked("개인정보 제공에 동의 체크해주세요")]}
      />
    </SimpleForm>
  );
}

export default UserInfoForm;

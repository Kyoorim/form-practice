import SelectboxField from "../components/SelectBoxField";
import SimpleForm from "../components/SimpleForm";
import TextField from "../components/TextField";
import { max, min, required } from "../validation";

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
    </SimpleForm>
  );
}

export default UserInfoForm;

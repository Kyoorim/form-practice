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
    </SimpleForm>
  );
}

export default UserInfoForm;
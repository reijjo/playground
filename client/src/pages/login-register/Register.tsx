import "./Register.css";

import { FlexContainer } from "../../components/container/FlexContainer";
import { TextInput } from "../../components/inputs/TextInput";

export const Register = () => {
  return (
    <div className="register-page">
      <FlexContainer width="min">
        <h1>Register</h1>
        <TextInput
          name="nimi"
          id="id"
          labelText="email"
          placeholder="Hi im placeholder"
        />
      </FlexContainer>
    </div>
  );
};

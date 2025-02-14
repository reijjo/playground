import "./Register.css";

import { useFormStatus } from "react-dom";

import { Button } from "../../components/buttons/Button";
import { FlexContainer } from "../../components/container/FlexContainer";
import { TextInput } from "../../components/inputs/TextInput";

export const Register = () => {
  const { pending } = useFormStatus();

  const handleRegister = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Registering...");
  };

  return (
    <div className="register-page">
      <FlexContainer width="s">
        <h1>Register</h1>
        <form className="register-form" onSubmit={handleRegister}>
          <TextInput
            name="nimi"
            id="nimi-id"
            labelText="username"
            placeholder="Hi im placeholder"
          />
          <TextInput
            name="salasana"
            id="salasana-id"
            labelText="password"
            type="password"
            placeholder="Hi im placeholder"
          />
          <Button
            type="submit"
            className="register-button"
            children={pending ? "Registering..." : "Register"}
            disabled={pending}
          />
        </form>
      </FlexContainer>
    </div>
  );
};

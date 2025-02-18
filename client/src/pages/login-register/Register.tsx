import "./Register.css";

import { ChangeEvent, useState } from "react";

import { Button, FlexContainer, TextInput } from "../../components";
import { Toast } from "../../components/toast/Toast";
import { useRegisterMutation } from "../../features/api/authApi";
import { initialLoginRegisterForm } from "../../utils/initialValues";
import { LoginRegisterForm } from "../../utils/types";

export const Register = () => {
  const [credentials, setCredentials] = useState<LoginRegisterForm>(
    initialLoginRegisterForm,
  );

  const [register, { isLoading }] = useRegisterMutation();

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCredentials((prev) => ({ ...prev, [name]: value }));
  };

  const handleRegister = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const response = await register(credentials).unwrap();
      console.log("RESPONSE", response);
      setCredentials(initialLoginRegisterForm);
    } catch (error) {
      console.log("ERROR", error);
    }
  };

  return (
    <div className="register-page">
      <FlexContainer width="m">
        <h1>Register</h1>
        <form className="register-form" onSubmit={handleRegister}>
          <TextInput
            name="username"
            id="username"
            labelText="username"
            placeholder="Your username"
            onChange={handleInputChange}
          />
          <TextInput
            name="password"
            id="password"
            labelText="password"
            type="password"
            placeholder="Your password"
            onChange={handleInputChange}
          />
          <Button
            type="submit"
            className="register-button"
            children={isLoading ? "Registering..." : "Register"}
            disabled={isLoading}
          />
        </form>
      </FlexContainer>
      <Toast />
    </div>
  );
};

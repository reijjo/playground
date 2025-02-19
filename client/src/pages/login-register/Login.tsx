import "./Register.css";

import { ChangeEvent, useState } from "react";

import { useNavigate } from "react-router";

import { Button, FlexContainer, TextInput } from "../../components";
import { Toast } from "../../components/toast/Toast";
import {
  useGetSessionUserQuery,
  useLoginMutation,
} from "../../features/api/authApi";
import { loginUser } from "../../features/slices/authSlice";
import { useAppDispatch } from "../../store/hooks";
import { initialLoginRegisterForm } from "../../utils/initialValues";
import { LoginRegisterForm } from "../../utils/types";

export const Login = () => {
  const [credentials, setCredentials] = useState<LoginRegisterForm>(
    initialLoginRegisterForm,
  );

  const { refetch } = useGetSessionUserQuery();
  const [login, { isLoading, error }] = useLoginMutation();

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCredentials((prev) => ({ ...prev, [name]: value }));
  };

  const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const response = await login(credentials).unwrap();
      if (response.success) {
        const sessionResult = await refetch().unwrap();

        console.log("SESSION RESULT", sessionResult);

        if (sessionResult.success && sessionResult.data) {
          dispatch(loginUser(sessionResult.data));
          navigate("/");
        }
      }
      console.log("RESPONSE", response);
      setCredentials(initialLoginRegisterForm);
    } catch (error) {
      console.log("ERROR", error);
    }
  };

  console.log("ERROR", error);

  return (
    <div className="register-page">
      <FlexContainer width="m">
        <h1>Login</h1>
        <form className="register-form" onSubmit={handleLogin}>
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
            children={isLoading ? "Logging in..." : "Login"}
            disabled={isLoading}
          />
        </form>
      </FlexContainer>
      <Toast />
    </div>
  );
};

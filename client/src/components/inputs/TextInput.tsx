import "./TextInput.css";

import { InputHTMLAttributes } from "react";

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  id: string;
  labelText: string;
}

export const TextInput = ({
  name,
  id,
  labelText,
  ...props
}: TextInputProps) => {
  return (
    <div className="input-text-group">
      <label htmlFor={id}>{labelText}</label>
      <input type="text" name={name} id={id} {...props} />
    </div>
  );
};

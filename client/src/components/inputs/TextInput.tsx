import "./TextInput.css";

import { CSSProperties, InputHTMLAttributes } from "react";

const SizeOptions = {
  min: "min-content",
  s: "25%",
  m: "50%",
  l: "75%",
  xl: "100%",
  max: "max-content",
} as const;

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  id: string;
  labelText: string;
  width?: keyof typeof SizeOptions | CSSProperties["width"];
}

export const TextInput = ({
  name,
  id,
  labelText,
  width = "m",
  style,
  ...props
}: TextInputProps) => {
  const combinedStyles = {
    width:
      width in SizeOptions
        ? SizeOptions[width as keyof typeof SizeOptions]
        : width,
    ...style,
  };

  return (
    <div className="input-text-group" style={combinedStyles}>
      <label htmlFor={id}>{labelText}</label>
      <input type="text" name={name} id={id} {...props} />
    </div>
  );
};

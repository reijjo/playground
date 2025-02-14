import "./Button.css";

import { HTMLAttributes, ReactNode } from "react";

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  type: "button" | "submit" | "reset";
  className?: string;
  children: ReactNode;
  disabled?: boolean;
}

export const Button = ({
  type = "button",
  className = "",
  children,
  disabled = false,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={`btn btn-filled ${className}`.trim()}
      type={type}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

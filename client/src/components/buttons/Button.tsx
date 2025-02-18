import "./Button.css";

import { CSSProperties, HTMLAttributes, ReactNode } from "react";

const SizeOptions = {
  min: "min-content",
  s: "25%",
  m: "50%",
  l: "75%",
  xl: "100%",
  max: "max-content",
} as const;

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  type: "button" | "submit" | "reset";
  className?: string;
  children: ReactNode;
  disabled?: boolean;
  width?: keyof typeof SizeOptions | CSSProperties["width"];
}

export const Button = ({
  type = "button",
  className = "",
  children,
  disabled = false,
  width = "m",
  style,
  ...props
}: ButtonProps) => {
  const combinedStyles = {
    width:
      width in SizeOptions
        ? SizeOptions[width as keyof typeof SizeOptions]
        : width,
    ...style,
  };

  return (
    <button
      className={`btn btn-filled ${className}`.trim()}
      style={combinedStyles}
      type={type}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

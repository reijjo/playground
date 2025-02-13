import "./FlexContainer.css";

import { CSSProperties, HTMLAttributes, ReactNode } from "react";

const SizeOptions = {
  min: "min-content",
  s: "25%",
  m: "50%",
  l: "75%",
  xl: "100%",
  max: "max-content",
} as const;

interface FlexContainerProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  flexDirection?: CSSProperties["flexDirection"];
  padding?: CSSProperties["padding"];
  margin?: CSSProperties["margin"];
  gap?: CSSProperties["gap"];
  alignItems?: CSSProperties["alignItems"];
  justifyContent?: CSSProperties["justifyContent"];
  borderRadius?: CSSProperties["borderRadius"];
  width?: keyof typeof SizeOptions | CSSProperties["width"];
}

export const FlexContainer = ({
  children,
  flexDirection = "column",
  padding = "1rem",
  margin,
  gap,
  alignItems,
  justifyContent,
  borderRadius,
  width = "m",
  style,
  ...props
}: FlexContainerProps) => {
  const combinedStyles = {
    flexDirection,
    padding,
    margin,
    gap,
    alignItems,
    justifyContent,
    borderRadius,
    width:
      width in SizeOptions
        ? SizeOptions[width as keyof typeof SizeOptions]
        : width,
    ...style,
  };

  return (
    <div className="flex-container" style={combinedStyles} {...props}>
      {children}
    </div>
  );
};

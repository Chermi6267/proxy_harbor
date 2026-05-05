import { forwardRef, InputHTMLAttributes } from "react";
import "./styles.css";

type Props = InputHTMLAttributes<HTMLInputElement>;

export const DefaultInput = forwardRef<HTMLInputElement, Props>(
  ({ className, ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={`bottom-border-input ${className || ""}`}
        {...props}
      />
    );
  },
);

DefaultInput.displayName = "DefaultInput";

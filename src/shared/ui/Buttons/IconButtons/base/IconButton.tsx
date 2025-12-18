import type { BaseIconButtonProps } from "../types/IconButtonProps";
import "../styles/style.css";

function IconButton({
  onClick,
  isSuccess,
  isLoading,
  children,
  className,
}: BaseIconButtonProps) {
  return (
    <button onClick={onClick} className={`tick_btn ${className}`}>
      {children}
    </button>
  );
}

export default IconButton;

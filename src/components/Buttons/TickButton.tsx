import { ReactNode } from "react";
import "./style.css";

type Props = {
  onClick: () => void;
  isSuccess: boolean;
  isLoading: boolean;
  children: ReactNode;
};

function TickButton({ onClick, isSuccess, isLoading, children }: Props) {
  return (
    <button onClick={onClick} className={`tick_btn`}>
      {children}
    </button>
  );
}

export default TickButton;

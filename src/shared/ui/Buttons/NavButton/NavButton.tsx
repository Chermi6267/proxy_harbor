import "./style.css";

type Props = {
  text: string;
  onClick: () => void;
  isActive: boolean;
  disabled?: boolean;
};

function NavButton({ text, onClick, isActive, disabled }: Props) {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`${isActive ? "active" : ""} nav_button`}
    >
      {text}
    </button>
  );
}

export default NavButton;

import "./style.css";

type Props = {
  text: string;
  onClick: () => void;
  isActive: boolean;
};

function NavButton({ text, onClick, isActive }: Props) {
  return (
    <button
      onClick={onClick}
      className={`${isActive ? "active" : ""} nav_button`}
    >
      {text}
    </button>
  );
}

export default NavButton;

import IconButton from "./base/IconButton";
import type { IconButtonProps } from "./types/IconButtonProps";

function AcceptButton(data: IconButtonProps) {
  return (
    <IconButton {...data}>
      <svg viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M27.25 8.2041L27.1914 8.27441L12.793 25.4346C12.003 26.3757 10.5632 26.5006 9.62207 25.7109L2.83887 20.0195L2.75 19.9443V16.6826L3.16113 17.0273L11.0371 23.6357L26.8086 4.83887L27.25 4.31348V8.2041Z"
          fill="#65CC65"
          stroke="#65CC65"
          strokeWidth="0.5"
        />
      </svg>
    </IconButton>
  );
}

export default AcceptButton;

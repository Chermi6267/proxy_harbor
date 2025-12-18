import IconButton from "./base/IconButton";
import type { IconButtonProps } from "./types/IconButtonProps";

function DenyButton(data: IconButtonProps) {
  return (
    <IconButton {...data}>
      <svg viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M26 7.37012L17.1025 14.5L26 21.6299V25L14.999 16.1846L4 24.999V21.6289L12.8965 14.5L4 7.37109V4.00098L14.999 12.8154L26 4V7.37012Z"
          fill="#CC6666"
        />
      </svg>
    </IconButton>
  );
}

export default DenyButton;

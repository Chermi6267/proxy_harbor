import { useRef, useState } from "react";
import IconButton from "./base/IconButton";
import type { IconButtonProps } from "./types/IconButtonProps";
import { useHover } from "@/shared/hooks/useHover";
import { useAcceptButtonAnimation } from "./hooks/useAcceptButtonAnimation";

function AcceptButton({ isLoading, ...rest }: IconButtonProps) {
  const [isHover, setIsHover] = useState(false);

  const ref = useRef<SVGSVGElement | null>(null);
  useAcceptButtonAnimation({ ref, isHover, isLoading });
  useHover({ ref, setState: setIsHover });

  return (
    <IconButton {...rest}>
      <svg ref={ref} viewBox="0 0 30 30">
        <g id="dots">
          <circle className="dot" cx="5" cy="15" r="3" />
          <circle className="dot" cx="15" cy="15" r="3" />
          <circle className="dot" cx="25" cy="15" r="3" />
        </g>

        <path
          id="initial"
          d="M27.25 8.2041L27.1914 8.27441L12.793 25.4346C12.003 26.3757 10.5632 26.5006 9.62207 25.7109L2.83887 20.0195L2.75 19.9443V16.6826L3.16113 17.0273L11.0371 23.6357L26.8086 4.83887L27.25 4.31348V8.2041Z"
        />

        <path
          id="deny"
          d="M26 7.37012L17.1025 14.5L26 21.6299V25L14.999 16.1846L4 24.999V21.6289L12.8965 14.5L4 7.37109V4.00098L14.999 12.8154L26 4V7.37012Z"
          opacity="0"
        />
      </svg>
    </IconButton>
  );
}

export default AcceptButton;

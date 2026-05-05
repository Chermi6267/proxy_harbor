import { useRef, useState } from "react";
import IconButton from "../base/IconButton";
import type { IconButtonProps } from "../types/IconButtonProps";
import { useHover } from "@/shared/hooks/useHover";
import { useAcceptButtonAnimation } from "../hooks/useAcceptButtonAnimation";
import { ACCEPT_COLOR, DENY_COLOR, SUB_COLOR_1 } from "@/shared/styles/colors";

const DENY_PATH_D =
  "M26 7.37012L17.1025 14.5L26 21.6299V25L14.999 16.1846L4 24.999V21.6289L12.8965 14.5L4 7.37109V4.00098L14.999 12.8154L26 4V7.37012Z";

export interface AnimatedIconButtonProps extends IconButtonProps {
  initialPathId: string;
  initialPathD: string;
  acceptColor?: string;
  denyColor?: string;
  dotsColor?: string;
}

function AnimatedIconButton({
  isLoading,
  initialPathId,
  initialPathD,
  acceptColor = ACCEPT_COLOR,
  denyColor = DENY_COLOR,
  dotsColor = SUB_COLOR_1,
  ...rest
}: AnimatedIconButtonProps) {
  const [isHover, setIsHover] = useState(false);
  const ref = useRef<SVGSVGElement | null>(null);

  useAcceptButtonAnimation({
    ref,
    isHover,
    isLoading,
    initialElementId: initialPathId,
    acceptColor,
    denyColor,
    dotsColor,
  });
  useHover({ ref, setState: setIsHover });

  return (
    <IconButton {...rest}>
      <svg ref={ref} viewBox="0 0 30 30">
        <g id="dots">
          <circle className="dot" cx="5" cy="15" r="3" />
          <circle className="dot" cx="15" cy="15" r="3" />
          <circle className="dot" cx="25" cy="15" r="3" />
        </g>

        <path id={initialPathId} d={initialPathD} />

        <path id="deny" d={DENY_PATH_D} opacity="0" />
      </svg>
    </IconButton>
  );
}

export default AnimatedIconButton;

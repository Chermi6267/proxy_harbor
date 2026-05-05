import { DENY_COLOR } from "@/shared/styles/colors";
import AnimatedIconButton from "./base/AnimatedIconButton";

export default function CrossButton(props: any) {
  return (
    <AnimatedIconButton
      {...props}
      acceptColor={DENY_COLOR}
      initialPathId="initialAccessButton"
      initialPathD="M26 7.37012L17.1025 14.5L26 21.6299V25L14.999 16.1846L4 24.999V21.6289L12.8965 14.5L4 7.37109V4.00098L14.999 12.8154L26 4V7.37012Z"
    />
  );
}

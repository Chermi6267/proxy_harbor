import { ReactNode } from "react";

export type IconButtonProps = {
  onClick: () => void;
  isSuccess?: boolean;
  isLoading?: boolean;
  className?: string;
};

export type BaseIconButtonProps = IconButtonProps & {
  children: ReactNode;
};

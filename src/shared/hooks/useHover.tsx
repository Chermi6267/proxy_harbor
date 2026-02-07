import React, { useEffect } from "react";

type useHoverProps = {
  ref: React.RefObject<Element | null>;
  setState: React.Dispatch<React.SetStateAction<boolean>>;
};

export const useHover = ({ ref, setState }: useHoverProps) => {
  useEffect(() => {
    if (!ref.current) return;
    const el = ref.current;

    const onEnter = () => setState(true);
    const onLeave = () => setState(false);

    el.addEventListener("pointerenter", onEnter);
    el.addEventListener("pointerleave", onLeave);

    return () => {
      el.removeEventListener("pointerenter", onEnter);
      el.removeEventListener("pointerleave", onLeave);
    };
  }, []);
};

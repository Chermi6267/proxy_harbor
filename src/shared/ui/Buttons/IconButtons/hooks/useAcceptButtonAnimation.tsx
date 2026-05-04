import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import { ACCEPT_COLOR, DENY_COLOR, SUB_COLOR_1 } from "@/shared/styles/colors";

type useAcceptButtonAnimationProps = {
  ref: React.RefObject<Element | null>;
  isHover: boolean;
  isLoading: boolean | undefined;
};

export const useAcceptButtonAnimation = ({
  ref,
  isHover,
  isLoading,
}: useAcceptButtonAnimationProps) => {
  const tlMorph = useRef<gsap.core.Timeline | null>(null);
  const tlMorphDots = useRef<gsap.core.Timeline | null>(null);
  const tlAnimateDots = useRef<gsap.core.Timeline | null>(null);

  useGSAP(
    () => {
      const tlMorphConfig = { duration: 0.8, ease: "elastic.inOut" };
      tlMorph.current = gsap.timeline({ paused: true });
      tlMorph.current.fromTo(
        "#initial",
        {
          morphSVG: "#initial",
          fill: ACCEPT_COLOR,
          stroke: ACCEPT_COLOR,
          ...tlMorphConfig,
        },
        {
          morphSVG: "#deny",
          fill: DENY_COLOR,
          stroke: DENY_COLOR,
          ...tlMorphConfig,
        },
      );

      const tlMorphDotsConfig = {
        duration: 0.4,
        ease: "elastic.inOut",
        fill: SUB_COLOR_1,
        stroke: SUB_COLOR_1,
      };
      tlMorphDots.current = gsap.timeline({ paused: true });
      tlMorphDots.current.fromTo(
        "#dots",
        {
          opacity: 0,
          ...tlMorphDotsConfig,
        },
        {
          opacity: 1,
          ...tlMorphDotsConfig,
        },
      );

      const tlAnimateDotsConfig = {
        yoyo: true,
        repeat: -1,
        stagger: 0.15,
        duration: 0.5,
        ease: "bounce.out",
      };
      tlAnimateDots.current = gsap.timeline({ paused: true });
      tlAnimateDots.current.fromTo(
        "#dots .dot",
        {
          translateY: 0,
          ...tlAnimateDotsConfig,
        },
        { translateY: 5, ...tlAnimateDotsConfig },
      );
    },
    { scope: ref },
  );

  const animateDots = (needAnimate: boolean) => {
    if (needAnimate) {
      gsap.to("#initial", { opacity: 0 });
      gsap.to("#dots", { opacity: 1 });
      tlAnimateDots.current?.play();
    } else {
      gsap.set("#initial", { opacity: 1 });
      gsap.set("#dots", { opacity: 0 });
      tlAnimateDots.current?.pause(0);
    }
  };

  useGSAP(
    () => {
      if (!tlMorph.current || !tlMorphDots.current) return;

      const playMorph = () => tlMorph.current!.play();
      const reverseMorph = () => tlMorph.current!.reverse();
      const playDots = (show: boolean) => animateDots(show);
      const playMorphDots = () => tlMorphDots.current!.play();
      const updateInitialColor = (hover: boolean) => {
        gsap.to("#initial", {
          fill: hover ? SUB_COLOR_1 : ACCEPT_COLOR,
          stroke: hover ? SUB_COLOR_1 : ACCEPT_COLOR,
        });
      };

      if (isLoading) {
        if (isHover) {
          playMorph();
          playDots(false);
        } else {
          playDots(true);
          playMorphDots();
        }
      } else {
        playDots(false);
        reverseMorph();
        updateInitialColor(isHover);
      }
    },
    { scope: ref, dependencies: [isLoading, isHover] },
  );
};

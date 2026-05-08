import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

type useAcceptButtonAnimationProps = {
  ref: React.RefObject<Element | null>;
  isHover: boolean;
  isLoading: boolean | undefined;
  initialElementId: string;
  acceptColor: string;
  denyColor: string;
  dotsColor: string;
};

export const useAcceptButtonAnimation = ({
  ref,
  isHover,
  isLoading,
  initialElementId,
  acceptColor,
  denyColor,
  dotsColor,
}: useAcceptButtonAnimationProps) => {
  const tlMorph = useRef<gsap.core.Timeline | null>(null);
  const tlMorphDots = useRef<gsap.core.Timeline | null>(null);
  const tlAnimateDots = useRef<gsap.core.Timeline | null>(null);

  useGSAP(
    () => {
      const tlMorphConfig = { duration: 0.8, ease: "elastic.inOut" };
      tlMorph.current = gsap.timeline({ paused: true });
      tlMorph.current.fromTo(
        "#" + initialElementId,
        {
          morphSVG: "#" + initialElementId,
          fill: acceptColor,
          stroke: acceptColor,
          ...tlMorphConfig,
        },
        {
          morphSVG: "#deny",
          fill: denyColor,
          stroke: denyColor,
          ...tlMorphConfig,
        },
      );

      const tlMorphDotsConfig = {
        duration: 0.4,
        ease: "elastic.inOut",
        fill: dotsColor,
        stroke: dotsColor,
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
      gsap.to("#" + initialElementId, { opacity: 0 });
      gsap.to("#dots", { opacity: 1 });
      tlAnimateDots.current?.play();
    } else {
      gsap.set("#" + initialElementId, { opacity: 1 });
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
        gsap.to("#" + initialElementId, {
          fill: hover ? dotsColor : acceptColor,
          stroke: hover ? dotsColor : acceptColor,
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

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import NavButton from "@/shared/ui/Buttons/NavButton/NavButton";
import "../styles/styles.css";
import Form from "./Form";

interface ProxyFormProps {}

export default function ProxyForm({}: ProxyFormProps) {
  const [isOpen, setIsOpen] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const ctx = useRef<gsap.Context | null>(null);

  useEffect(() => {
    ctx.current = gsap.context(() => {
      if (!isOpen) {
        gsap.set(contentRef.current, {
          height: 0,
          opacity: 0,
          marginTop: 0,
          overflow: "hidden",
        });
      }
    }, formRef);

    return () => ctx.current?.revert();
  }, []);

  useEffect(() => {
    if (!contentRef.current) return;

    if (isOpen) {
      gsap.to(contentRef.current, {
        height: "auto",
        opacity: 1,
        marginTop: "16px",
        duration: 0.4,
        ease: "power4.inOut",
        onStart: () => {
          gsap.set(contentRef.current, {
            height: contentRef.current?.scrollHeight,
            overflow: "hidden",
          });
        },
        onComplete: () => {
          gsap.set(contentRef.current, {
            height: "auto",
            overflow: "visible",
          });
        },
      });
    } else {
      gsap.to(contentRef.current, {
        height: 0,
        opacity: 0,
        marginTop: 0,
        duration: 0.3,
        ease: "power4.inOut",
        overflow: "hidden",
      });
    }
  }, [isOpen]);

  const handleToggle = () => setIsOpen((prev) => !prev);

  return (
    <section className="proxy_form_wrapper" ref={formRef}>
      <NavButton
        text={isOpen ? "Close Form" : "Add new proxy"}
        onClick={handleToggle}
        isActive={isOpen}
      />

      <div ref={contentRef} className="proxy_form_content_wrapper">
        <Form />
      </div>
    </section>
  );
}

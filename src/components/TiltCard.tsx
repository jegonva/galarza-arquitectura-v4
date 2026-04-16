"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function TiltCard({ children, className }: { children: React.ReactNode, className?: string }) {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const onMouseMove = (e: MouseEvent) => {
      const { left, top, width, height } = card.getBoundingClientRect();
      const x = (e.clientX - left) / width - 0.5;
      const y = (e.clientY - top) / height - 0.5;

      gsap.to(card, {
        rotateY: x * 15,
        rotateX: -y * 15,
        transformPerspective: 1000,
        duration: 0.5,
        ease: "power2.out"
      });
    };

    const onMouseLeave = () => {
      gsap.to(card, {
        rotateY: 0,
        rotateX: 0,
        duration: 0.8,
        ease: "elastic.out(1, 0.3)"
      });
    };

    card.addEventListener("mousemove", onMouseMove);
    card.addEventListener("mouseleave", onMouseLeave);

    return () => {
      card.removeEventListener("mousemove", onMouseMove);
      card.removeEventListener("mouseleave", onMouseLeave);
    };
  }, []);

  return (
    <div ref={cardRef} className={className} style={{ transition: "transform 0.1s ease-out", width: "100%", height: "100%" }}>
      {children}
    </div>
  );
}

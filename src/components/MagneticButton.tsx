"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function MagneticButton({ children, className, style }: { children: React.ReactNode, className?: string, style?: React.CSSProperties }) {
  const btnRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const btn = btnRef.current;
    if (!btn) return;

    const onMouseMove = (e: MouseEvent) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      gsap.to(btn, {
        x: x * 0.3,
        y: y * 0.3,
        duration: 0.5,
        ease: "power2.out"
      });
    };

    const onMouseLeave = () => {
      gsap.to(btn, {
        x: 0,
        y: 0,
        duration: 0.5,
        ease: "elastic.out(1, 0.3)"
      });
    };

    btn.addEventListener("mousemove", onMouseMove);
    btn.addEventListener("mouseleave", onMouseLeave);

    return () => {
      btn.removeEventListener("mousemove", onMouseMove);
      btn.removeEventListener("mouseleave", onMouseLeave);
    };
  }, []);

  return (
    <div ref={btnRef} className={className} style={{ ...style, display: "inline-grid", placeItems: "center", position: "relative" }}>
      <div style={{ position: "relative" }}>
        {children}
      </div>
    </div>
  );
}

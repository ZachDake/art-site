"use client";

import { useEffect, useRef } from "react";
import { useTransition } from "./TransitionProvider";
import gsap from "gsap";

export default function Loader() {
  // const { loading } = useTransition();
  const loading = true;

  const panelRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!panelRef.current || !containerRef.current) return;

    if (loading) {
      gsap.set(containerRef.current, {
        opacity: 1,
        pointerEvents: "auto",
      });

      gsap.to(panelRef.current, {
        x: "120%",
        duration: 2,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      });
    } else {
      gsap.killTweensOf(panelRef.current);

      gsap.to(containerRef.current, {
        opacity: 0,
        duration: 0.5,
        pointerEvents: "none",
      });
    }
  }, [loading]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 bg-neutral-50 flex items-center justify-center z-50"
      style={{ opacity: 0 }}
    >
      <div className="relative w-48 h-48 overflow-hidden">

        {/* LOGO */}
        <div className="absolute inset-0 rounded-full overflow-hidden border border-neutral-200 bg-white shadow-sm flex items-center justify-center">
          <img
            src="/images/Lil_Gnocchs_logo.png"
            alt="Artist Logo"
            className="w-full h-full object-contain p-8 rounded-full"
          />
        </div>

        {/* SLIDING MASK */}
        <div
          ref={panelRef}
          className="absolute inset-0 bg-neutral-50"
          style={{ transform: "translateX(-120%) skewX(-12deg)" }}
        />

      </div>
    </div>
  );
}
"use client";

import { useEffect, useState } from "react";

export default function Loader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed inset-0 bg-neutral-900 flex items-center justify-center z-50">
      
      <div className="relative w-32 h-32">

        {/* SVG Logo */}
        <svg viewBox="0 0 100 100" className="w-full h-full text-white">
          <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="3" fill="none"/>
        </svg>

        {/* Reveal Overlay */}
        <div className="absolute inset-0 bg-neutral-900 animate-pulse opacity-70" />

      </div>

    </div>
  );
}
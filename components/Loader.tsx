"use client";

import { useTransition } from "./TransitionProvider";

export default function Loader() {
  const { loading } = useTransition();

  return (
    <div
      className={`fixed inset-0 bg-neutral-900 flex items-center justify-center z-50 transition-opacity duration-500 ${
        loading ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      }`}
    >
      <svg viewBox="0 0 100 100" className="w-24 text-white">
        <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="3" fill="none"/>
      </svg>
    </div>
  );
}
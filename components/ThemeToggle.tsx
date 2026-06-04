"use client";

import { useTheme } from "./ThemeProvider";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="fixed bottom-8 right-8 z-50 h-16 w-16 rounded-full border bg-white shadow-lg"
    >
      {theme === "day" ? "☀️" : "🌙"}
    </button>
  );
}
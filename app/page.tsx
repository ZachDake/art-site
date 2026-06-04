"use client";

import Image from "next/image";
import { useTheme } from "@/components/ThemeProvider";

export default function Home() {
  const { theme } = useTheme();

  return (
    <main
      className={`
        relative min-h-screen transition-colors duration-700
        ${
          theme === "day"
            ? "bg-neutral-50 text-neutral-900"
            : "bg-slate-950 text-white"
        }
      `}
    >
      {/* HERO */}
      <div className="relative h-screen w-full">
        <Image
          src="/images/hero.png"
          alt="Hero artwork"
          fill
          priority
          className="object-cover"
        />

        {/* Optional overlay that changes with theme */}
        <div
          className={`
            absolute inset-0 transition-colors duration-700
            ${
              theme === "day"
                ? "bg-transparent"
                : "bg-slate-950/30"
            }
          `}
        />

        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-white text-6xl font-bold">
            Hero Area
          </h1>
        </div>
      </div>

      {/* PLACEHOLDER STORY SECTION */}
      <section
        className={`
          min-h-screen flex items-center justify-center transition-colors duration-700
          ${
            theme === "day"
              ? "bg-neutral-100"
              : "bg-slate-900"
          }
        `}
      >
        <div
          className={`
            h-64 w-64 rounded-xl transition-colors duration-700
            ${
              theme === "day"
                ? "bg-amber-300"
                : "bg-indigo-500"
            }
          `}
        />
      </section>
    </main>
  );
}
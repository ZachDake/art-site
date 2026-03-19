"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useTransition } from "./TransitionProvider";

export default function Nav() {
  const router = useRouter();
  const { setLoading } = useTransition();

  function handleNav(href) {
    setLoading(true);

    setTimeout(() => {
      router.push(href);
      setTimeout(() => setLoading(false), 600);
    }, 400);
  }

  return (
    <nav className="fixed top-0 left-0 z-40 flex gap-6 p-6">
      <button onClick={() => handleNav("/")}>Home</button>
      <button onClick={() => handleNav("/artwork")}>Artwork</button>
      <button onClick={() => handleNav("/contact")}>Contact</button>
    </nav>
  );
}
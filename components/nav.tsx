import Link from "next/link";

export default function Nav() {
  return (
    <nav className="fixed top-0 left-0 w-full p-6 flex gap-6 text-white z-40">
      <Link href="/">Home</Link>
      <Link href="/artwork">Artwork</Link>
      <Link href="/contact">Contact</Link>
    </nav>
  );
}
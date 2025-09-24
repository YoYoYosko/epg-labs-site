"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function LangSwitch() {
  const path = usePathname() || "/";
  const en = path.startsWith("/en");

  return (
    <div className="flex gap-3 text-sm">
      <Link href="/" className={!en ? "font-semibold" : ""}>NL</Link>
      <Link href="/en" className={en ? "font-semibold" : ""}>EN</Link>
    </div>
  );
}

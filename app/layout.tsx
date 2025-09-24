export const metadata = { title: "EPG Labs" };
import "./globals.css";
import Link from "next/link";
import Image from "next/image";
import LangSwitch from "../components/LangSwitch";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nl">
      <body className="font-sans antialiased ">
<header className="w-screen bg-black text-white">
  <div className="container flex items-center justify-between">
    <Link href="/" className="flex items-center gap-3">
      <Image
        src="/assets/epg-logo.png"
        alt="EPG Labs logo"
        width={100}
        height={40}
        priority
      />
    </Link>
    <LangSwitch />
  </div>
</header>


        {children}
        <footer className="border-t mt-20">
          <div className="container py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-neutral-600">© {new Date().getFullYear()} EPG Labs</p>
            <p className="text-sm text-neutral-500">Bedenken · Produceren · Innoveren</p>
          </div>
        </footer>
      </body>
    </html>
  );
}

"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/works", label: "Works" },
  { href: "/contacts", label: "Contacts" },
];

export default function Navbar() {
  const pathname = usePathname();
  return (
    <nav className="flex items-center justify-between p-5">
      <Link href="/">
        <Image src="/logo.svg" alt="logo" width={150} height={50} />
      </Link>
      <ul className="hidden h-full gap-12 lg:flex">
        {links.map((link) => {
          const active = pathname === link.href;
          return (
            <Link key={link.label} href={link.href} className={active ? "text-red" : ""}>
              {link.label}
            </Link>
          );
        })}
      </ul>
    </nav>
  );
}

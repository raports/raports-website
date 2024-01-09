"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { menu, close } from "@/public/icons";
import { navLinks } from "@/constants";
import NavbarLink from "@/components/NavbarLink";

export default function Navbar() {
  const pathname = usePathname();
  const [toggle, setToggle] = useState(false);
  return (
    <header>
      <nav className="flex items-center justify-between p-5 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex lg:flex-1">
          <Image src="/logo.svg" alt="logo" width={120} height={40} />
        </Link>

        {/* Mobile button */}
        <div className="flex lg:hidden">
          <Image
            src={menu}
            alt="menu"
            width={24}
            height={24}
            onClick={() => setToggle((prev) => !prev)}
          />
        </div>

        {/* Nav links */}
        <ul className="flex items-center gap-8">
          {navLinks.map((link, index) => (
            <li key={index}>
              <NavbarLink href={link.href} label={link.label} />
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

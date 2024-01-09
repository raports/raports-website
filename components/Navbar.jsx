"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { FaTelegramPlane } from "react-icons/fa";
import { navLinks } from "@/constants";
import NavbarLink from "@/components/NavbarLink";

export default function Navbar() {
  const pathname = usePathname();
  const [toggle, setToggle] = useState(false);
  return (
    <header className="flex items-center justify-between h-20 max-width border-b border-peach">
      {/* Logo */}
      <Link href="/" className="flex lg:flex-1">
        <Image src="/logo.svg" alt="logo" width={120} height={40} />
      </Link>

      <nav className="flex items-center justify-between p-5 lg:px-8">
        {/* Nav links */}
        <ul className="flex items-center gap-8">
          {navLinks.map((link, index) => (
            <li key={index}>
              <NavbarLink href={link.href} label={link.label} />
            </li>
          ))}
        </ul>
      </nav>

      <Link href="/contact" className="btn btn-primary">
        <FaTelegramPlane />
        Contact me
      </Link>
    </header>
  );
}

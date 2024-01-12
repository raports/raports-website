"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { BiLogoTelegram } from "react-icons/bi";
import { navLinks } from "@/constants";
import NavbarLink from "@/components/NavbarLink";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  const pathname = usePathname();
  const [toggle, setToggle] = useState(false);
  return (
    <header className="flex items-center justify-between h-20 max-width border-b border-grey-100">
      {/* Logo */}
      <Link href="/" className="flex lg:flex-1">
        <Image src="/logo.svg" alt="logo" width={120} height={40} />
      </Link>

      <nav className="flex items-center justify-between gap-12 max-tablet:hidden">
        {/* Nav links */}
        <ul className="flex items-center gap-8">
          {navLinks.map((link, index) => (
            <li key={index}>
              <NavbarLink href={link.href} label={link.label} />
            </li>
          ))}
        </ul>

        <Link href="/contact" className="btn btn-primary">
          <BiLogoTelegram />
          Contact me
        </Link>
      </nav>

      <MobileMenu />
    </header>
  );
}

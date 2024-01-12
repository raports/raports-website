import React from "react";

import Link from "next/link";
import Image from "next/image";
import { FaTelegramPlane } from "react-icons/fa";
import { navLinks, socialLinks } from "@/constants";
import NavbarLink from "@/components/NavbarLink";

const Footer = () => {
  return (
    <footer className="py-10 border-t border-grey-100 max-width">
      <div className="flex items-center justify-between">
        <Link href="/" className="flex">
          <Image src="/logo.svg" alt="logo" width={120} height={40} />
        </Link>
        <nav className="flex gap-12 max-tablet:hidden">
          {/* Nav links */}
          <ul className="flex items-center gap-8">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavbarLink href={link.href} label={link.label} />
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex gap-1">
          {socialLinks.map((link, index) => (
            <a
              href={link.url}
              key={index}
              className="w-8 h-8 text-blue flex items-center justify-center rounded"
            >
              <link.icon size={24} />
            </a>
          ))}
        </div>
      </div>

      
    </footer>
  );
};

export default Footer;

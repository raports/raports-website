"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavbarLink = ({ href, label, className }) => {
  const pathname = usePathname();

  return (
    <Link
      href={href}
      className={`py-3 text-grey-700 hover:text-blue transition-colors relative block 
      after:block after:absolute after:left-0 after:h-0.5 after:bg-blue after:w-full 
      after:scale-x-0 after:hover:scale-x-100 ${className}
      ${
        pathname === href
          ? "after:scale-x-100"
          : "after:scale-x-0"
      }
      `}
    >
      {label}
    </Link>
  );
};

export default NavbarLink;

"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

import { menu, close } from "@/public/icons";

const links = [
  { href: "/", label: "Home" },
  { href: "/works", label: "Works" },
  { href: "/contacts", label: "Contacts" },
];

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
        <div className="hidden lg:flex lg:gap-x-12">
          {links.map((link) => {
            return (
              <Link key={link.label} href={link.href}>
                {link.label}
              </Link>
            );
          })}
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        class={`${toggle ? "flex" : "hidden"}`}
        role="dialog"
        aria-modal="true"
      >
        {/* Mobile backdrop layout */}
        <div className="fixed inset-0 z-50" />
        <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white p-5">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="w-auto">
              <Image src="/logo.svg" alt="logo" width={120} height={40} />
            </Link>
            <Image
              src={close}
              alt="close"
              width={24}
              height={24}
              onClick={() => setToggle((prev) => !prev)}
            />
          </div>
          {/* Nav links */}
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div class="space-y-2 py-6">
                {links.map((link) => {
                  return (
                    <Link className="-mx-3 block px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50" key={link.label} href={link.href}>
                      {link.label}
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

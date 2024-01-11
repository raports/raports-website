"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { HiOutlineX, HiOutlineMenu } from "react-icons/hi";

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="tablet:hidden">
      <button className="text-grey-700 transition-colors pt-2" onClick={toggleMenu}>
        <HiOutlineMenu size={24}/>
      </button>

      <div
        className={`w-full h-full bg-white fixed top-0 left-0 z-50 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between h-20 max-width border-b border-grey-100">
          <Link href="/" className="flex lg:flex-1">
            <Image src="/logo.svg" alt="logo" width={120} height={40} />
          </Link>
          <button className="text-grey-700 " onClick={toggleMenu}>
            <HiOutlineX size={24} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;

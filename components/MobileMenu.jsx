"use client";

import React, { useState } from "react";
import { FaBars } from "react-icons/fa";

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return <div className="tablet:hidden">
    <button
        className="text-grey-700 hover:text-blue transition-colors "
        onClick={toggleMenu}
      >
        <FaBars />
      </button>
  </div>;
};

export default MobileMenu;

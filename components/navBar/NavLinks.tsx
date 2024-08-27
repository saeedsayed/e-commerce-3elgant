"use client"
import React from "react";
import { MAIN_NAV_LINKS } from "@/constants/index";
import Link from "next/link";
import { usePathname } from "next/navigation";
const NavLinks = () => {
  const currentPath = usePathname();
  return (
    <nav>
      <ul className="flex items-center gap-10 text-sm text-sub-text font-medium">
        {MAIN_NAV_LINKS.map((link) => (
          <li key={link.name}>
            <Link
              href={link.path}
              className={`${currentPath === link.path ? "text-text" : ""}`}
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavLinks;

import React from "react";
import { LINKS } from "@/constants/index";
import Link from "next/link";
const NavLinks = () => {
  return (
    <nav>
      <ul className="flex items-center gap-10 text-sm text-sub-text font-medium">
        {LINKS.map((link) => (
          <li key={link.name}>
            <Link
              href={link.path}
              // className={({ isActive }) => (isActive ? "text-text" : "")}
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

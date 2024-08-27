import React from "react";
import { MAIN_NAV_LINKS } from "@/constants/index";
import Link  from "next/link";

interface ISideNavLinksProps {
  handleClose: () => void;
}

const SideNavLinks = ({ handleClose }: ISideNavLinksProps) => {
  return (
    <nav>
      <ul className="flex flex-col font-medium">
        {MAIN_NAV_LINKS.map((link) => (
          <li key={link.name}>
            <Link
              href={link.path}
              className="border-b py-4 block border-b-[#E8ECEF]"
              onClick={handleClose}
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default SideNavLinks;

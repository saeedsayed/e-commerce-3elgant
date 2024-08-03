import React from "react";
// components
import NavLogo from "../NavLogo";
import SearchField from "./SearchField";
import SideMenuIcons from "./SideMenuIcons";
import { Flyout } from "../../common";
// icons
import { IoClose } from "react-icons/io5";
import SideNavLinks from "./SideNavLinks";
import Button from "../../common/Button";
import SocialLinks from "./SocialLinks";

interface Props {
  showMenu: boolean;
  setShowMenu: ()=>void;
}

const SideMenu = ({ showMenu, setShowMenu }: Props) => {
  return (
    <Flyout position="left" isOpen={showMenu} handleClose={setShowMenu}>
      <div className="flex flex-col justify-between h-full">
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <NavLogo />
          <button onClick={setShowMenu}>
            <IoClose className="w-6 h-6" />
          </button>{" "}
          {/* close button */}
        </div>
        <SearchField /> {/* search input field */}
        <SideNavLinks handleClose={setShowMenu} />
      </div>
      <div className="flex flex-col gap-[19px]">
        <SideMenuIcons />
        <Button>Sign In</Button>
        <SocialLinks />
      </div>
      </div>
    </Flyout>
  );
};

export default SideMenu;

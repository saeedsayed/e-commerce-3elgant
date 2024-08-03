import React from "react";
// components
import OfferBar from "./OfferBar";
import NavLinks from "./NavLinks";
import NavIcons from "./NavIcons";
import SmallDeviceNav from "./SmallDevicesNav/SmallDeviceNav";
import NavLogo from "./NavLogo";

const NavBar = () => {
  return (
    <>
      <OfferBar />
      <div className="container px-8 sm:px-0">
        <header className="hidden sm:block">
          <div className="flex items-center justify-between py-4">
            <NavLogo />
            <NavLinks/>
            <NavIcons />
          </div>
        </header>
        <SmallDeviceNav />
      </div>
    </>
  );
};

export default NavBar;

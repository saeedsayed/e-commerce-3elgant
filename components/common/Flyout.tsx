import React, { useEffect, useState } from "react";

interface IFlyoutProps{
  position: "left" | "right";
  isOpen: boolean;
  handleClose: () => void;
  children: React.ReactNode;
}

const Flyout = ({ position, isOpen, handleClose, children }:IFlyoutProps) => {
  // determine opening and closing direction
  const openingDirection = position === "right" ? "right-0" : "left-0";
  const closingDirection = position === "right" ? "-right-full" : "-left-full";

  return (
    <div
      className={`w-full h-screen bg-black bg-opacity-70 fixed  z-50 inset-0
            transition-all duration-200 ${
              isOpen ? "opacity-100 visible" : "opacity-0 invisible"
            }`} /* background black overlay */
      onClick={handleClose}
    >
      {/* modal */}
      <div
        className={`p-6 bg-white h-full w-fit absolute transition-all duration-200 ${
          isOpen ? openingDirection : closingDirection
        } `}
        onClick={(e) => e.stopPropagation()}
      >
        {/* content */}
        {children}
      </div>
    </div>
  );
};

export default Flyout;

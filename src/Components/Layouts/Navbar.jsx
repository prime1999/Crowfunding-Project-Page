import React, { useContext } from "react";
import logo from "../images/logo.svg";
import hamburger from "../images/icon-hamburger.svg";
import Hamburger from "../pages/Hamburger";
import Menubar from "./Menubar";
import CrowdFundingContext from "../Context";

function Navbar() {
  const { menu, handleMenu } = useContext(CrowdFundingContext);
  return (
    <div>
      <div className="relative container mx-auto flex justify-between items-center">
        <img src={logo} alt="Crowdfunding's logo" />

        <div onClick={handleMenu}>
          <img
            className={`${
              !menu ? "" : "hidden"
            } absolute top-1 hover:cursor-pointer md:hidden`}
            src={hamburger}
            alt=""
          />
        </div>
        <Menubar />
      </div>
      <Hamburger />
    </div>
  );
}

export default Navbar;

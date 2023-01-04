import React from "react";
import Navbar from "./Navbar";

function Header() {
  return (
    <div className="bg-headerMobile-bg h-72 bg-cover p-6 md:bg-headerDesktop-bg md:h-80">
      <Navbar />
    </div>
  );
}

export default Header;

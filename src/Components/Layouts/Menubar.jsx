import React from "react";
import { Link } from "react-router-dom";

function Menubar() {
  return (
    <div className="hidden md:block text-white">
      <ul className="flex justify-between items-center font-bold">
        <li className="mr-4 hover:cursor-pointer">
          <Link className="text-white no-underline" to="/about">
            About
          </Link>
        </li>
        <li className="mr-4">Discover</li>
        <li>Get Started</li>
      </ul>
    </div>
  );
}

export default Menubar;

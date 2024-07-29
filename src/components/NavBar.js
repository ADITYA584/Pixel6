import React from "react";
import Logo from "../assets/svgs/Pixel6.png";
import { Menu } from "@mui/icons-material";

const NavBar = () => {
  return (
    <div className="flex w-full absolute top-0  justify-between px-3 sm:px-10 items-center py-1 sm:py-2">
      <div className="w-10 sm:w-14 bg-black rounded-md p-1 flex items-center justify-center  ">
        <img
          className="object-center"
          //   width={60}
          src={Logo}
          alt="Pixel6 Logo"
        ></img>
      </div>
      <div>
        <Menu style={{ fontSize: 40 }} className="text-red-500 " />
      </div>
    </div>
  );
};

export default NavBar;

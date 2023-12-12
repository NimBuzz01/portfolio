import Image from "next/image";
import React from "react";
import ToggleTheme from "../ToggleTheme";

const Header = () => {
  return (
    <div className="flex justify-between items-center p-6">
      <Image
        src={"/images/niamat-logo.png"}
        alt="Niamat Marjan Logo"
        width={100}
        height={20}
      />
      <ToggleTheme />
    </div>
  );
};

export default Header;

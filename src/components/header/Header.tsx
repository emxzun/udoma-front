import React from 'react';
import Image from "next/image";
import logoExample from "@/images/examples/logo.png";

const Header = () => {
  return (
      <header className="header__wrapper">
        <div className="header">
          <div className="header__logo">
            <Image src={logoExample} alt="logo"/>
          </div>
          <div className="header__info">
            <div className="header__phone">
              +7 (981) 199 20 20
            </div>
          </div>
        </div>
      </header>
  );
};

export default Header;
import React from 'react';
import Image from "next/image";
import logoExample from "@/images/examples/logo.png";
import Link from "next/link";

const Header = () => {
  return (
    <>
      <header className="header__wrapper">
        <div className="header">
          <Link href="/" className="header__logo">
            <Image src={logoExample} alt="logo"/>
          </Link>
          <div className="header__info">
            <div className="header__phone">
              +7 (981) 199 20 20
            </div>
          </div>
        </div>
      </header>
      <div className="sabheader"></div>
    </>


  );
};

export default Header;
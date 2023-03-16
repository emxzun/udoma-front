import React from 'react';
import telegramIcon from "@/images/icons/telegram.svg";
import whatsappIcon from "@/images/icons/whatsapp.svg";
import Image from "next/image";

const Footer = () => {
  return (
      <div className="footer__wrapper">
        <div className="footer">
          <div className="footer__networks">
            <div className="footer__networks-title">Мы в соцсетях</div>
            <div className="footer__networks-items">
              <a href="">
                <Image src={telegramIcon} alt="telegram"/>
              </a>
              <a href="">
                <Image src={whatsappIcon} alt="whatsapp"/>
              </a>
            </div>
          </div>
          <div className="footer__phone">
            <div className="footer__phone__number">+7 (981) 199 20 20</div>
            <a href="" className="footer__phone__button">
              Набрать номер
            </a>
          </div>
        </div>
      </div>
  );
};

export default Footer;
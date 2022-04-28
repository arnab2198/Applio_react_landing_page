import React from "react";
import "./Footer.css";
import Lastfooter from "../lastfooter/Lastfooter";
import {
  footerdata,
  otherdatafirst,
  otherdatasecond,
  logodatafirst,
  logodatasecond,
  ratedatafirst,
  // ratedatasecond,
} from "./footerdata";
import Logo from "../../logo.svg";

const Footer = () => {
  return (
    <div className="full__wrapper">
      <section className="footer__wrapper" id="footer">
        <div className="footer__container">
          <div className="footer__heading__bar">
            <div className="head__footer">
              <h1 className="footer__heading__text">
                Let's craft something awesome !
              </h1>
            </div>
            <div className="footer__logo">
              <img src={Logo} alt="Logo" />
            </div>
          </div>
          <div className="footer__menu__bar">
            <div className="footer__first__col">
              {footerdata.map((menu, index) => (
                <a key={index} className="menu__footer" href="/#">
                  {menu.link}
                </a>
              ))}
            </div>
            <div className="footer__second__col">
              <h4 className="other__services__head head__foot">
                Other Services
              </h4>
              <div className="other__submenu__bar">
                <div className="first__other__col">
                  {otherdatafirst.map((submenu, index) => (
                    <a key={index} className="sub__menu__link" href="/#">
                      {submenu.sublink}
                    </a>
                  ))}
                </div>
                <div className="second__other__col">
                  {otherdatasecond.map((submenu, index) => (
                    <a key={index} className="sub__menu__link" href="/#">
                      {submenu.sublink}
                    </a>
                  ))}
                </div>
              </div>
            </div>
            <div className="footer__third__col">
              <div className="freelance__logo">
                <h4 className="logo__head__footer  head__foot">
                  We are here too
                </h4>
                <div className="logo__first__row">
                  {logodatafirst.map((logoimg, index) => (
                    <img
                      key={index}
                      src={logoimg.img}
                      alt={logoimg.alt}
                      className="logo__img__freelance"
                    />
                  ))}
                </div>
                <div className="logo__second__row">
                  {logodatasecond.map((logoimg, index) => (
                    <img
                      key={index}
                      src={logoimg.img}
                      alt={logoimg.alt}
                      className="logo__img__freelance"
                    />
                  ))}
                </div>
              </div>
            </div>
            <div className="footer__fourth__col">
              <h4 className="rate__head__footer head__foot">People rated us</h4>
              <div className="fouth__main">
                {ratedatafirst.map((rateimg, index) => (
                  <div key={index} className="rate__col">
                    <img className="img__brand" src={rateimg.img} alt="brand" />
                    <img
                      className="img__star"
                      src={rateimg.imgtwo}
                      alt="star"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <Lastfooter />
    </div>
  );
};

// console.log(footerdata);
// console.log(otherdata);
// console.log(logodata);

export default Footer;

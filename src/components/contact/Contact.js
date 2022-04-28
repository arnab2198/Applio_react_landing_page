import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <section className="contact__wrapper" id="contact">
      <div className="contact__container">
        <div className="contact__heading">
          <h1 className="contact__head">Contact Us</h1>
          <p className="contact__sub__text">
            Nullam egestas in vulputate amet, nunc sed a rhoncus, dictum
            ullamcorper purus ultricies faucibus in nec sit malesuada morbi elit
          </p>
        </div>
        <div className="contact__content">
          <div className="office__left__box">
            <div className="address__first__column">
              <h3 className="office__heading">India Office</h3>
              <ul className="address__list">
                <li className="address">S/3-11J, Elgin Road, Kolkata 700025</li>
                <li className="address">
                  Candor Building, Sector 5, Salt Lake, Kolkata 700525
                </li>
              </ul>
            </div>
            <div className="address__second__column">
              <h3 className="office__heading">USA Office</h3>
              <ul className="address__list">
                <li className="address">
                  3278 Diamond Cove, Newport, RI 02840
                </li>
              </ul>
            </div>
          </div>
          <div className="right__input__box">
            <form className="input__form">
              <span className="name__field__box">
                <input
                  className="name__box mr"
                  type="text"
                  placeholder="First Name *"
                />
                <input
                  className="name__box ml"
                  type="text"
                  placeholder="Last Name *"
                />
              </span>
              <input
                className="email__field"
                type="text"
                placeholder="Email *"
              />
              <textarea
                className="message__box"
                placeholder="Enter Message *"
              ></textarea>
              <a className="send__msg__btn" href="/#">
                Send Message
              </a>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

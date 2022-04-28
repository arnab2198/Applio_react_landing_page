import React from "react";
import "./Quote.css";

const Quote = () => {
  return (
    <section className="quote__wrapper" id="quote">
      <div className="quote__container">
        <div className="quote__head">
          <h3 className="first__quote__head">
            Looking for a development partner!
          </h3>
          <h3 className="second__bold__text">We would love to assist</h3>
          <a href="/#" className="request__more__btn">
            Request A Quote
          </a>
        </div>
      </div>
    </section>
  );
};

export default Quote;

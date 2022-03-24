import React from "react";
import Pricingslider from "./pricingslider/Pricingslider";
import "./Pricing.css";

const Pricing = () => {
	return (
		<section className="pricing__wrapper" id="pricing">
			<div className="pricing__container">
				<div className="pricing__heading">
					<h1 className="pricing__head">Our Pricing</h1>
					<div className="pricing__sub__text ">
						Lectus at eleifend amet maecenas quam metus, aliquam diam, sit massa
						nisl volut pat et vestibulum ridiculus faucibus diam id amet neque,
						nisl platea
					</div>
				</div>
				<div className="pricing__content ">
					<div className="card__container ">
						<Pricingslider />
					</div>
				</div>
			</div>
		</section>
	);
};

export default Pricing;

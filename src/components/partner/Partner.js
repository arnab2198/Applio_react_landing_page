import React from "react";
import "./Partner.css";
import CenterMode from "./logoslider/Logoslider";

const Partner = () => {
	return (
		<section className="partner__wrapper" id="partner">
			<div className="partner__container">
				<div className="partner__heading">
					<h1 className="partner__head">OUR PARTNERS</h1>
					<p className="partner__subtext">
						Lectus at eleifend amet maecenas quam metus, aliquam diam, sit massa
						nisl volut pat et vestibulum ridiculus faucibus diam id amet neque,
						nisl platea
					</p>
				</div>
				<div className="partner__logo__main">
					<div className="partner__logo__container">
						<CenterMode />
					</div>
				</div>
			</div>
		</section>
	);
};

export default Partner;

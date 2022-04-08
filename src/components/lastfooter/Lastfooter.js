import React from "react";
import cardimg from "./cardimgdata";
import "./Lastfooter.css";

const Lastfooter = () => {
	return (
		<section className="footer__last">
			<div className="footer__main__container">
				<p className="copy__right">2022 © Applio - All Rights Reserved</p>
				<div className="payment__cards">
					{cardimg.map((payment, index) => (
						<img key={index} src={payment.img} alt={payment.alt} />
					))}
				</div>
			</div>
		</section>
	);
};

export default Lastfooter;

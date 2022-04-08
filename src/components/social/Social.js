import React from "react";
import "./Social.css";
import socialdata from "./socialdata";
import Phone from "../../assets/icons/Phone.svg";
import Email from "../../assets/icons/Email.svg";

const Social = () => {
	return (
		<section className="social__wrapper" id="social">
			<div className="social__container">
				<div className="left__logo">
					{socialdata.map((circle, index) => (
						<div key={index} className="circle__logo">
							<img src={circle.icon} alt={circle.alt} />
						</div>
					))}
				</div>
				<div className="right__contact">
					<div className="contact__phone">
						<img src={Phone} alt="Phone" />
						+91 225 7842563
					</div>
					<div className="contact__email">
						<img src={Email} alt="Email" />
						support@applio.io
					</div>
				</div>
			</div>
		</section>
	);
};

export default Social;

import React from "react";
import "./Features.css";
import Featureimage from "../../assets/image/girl-mobile.svg";

const Features = () => {
	return (
		<section className="feature__wrapper" id="feature">
			<div className="feature__container">
				<div className="left__feature__content">
					<div className="feature__head__subtext">
						<h3 className="feature__head">
							A digital web & app design studio creating modern & engaging
							online experiences
						</h3>
						<p className="feature__subtext">
							Vulputate mattis convallis morbi molestie orci aliquam egestas
							pulvinar turpis ut sit dui ultrices et risus, neque, varius
							pellent esque pulvinar enim, et neque sed aenean nulla massa
							dolor,
						</p>
					</div>
					<div className="feature__point__list">
						<ul className="feature__list">
							<li className="feature__point">
								We put a lot of effort in design.
							</li>
							<li className="feature__point">
								The most important ingredient of successful website.
							</li>
							<li className="feature__point">
								Sed ut perspiciatis unde omnis iste natus error sit.
							</li>
							<li className="feature__point">Submit Your Orgnization.</li>
						</ul>
					</div>
					<a className="learn__btn" href="/#">
						Learn More
					</a>
				</div>
				<div className="right__feature__image">
					<img src={Featureimage} alt="feature girl" />
				</div>
			</div>
		</section>
	);
};

export default Features;

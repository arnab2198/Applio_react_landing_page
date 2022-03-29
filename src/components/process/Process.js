import React from "react";
import "./Process.css";
import Cycleimg from "../../assets/image/cycle.svg";

const Process = () => {
	return (
		<section className="process__wrapper" id="process">
			<div className="process__container">
				<div className="process__heading">
					<h1 className="process__head">How we work</h1>
					<div className="process__sub__text ">
						Lectus at eleifend amet maecenas quam metus, aliquam diam, sit massa
						nisl volut pat et vestibulum ridiculus faucibus diam id amet neque,
						nisl platea
					</div>
				</div>
				<div className="process__content">
					<div className="left__container">
						<h3 className="process__left__head">
							A easy and traditional method to provide our users a seamless
							Experience
						</h3>
						<p className="process__left__subtext">
							Convallis tempor, enim, ultricies quam feugiat urna, aliquam morbi
							leo posuere a egestas viverra nulla integer odio lacus, massa
							lectus elit et, quam tortor nascetur pharetra mattis urna, vitae,
							amet, lobortis.
						</p>
						<a className="learn__btn" href="/#">
							Learn More
						</a>
					</div>
					<div className="right__container">
						<img className="process__cycle__img" src={Cycleimg} alt="cycle" />
					</div>
				</div>
			</div>
		</section>
	);
};

export default Process;

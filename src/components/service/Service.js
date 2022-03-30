import React from "react";
import "./Service.css";
import servicedata from "./servicedata";

const Service = () => {
	return (
		<section className="service__wrapper" id="service">
			<div className="service__content">
				<div className="service__content__head">
					<h1 className="serice__head">Our Services</h1>
					<p className="service__sub__text">
						We craft digital, graphic and dimensional thinking, to create
						category leading brand experiences that have meaning and add a value
						for our clients.
					</p>
				</div>
				<div className="service__col__3">
					{servicedata.map((card, index) => (
						<div key={index} className="service__box">
							<span className="circle__icon">
								<img src={card.icon} alt="Diamond Icon" />
							</span>
							<h3 className="box__heading">{card.head}</h3>
							<p className="service__box__content">{card.subtext}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Service;

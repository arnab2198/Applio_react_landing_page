import React from "react";
import "./Service.css";
import DiamondIcon from "../../assets/icons/Diamond.svg";
import PaintPalette from "../../assets/icons/Paint Palette.svg";
import IdeaIcon from "../../assets/icons/Idea Sharing.svg";
import RequestIcon from "../../assets/icons/Request Service.svg";
import Multichannel from "../../assets/icons/Multichannel.svg";
import Adjustment from "../../assets/icons/Adjustment.svg";

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
					<div className="service__box">
						<span className="circle__icon">
							<img src={DiamondIcon} alt="Diamond Icon" />
						</span>
						<h3 className="box__heading">Digital Design</h3>
						<p className="service__box__content">
							Some quick example text to build on the card title and make up the
							bulk of the card's content. Moltin gives you the platform.
						</p>
					</div>
					<div className="service__box">
						<span className="circle__icon">
							<img src={PaintPalette} alt="Palette Icon" />
						</span>
						<h3 className="box__heading">Unlimited Colors</h3>
						<p className="service__box__content">
							Credibly brand standards compliant users without extensible
							services. Anibh euismod tincidunt ut laoreet.
						</p>
					</div>
					<div className="service__box">
						<span className="circle__icon">
							<img src={IdeaIcon} alt="Idea Icon" />
						</span>
						<h3 className="box__heading">Strategy Solutions</h3>
						<p className="service__box__content">
							Separated they live in Bookmarksgrove right at the coast of the
							Semantics, a large language ocean necessary regelialia.
						</p>
					</div>
					<div className="service__box">
						<span className="circle__icon">
							<img src={RequestIcon} alt="Diamond Icon" />
						</span>
						<h3 className="box__heading">Awesome Support</h3>
						<p className="service__box__content">
							It is a paradisematic country, in which roasted parts of sentences
							fly into your mouth leave for the far World.
						</p>
					</div>
					<div className="service__box">
						<span className="circle__icon">
							<img src={Multichannel} alt="Diamond Icon" />
						</span>
						<h3 className="box__heading">Truly Multipurpose</h3>
						<p className="service__box__content">
							ven the all-powerful Pointing has no control about the blind texts
							it is an almost unorthographic.
						</p>
					</div>
					<div className="service__box">
						<span className="circle__icon">
							<img src={Adjustment} alt="Diamond Icon" />
						</span>
						<h3 className="box__heading">Easy to customize</h3>
						<p className="service__box__content">
							Question Marks and devious Semikoli, but the Little Blind Text
							didn't listen. She packed her seven versalia.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Service;

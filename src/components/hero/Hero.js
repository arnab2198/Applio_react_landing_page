import React from "react";
import "./Hero.css";

const Hero = () => {
	return (
		<section className="hero__wrapper" id="hero">
			<div className="content__wrapper">
				<span className="hero__content">
					<h1 className="hero__head">We help startups launch their products</h1>
					<p className="hero__sub__text">
						Tincidunt ultrices sit in ridiculus commodo integer et, vulputate
						lobortis auctor diam nisl orci morbi id nunc faucibus suspendisse et
					</p>
					<a href="/#" className="quote__btn">
						Request a quote
					</a>
				</span>
			</div>
		</section>
	);
};

export default Hero;

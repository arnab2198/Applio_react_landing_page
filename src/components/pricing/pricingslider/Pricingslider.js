import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import carddata from "./pricedata";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import "../pricingslider/PricingSlider.css";

const PricingSlider = () => {
	return (
		<Splide
			options={{
				drag: false,
				arrows: false,
				perPage: 4,
				perMove: 4,
				gap: 20,
				padding: "3rem",
				pagination: false,
				breakpoints: {
					469: {
						perPage: 1,
						perMove: 1,
						drag: true,
					},
					623: {
						perPage: 1,
						perMove: 1,
						drag: true,
					},
					935: {
						perPage: 1,
						perMove: 1,
						drag: true,
					},
					1450: {
						perPage: 1,
						perMove: 1,
						drag: true,
					},
				},
			}}
		>
			{carddata.map((card, index) => (
				<SplideSlide key={index} className="card__main">
					<p className="suggest__text">{card.suggestion}</p>
					<h3 className="card__heading">{card.name}</h3>
					<p className="card__sub__text">{card.plantext}</p>
					<div className="price__box">
						<p className="price__currency">{card.currency}</p>
						<p className="plan__price">{card.price}</p>
						<p className="float__price">{card.floatprice}</p>
						<p className="tax__text">{card.pricetext}</p>
					</div>
					<a href="/#" className="custom__text">
						{card.customtext}
					</a>
					<button className="buy__now__btn">{card.button}</button>
					<div className="limit__learn__text">
						<span className="learn__highlight__text">
							{card.learnhighlight}
						</span>
						<span className="learn__text"> {card.learntext}</span>
						<a href="/#" className="learn__more__btn">
							{card.learnbtn}
						</a>
					</div>
					<p className="card__feature__head">{card.Featureshead}</p>
					<ul className="card__feature__main">
						<li className="card__feature__list">{card.featureone}</li>
						<li className="card__feature__list">{card.featuretwo}</li>
						<li className="card__feature__list">{card.featurethree}</li>
						<li className="card__feature__list">{card.featurefour}</li>
						<li className="card__feature__list">{card.featurefive}</li>
						<li className="card__feature__list">{card.featuresix}</li>
					</ul>
					<a href="/#" className="card__more__btn">
						{card.moretext}
					</a>
				</SplideSlide>
			))}
		</Splide>
	);
};

export default PricingSlider;

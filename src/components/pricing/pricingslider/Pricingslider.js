import Slider from "react-slick";
import data from "./pricedata";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./PricingSlider.css";
import { TurnedIn } from "@mui/icons-material";

export default function PricingSlider() {
	const Settings = {
		arrows: false,
		dots: false,
		slidesToShow: 4,
		slidesToScroll: 1,
		infinite: false,
		centerMode: false,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 2,
				},
			},
			{
				breakpoint: 800,
				settings: {
					slidesToShow: 1,
				},
			},
		],
	};

	return (
		<Slider {...Settings}>
			{data.map((card, index) => (
				<div key={index} className="card__main">
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
						<span> {card.learntext}</span>
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
				</div>
			))}
		</Slider>
	);
}

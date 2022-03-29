import React from "react";
import "./Testimonial.css";
import ReviewSlider from "./testimonialslider/ReviewSlider";

const Testimonial = () => {
	return (
		<section className="review__wrapper" id="review">
			<div className="review__container">
				<div className="review__heading">
					<h1 className="review__head">What our clients said</h1>
					<p className="review__sub__text">
						Nulla dignissim sed condimentum vitae, sed pellentesque aliquet elit
						odio quis varius imperdiet augue sagittis est amet id elementum
						dictumst
					</p>
				</div>
			</div>
			<div className="review__content">
				<div className="review__container__box">
					<ReviewSlider />
				</div>
			</div>
		</section>
	);
};

export default Testimonial;

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import reviewdata from "./reviewdata";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./ReviewSlider.css";
import SwiperCore, { Pagination, Navigation, Autoplay } from "swiper";

export default function ReviewSlider() {
	SwiperCore.use([Autoplay]);

	return (
		<Swiper
			slidesPerView={3}
			spaceBetween={40}
			slidesPerGroup={1}
			loop={true}
			speed={1000}
			draggable={false}
			autoplay={{
				delay: 1500,
			}}
			loopFillGroupWithBlank={true}
			pagination={{
				clickable: true,
			}}
			navigation={true}
			modules={[Pagination, Navigation]}
			className="mySwiper"
			breakpoints={{
				0: {
					slidesPerView: 1,
					spaceBetween: 20,
				},
				320: {
					slidesPerView: 1,
					spaceBetween: 20,
				},
				520: {
					slidesPerView: 1,
					spaceBetween: 20,
				},
				680: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				950: {
					slidesPerView: 3,
					spaceBetween: 20,
				},
			}}
		>
			{reviewdata.map((card, index) => (
				<SwiperSlide key={index} className="main__card">
					<div className="img__circle">
						<img src={card.img} alt="user avatar" className="user__avatar" />
					</div>
					<p className="user__content">{card.content}</p>
					<div className="user__details">
						<p className="user__name">{card.name}</p>
						<span className="user__company">
							{card.company}
							<span className="user__position">{card.position}</span>
						</span>
					</div>
				</SwiperSlide>
			))}
		</Swiper>
	);
}

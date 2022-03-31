import React from "react";
import "./Blog.css";
import { blogdata, blogdatasecond } from "./blogdata";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const Blog = () => {
	return (
		<section className="blog__wrapper" id="blog">
			<div className="blog__container">
				<div className="blog__heading">
					<h1 className="blog__head">Blogs</h1>
					<p className="blog__sub__text">
						Nullam egestas in vulputate amet, nunc sed a rhoncus, dictum
						ullamcorper purus ultricies faucibus in nec sit malesuada morbi elit
					</p>
				</div>
				<div className="blog__card__container">
					<div className="blog__first__column">
						{blogdata.map((card, index) => (
							<div key={index} className="card__full">
								<div className="card__img__box">
									<img src={card.image} alt={card.category} />
								</div>
								<div className="blog__content__main">
									<p className="blog__category">{card.category}</p>
									<h3 className="blog__card__head">{card.bloghead}</h3>
									<p className="blog__card__content">{card.content}</p>
									<a href="/#" className="blog__more__btn">
										{card.readbtn}
										<ArrowForwardIosIcon className="right__arrow" />
									</a>
								</div>
							</div>
						))}
					</div>
					<div className="blog__second__column">
						{blogdatasecond.map((card, index) => (
							<div key={index} className="card__full">
								<div className="card__img__box">
									<img src={card.image} alt={card.category} />
								</div>
								<div className="blog__content__main">
									<p className="blog__category">{card.category}</p>
									<h3 className="blog__card__head">{card.bloghead}</h3>
									<p className="blog__card__content">{card.content}</p>
									<a href="/#" className="blog__more__btn">
										{card.readbtn}
										<ArrowForwardIosIcon className="right__arrow" />
									</a>
								</div>
							</div>
						))}
					</div>
				</div>
				<a className="blog__see__btn" href="/#">
					See More
				</a>
			</div>
		</section>
	);
};

export default Blog;

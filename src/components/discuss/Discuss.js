import React from "react";
import "./Discuss.css";
// import Discussbgimg from "";

const Discuss = () => {
	return (
		<section className="discuss__wrapper" id="discuss">
			<div className="discuss__content">
				<h1 className="discuss__head">Build your dream product today</h1>
				<p className="dicuss__main__content">
					Integer lectus congue at nibh sapien montes, sed tincidunt felis
					congue nunc ornare enim donec sed mauris, malesuada feugiat cras
					lectus ornare faucibus justo vel dignissim neque eget commodo mauris
					faucibus nisi aliquet enim lectus quis tellus quis id pulvinar
				</p>
				<span className="two__discuss__btn">
					<a href="/#" className="discuss__btn">
						Discuss with us
					</a>
					<a href="/#" className="support__btn">
						Support team
					</a>
				</span>
			</div>
		</section>
	);
};

export default Discuss;

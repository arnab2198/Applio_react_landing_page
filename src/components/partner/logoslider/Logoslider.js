import React, { Component } from "react";
import Slider from "react-slick";
import "./Logoslider.css";
import Unreal from "../../../assets/logo/unreal.svg";
import Neon from "../../../assets/logo/neon.svg";
import Advantica from "../../../assets/logo/advantica.svg";
import Optima from "../../../assets/logo/optima.svg";
import Micron from "../../../assets/logo/micron.svg";
import Bristol from "../../../assets/logo/bristol.svg";
import Neso from "../../../assets/logo/neso.svg";
import Galaxy from "../../../assets/logo/galaxy.svg";
import Elco from "../../../assets/logo/elco.svg";
import Injen from "../../../assets/logo/injen.svg";
import Lakeview from "../../../assets/logo/lakeview.svg";
import Era from "../../../assets/logo/era.svg";
import Primera from "../../../assets/logo/primera.svg";
import Apropos from "../../../assets/logo/apropos.svg";
import Designer from "../../../assets/logo/designer.svg";
import Sealand from "../../../assets/logo/sealand.svg";
import Proview from "../../../assets/logo/proview.svg";
import Keros from "../../../assets/logo/keros.svg";

export default class CenterMode extends Component {
	render() {
		const settings = {
			infinite: true,
			slidesToShow: 5,
			slidesToScroll: 1,
			swipeToSlide: true,
			arrows: false,
			autoplay: true,
			autoplaySpeed: 1500,
			responsive: [
				{
					breakpoint: 1024,
					settings: {
						slidesToShow: 4,
						slidesToScroll: 1,
					},
				},
				{
					breakpoint: 840,
					settings: {
						slidesToShow: 3,
						slidesToScroll: 1,
					},
				},
				{
					breakpoint: 600,
					settings: {
						slidesToShow: 3,
						infinite: true,
					},
					Proview,
				},
				{
					breakpoint: 550,
					settings: {
						infinite: true,
						slidesToShow: 2,
					},
				},
			],
		};
		return (
			<Slider {...settings}>
				<div className="image__div">
					<img src={Unreal} alt="Unreal" />
				</div>
				<div className="image__div">
					<img src={Neon} alt="Unreal" />
				</div>
				<div className="image__div">
					<img src={Advantica} alt="Unreal" />
				</div>
				<div className="image__div">
					<img src={Optima} alt="Unreal" />
				</div>
				<div className="image__div">
					<img src={Micron} alt="Unreal" />
				</div>
				<div className="image__div">
					<img src={Bristol} alt="Unreal" />
				</div>
				<div className="image__div">
					<img src={Neso} alt="Unreal" />
				</div>
				<div className="image__div">
					<img src={Galaxy} alt="Unreal" />
				</div>
				<div className="image__div">
					<img src={Elco} alt="Unreal" />
				</div>
				<div className="image__div">
					<img src={Injen} alt="Unreal" />
				</div>
				<div className="image__div">
					<img src={Lakeview} alt="Unreal" />
				</div>
				<div className="image__div">
					<img src={Era} alt="Unreal" />
				</div>
				<div className="image__div">
					<img src={Primera} alt="Unreal" />
				</div>
				<div className="image__div">
					<img src={Apropos} alt="Unreal" />
				</div>
				<div className="image__div">
					<img src={Designer} alt="Unreal" />
				</div>
				<div className="image__div">
					<img src={Sealand} alt="Unreal" />
				</div>
				<div className="image__div">
					<img src={Proview} alt="Unreal" />
				</div>
				<div className="image__div">
					<img src={Keros} alt="Unreal" />
				</div>
			</Slider>
		);
	}
}

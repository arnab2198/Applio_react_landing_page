import React, { useState } from "react";
import { Link } from "react-scroll";
import "./Navbar.css";
import logo from "../../logo.svg";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import navbardata from "./navbardata";

const Navbar = () => {
	const [click, setClick] = useState(false);
	const handleClick = () => setClick(!click);
	return (
		<section className="header__wrapper">
			<header className="navbar__main">
				<div className="navbar_Logo_menu df-sb-ac">
					<a className="df-sb-ac" href="/">
						<img className="logo__main" src={logo} alt="logo" />
					</a>
					<div className="nav__links__menu">
						<ul className={click ? "menu__links active" : "menu__links"}>
							{navbardata.map((link, index) => (
								<li key={index}>
									<Link
										to={link.to}
										offset={link.offset}
										duration={link.duration}
										smooth
									>
										{link.url}
									</Link>
								</li>
							))}
						</ul>
					</div>
				</div>
				<div className="try__free__btn">
					<a href="/#">Try it free</a>
				</div>
				<span className="ham__icon" onClick={handleClick}>
					{click ? (
						<CloseRoundedIcon className="menu__icon" />
					) : (
						<MenuRoundedIcon className="menu__icon" />
					)}
				</span>
			</header>
		</section>
	);
};

export default Navbar;

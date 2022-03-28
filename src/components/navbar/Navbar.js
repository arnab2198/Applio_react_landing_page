import React, { useState } from "react";
import { Link } from "react-scroll";
import "./Navbar.css";
import logo from "../../logo.svg";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";

const Navbar = () => {
	const [click, setClick] = useState(false);
	const handleClick = () => setClick(!click);
	return (
		<header className="header">
			<div className="navbar__main">
				<div className="navbar_Logo_menu df-sb-ac">
					<a className="df-sb-ac" href="/">
						<img className="logo__main" src={logo} alt="logo" />
					</a>
					<div className="nav__links__menu">
						<ul className={click ? "menu__links active" : "menu__links"}>
							<li>
								<Link to="service" offset={-50} duration={1500} smooth>
									Services
								</Link>
							</li>
							<li>
								<Link to="feature" offset={-140} duration={1500} smooth>
									Features
								</Link>
							</li>
							<li>
								<Link to="pricing" offset={-40} duration={1500} smooth>
									Pricing
								</Link>
							</li>
							<li>
								<Link to="partner" offset={-50} duration={1500} smooth>
									Partners
								</Link>
							</li>
							<li>
								<Link to="process" offset={-50} duration={1500} smooth>
									Process
								</Link>
							</li>
							<li>
								<Link to="blog" offset={-50} duration={1500} smooth>
									Blog
								</Link>
							</li>
							<li className="contact__link">
								<Link to="feature" offset={-50} duration={1500} smooth>
									Contact
								</Link>
							</li>
							<li className="try__btn__mobile">
								<Link to="feature" offset={-50} duration={1500} smooth>
									Try it free
								</Link>
							</li>
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
			</div>
		</header>
	);
};

export default Navbar;

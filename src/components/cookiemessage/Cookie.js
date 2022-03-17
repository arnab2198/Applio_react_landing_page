import React from "react";
import "./Cookie.css";
import CookieConsent from "react-cookie-consent";

const Cookie = () => {
	return (
		<CookieConsent
			location="bottom"
			buttonText="I Understand"
			cookieName="myAwesomeCookieName2"
			style={{ background: "#2B373B" }}
			buttonStyle={{ color: "#4e503b", fontSize: "14px" }}
			expires={7}
		>
			Notice - Applio uses cookies to provide necessary website functionality,
			improve your experience and analyze our traffic. By using our website, you
			agree to our Privacy Policy and our cookies usage.{" "}
			<span className="read__text" href="/#" style={{ fontSize: "16px" }}>
				<a style={{ color: "var(--Orange" }} href="/#">
					Privacy Policy{" "}
				</a>
				and{" "}
				<a style={{ color: "var(--Orange" }} href="/#">
					{" "}
					Cookies Policy
				</a>
			</span>
		</CookieConsent>
	);
};

export default Cookie;

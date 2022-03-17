import "./App.css";
import React from "react";
// import Customcursor from "./components/customcursor/Customcursor";
import Cookie from "./components/cookiemessage/Cookie";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import Scrolltop from "./components/scrolltopbutton/Scrolltop";
import Service from "./components/service/Service";
import Features from "./components/features/Features";
import Discuss from "./components/discuss/Discuss";
import Pricing from "./components/pricing/Pricing";
import Partner from "./components/partner/Partner";
import Process from "./components/process/Process";
import Testimonial from "./components/testimonial/Testimonial";
import Blog from "./components/blog/Blog";
import Contact from "./components/contact/Contact";
import Quote from "./components/quote/Quote";
import Social from "./components/social/Social";
import Footer from "./components/footer/Footer";

function App() {
	return (
		<React.Fragment>
			{/* <Customcursor /> */}
			<Cookie />
			<Navbar />
			<Hero />
			<Scrolltop />
			<Service />
			<Features />
			<Discuss />
			<Pricing />
			<Partner />
			<Process />
			<Testimonial />
			<Blog />
			<Contact />
			<Quote />
			<Social />
			<Footer />
		</React.Fragment>
	);
}

export default App;

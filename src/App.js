import "./App.css";
import React from "react";
// import Customcursor from "./components/customcursor/Customcursor";
import Cookie from "./components/cookiemessage/Cookie";
import Scrolltop from "./components/scrolltopbutton/Scrolltop";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
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
import Lastfooter from "./components/lastfooter/Lastfooter";

function App() {
  return (
    <React.Fragment>
      {/* <Customcursor /> uncomment app.css * cursor line 28 */}
      <Cookie />
      <Scrolltop />
      <Navbar />
      <Hero />
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
      {/* <Footer /> */}
      <Lastfooter />
    </React.Fragment>
  );
}

export default App;

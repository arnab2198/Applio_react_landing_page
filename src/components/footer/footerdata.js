import Fiverr from "../../assets/logo/fiverr.svg";
import Upwork from "../../assets/logo/upwork.svg";
import Freelancer from "../../assets/logo/freelancer.svg";
import Guru from "../../assets/logo/guru.svg";
import Trustpilot from "../../assets/logo/trustpilot.svg";
import Google from "../../assets/logo/google.svg";
import Fourfivestar from "../../assets/icons/4.5 star trustpilot.svg";
import Fourstar from "../../assets/icons/4 star google.svg";

const footerdata = [
	{
		id: 1,
		link: "Home",
		class: "footer__link",
	},
	{
		id: 2,
		link: "About Us",
		class: "footer__link",
	},
	{
		id: 3,
		link: "Case Studies",
		class: "footer__link",
	},
	{
		id: 4,
		link: "Careers",
		class: "footer__link",
	},
	{
		id: 5,
		link: "Contact",
		class: "footer__link",
	},
];

const otherdatafirst = [
	{
		id: 1,
		sublink: "IoT",
	},
	{
		id: 2,
		sublink: "AR/VR",
	},
	{
		id: 3,
		sublink: "Blockchain",
	},
	{
		id: 4,
		sublink: "UI/UX Design",
	},
];

const otherdatasecond = [
	{
		id: 1,
		sublink: "Big Data",
	},
	{
		id: 2,
		sublink: "E-commerce Store",
	},
	{
		id: 3,
		sublink: "Mobile App Development",
	},
	{
		id: 4,
		sublink: "IT Staff",
	},
];

const logodatafirst = [
	{
		id: 1,
		img: Fiverr,
		alt: "Fiverr",
	},
	{
		id: 2,
		img: Upwork,
		alt: "Upwork",
	},
];

const logodatasecond = [
	{
		id: 1,
		img: Freelancer,
		alt: "Freelancer",
	},
	{
		id: 2,
		img: Guru,
		alt: "Guru",
	},
];

const ratedatafirst = [
	{
		id: 1,
		img: Trustpilot,
		imgtwo: Fourfivestar,
	},
	{
		id: 2,
		img: Google,
		imgtwo: Fourstar,
	},
];

export {
	footerdata,
	otherdatafirst,
	otherdatasecond,
	logodatafirst,
	logodatasecond,
	ratedatafirst,
};

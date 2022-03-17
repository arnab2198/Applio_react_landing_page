const data = [
	{
		id: 0,
		name: "Starter",
		plantext:
			"Lorem ipsum dolor sit amet, csectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis",
		currency: "₹",
		price: "2,000",
		floatprice: ".99",
		pricetext: "(Excl Tax)",
		customtext: "Want to add some custom features ?",
		button: "Buy Now",
		learnhighlight: "*Overages",
		learntext: "apply if the mentioned list features limit exceeded.",
		learnbtn: "Learn More",
		Featureshead: "Everything in Starter",
		moretext: "More About Starter",
		featureone: "Content of a page when looking at its layout",
		featuretwo:
			"It is a long established fact that a reader will be distracted by the readable",
		featurethree:
			"There are many variations of passages of Lorem Ipsum available",
		featurefour:
			"It is a long established fact that a reader will be distracted by the readable",
		featurefive: "Contrary to popular belief, Lorem Ipsum is not",
		featuresix: "Lorem Ipsum comes from sections",
	},
	{
		id: 1,
		name: "Standard",
		plantext:
			"Lorem ipsum dolor sit amet, csectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis",
		currency: "₹",
		price: "3,500",
		floatprice: ".99",
		pricetext: "(Excl Tax)",
		customtext: "Want to add some custom features ?",
		button: "Buy Now",
		learnhighlight: "*Overages",
		learntext: "apply if the mentioned list features limit exceeded.",
		learnbtn: "Learn More",
		Featureshead: "Everything in Starter, plus",
		moretext: "More About Standard",
		featureone: "Content of a page when looking at its layout",
		featuretwo:
			"It is a long established fact that a reader will be distracted by the readable",
		featurethree:
			"There are many variations of passages of Lorem Ipsum available",
		featurefour:
			"It is a long established fact that a reader will be distracted by the readable",
		featurefive: "Contrary to popular belief, Lorem Ipsum is not",
		featuresix: "Lorem Ipsum comes from sections",
	},
	{
		id: 3,
		suggestion: "Applio Recommends",
		name: "Essential",
		plantext:
			"Lorem ipsum dolor sit amet, csectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis",
		currency: "₹",
		price: "8,000",
		floatprice: ".99",
		pricetext: "(Excl Tax)",
		customtext: "Want to add some custom features ?",
		button: "Buy Now",
		learnhighlight: "*Overages",
		learntext: "apply if the mentioned list features limit exceeded.",
		learnbtn: "Learn More",
		Featureshead: "Everything in Standard, plus",
		moretext: "More About Essential",
		featureone: "Content of a page when looking at its layout",
		featuretwo:
			"It is a long established fact that a reader will be distracted by the readable",
		featurethree:
			"There are many variations of passages of Lorem Ipsum available",
		featurefour:
			"It is a long established fact that a reader will be distracted by the readable",
		featurefive: "Contrary to popular belief, Lorem Ipsum is not",
		featuresix: "Lorem Ipsum comes from sections",
	},
	{
		id: 4,
		name: "Premium",
		plantext:
			"Lorem ipsum dolor sit amet, csectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis",
		currency: "₹",
		price: "23,000",
		floatprice: ".99",
		pricetext: "(Excl Tax)",
		customtext: "Want to add some custom features ?",
		button: "Buy Now",
		learnhighlight: "*Overages",
		learntext: "apply if the mentioned list features limit exceeded.",
		learnbtn: "Learn More",
		Featureshead: "Everything in Essential, plus",
		moretext: "More About Premium",
		featureone: "Content of a page when looking at its layout",
		featuretwo:
			"It is a long established fact that a reader will be distracted by the readable",
		featurethree:
			"There are many variations of passages of Lorem Ipsum available",
		featurefour:
			"It is a long established fact that a reader will be distracted by the readable",
		featurefive: "Contrary to popular belief, Lorem Ipsum is not",
		featuresix: "Lorem Ipsum comes from sections",
	},
	// Extras for test
	// {
	// 	id: 4,
	// 	name: "Premium",
	// 	plantext:
	// 		"Lorem ipsum dolor sit amet, csectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis",
	// 	currency: "₹",
	// 	price: "23,000",
	// 	floatprice: ".99",
	// 	pricetext: "(Excl Tax)",
	// 	customtext: "Want to add some custom features ?",
	// 	button: "Buy Now",
	// 	learnhighlight: "*Overages",
	// 	learntext: "apply if the mentioned list features limit exceeded.",
	// 	learnbtn: "Learn More",
	// 	Featureshead: "Everything in Essential, plus",
	// 	moretext: "More About Premium",
	// 	featureone: "Content of a page when looking at its layout",
	// 	featuretwo:
	// 		"It is a long established fact that a reader will be distracted by the readable",
	// 	featurethree:
	// 		"There are many variations of passages of Lorem Ipsum available",
	// 	featurefour:
	// 		"It is a long established fact that a reader will be distracted by the readable",
	// 	featurefive: "Contrary to popular belief, Lorem Ipsum is not",
	// 	featuresix: "Lorem Ipsum comes from sections",
	// },
	// {
	// 	id: 4,
	// 	name: "Premium",
	// 	plantext:
	// 		"Lorem ipsum dolor sit amet, csectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis",
	// 	currency: "₹",
	// 	price: "23,000",
	// 	floatprice: ".99",
	// 	pricetext: "(Excl Tax)",
	// 	customtext: "Want to add some custom features ?",
	// 	button: "Buy Now",
	// 	learnhighlight: "*Overages",
	// 	learntext: "apply if the mentioned list features limit exceeded.",
	// 	learnbtn: "Learn More",
	// 	Featureshead: "Everything in Essential, plus",
	// 	moretext: "More About Premium",
	// 	featureone: "Content of a page when looking at its layout",
	// 	featuretwo:
	// 		"It is a long established fact that a reader will be distracted by the readable",
	// 	featurethree:
	// 		"There are many variations of passages of Lorem Ipsum available",
	// 	featurefour:
	// 		"It is a long established fact that a reader will be distracted by the readable",
	// 	featurefive: "Contrary to popular belief, Lorem Ipsum is not",
	// 	featuresix: "Lorem Ipsum comes from sections",
	// },
	// {
	// 	id: 4,
	// 	name: "Premium",
	// 	plantext:
	// 		"Lorem ipsum dolor sit amet, csectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis",
	// 	currency: "₹",
	// 	price: "23,000",
	// 	floatprice: ".99",
	// 	pricetext: "(Excl Tax)",
	// 	customtext: "Want to add some custom features ?",
	// 	button: "Buy Now",
	// 	learnhighlight: "*Overages",
	// 	learntext: "apply if the mentioned list features limit exceeded.",
	// 	learnbtn: "Learn More",
	// 	Featureshead: "Everything in Essential, plus",
	// 	moretext: "More About Premium",
	// 	featureone: "Content of a page when looking at its layout",
	// 	featuretwo:
	// 		"It is a long established fact that a reader will be distracted by the readable",
	// 	featurethree:
	// 		"There are many variations of passages of Lorem Ipsum available",
	// 	featurefour:
	// 		"It is a long established fact that a reader will be distracted by the readable",
	// 	featurefive: "Contrary to popular belief, Lorem Ipsum is not",
	// 	featuresix: "Lorem Ipsum comes from sections",
	// },
	// {
	// 	id: 4,
	// 	name: "Premium",
	// 	plantext:
	// 		"Lorem ipsum dolor sit amet, csectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis",
	// 	currency: "₹",
	// 	price: "23,000",
	// 	floatprice: ".99",
	// 	pricetext: "(Excl Tax)",
	// 	customtext: "Want to add some custom features ?",
	// 	button: "Buy Now",
	// 	learnhighlight: "*Overages",
	// 	learntext: "apply if the mentioned list features limit exceeded.",
	// 	learnbtn: "Learn More",
	// 	Featureshead: "Everything in Essential, plus",
	// 	moretext: "More About Premium",
	// 	featureone: "Content of a page when looking at its layout",
	// 	featuretwo:
	// 		"It is a long established fact that a reader will be distracted by the readable",
	// 	featurethree:
	// 		"There are many variations of passages of Lorem Ipsum available",
	// 	featurefour:
	// 		"It is a long established fact that a reader will be distracted by the readable",
	// 	featurefive: "Contrary to popular belief, Lorem Ipsum is not",
	// 	featuresix: "Lorem Ipsum comes from sections",
	// },
	// {
	// 	id: 4,
	// 	name: "Premium",
	// 	plantext:
	// 		"Lorem ipsum dolor sit amet, csectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis",
	// 	currency: "₹",
	// 	price: "23,000",
	// 	floatprice: ".99",
	// 	pricetext: "(Excl Tax)",
	// 	customtext: "Want to add some custom features ?",
	// 	button: "Buy Now",
	// 	learnhighlight: "*Overages",
	// 	learntext: "apply if the mentioned list features limit exceeded.",
	// 	learnbtn: "Learn More",
	// 	Featureshead: "Everything in Essential, plus",
	// 	moretext: "More About Premium",
	// 	featureone: "Content of a page when looking at its layout",
	// 	featuretwo:
	// 		"It is a long established fact that a reader will be distracted by the readable",
	// 	featurethree:
	// 		"There are many variations of passages of Lorem Ipsum available",
	// 	featurefour:
	// 		"It is a long established fact that a reader will be distracted by the readable",
	// 	featurefive: "Contrary to popular belief, Lorem Ipsum is not",
	// 	featuresix: "Lorem Ipsum comes from sections",
	// },
];

export default data;

import React from "react";
import AnimatedCursor from "react-animated-cursor";

const Customcursor = () => {
	return (
		<div className="Customcursor">
			<AnimatedCursor
				innerSize={10}
				outerSize={30}
				color="248, 100, 101"
				outerAlpha={0.2}
				innerScale={0.2}
				outerScale={3}
			/>
		</div>
	);
};

export default Customcursor;
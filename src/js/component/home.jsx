import React, { useState } from "react";

import Lights from "./lights.jsx";

const Home = () => {
	const [lightOn, setLightOn] = useState("red");

	return (
		<div>
			<div id="traffic-light" className="bg-dark mt-5 pt-2">
				<div
					onClick={() => setLightOn("red")}
					className={
						"light redLight" + (lightOn == "red" ? " glow" : "")
					}></div>
				<div
					onClick={() => setLightOn("yellow")}
					className={
						"light yellowLight" +
						(lightOn == "yellow" ? " glow" : "")
					}></div>
				<div
					onClick={() => setLightOn("green")}
					className={
						"light greenLight" + (lightOn == "green" ? " glow" : "")
					}></div>
			</div>
		</div>
	);
};

export default Home;

// import React from "react";
import "../styles/button.css";
const Buttons = (text) => {
	return (
		<button
			className={`${text.class} ui-btn`}
			onClick={text.click}
			type={text.type}
		>
			<span>{text.text}</span>
		</button>
	);
};

export default Buttons;

// import React from "react";
import "../styles/button.css";
const Buttons = (text) => {
	return (
		<button
			className={`${text.class} boton-elegante`}
			onClick={text.click}
			type={text.type}
		>
			{text.text}
		</button>
	);
};

export default Buttons;

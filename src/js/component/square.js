import React from "react";

const style = {
	background: "white",
	border: "2px solid grey",
	fontSize: "40px",
	cursor: "pointer",
	outline: "none",
};

const Square = ({ value, onClick }) => (
	<button style={style} onClick={onClick}>
		{value}
	</button>
);

export default Square;

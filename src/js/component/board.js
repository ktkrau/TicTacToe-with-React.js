import React from "react";
import Square from "./square.js";

const style = {
	border: "5px solid grey",
	borderRadius: "10px",
	marginTop: "50px",
	width: "300px",
	height: "300px",
	margin: "auto",
	display: "grid",
	gridTemplate: "repeat(3, 1fr) / repeat(3, 1fr)",
};

const Board = ({ squares, onClick }) => (
	<div style={style}>
		{squares.map((square, i) => (
			<Square key={i} value={square} onClick={() => onClick(i)} />
		))}
	</div>
);

export default Board;

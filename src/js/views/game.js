import React, { useState } from "react";
import { calculateWinner } from "../component/helper";
import Board from "../component/board";

const styles = {
	width: "500px",
	margin: "50px auto",
};
const Game = ({ iniciaX }) => {
	const [board, setBoard] = useState(Array(9).fill(null));
	const [xIsNext, setXisNext] = useState(iniciaX);
	const winner = calculateWinner(board);

	const handleClick = (i) => {
		const boardCopy = [...board];
		if (winner || boardCopy[i]) return;
		boardCopy[i] = xIsNext ? "X" : "O";
		setBoard(boardCopy);
		setXisNext(!xIsNext);
	};

	const renderMoves = () => (
		<button
			style={{
				color: "purple",
				background: "white",
				width: "50px",
				height: "50px",
				borderColor: "purple",
			}}
			onClick={() => setBoard(Array(9).fill(null))}>
			Start
		</button>
	);

	return (
		<>
			<Board squares={board} onClick={handleClick} />
			<div style={styles}>
				<p>
					{winner
						? "winner: " + winner
						: "Tu turno: " + (xIsNext ? "X" : "O")}
				</p>
				{renderMoves()}
			</div>
		</>
	);
};
export default Game;

import React from "react";

function Form({ iniciarJuego }) {
	return (
		<div>
			<h4>Pick A Weapon</h4>

			<div className="choose-weapon">
				<div>
					<input type="text" placeholder="participante 1" />
					<input type="text" placeholder="participante 2" />
				</div>
				<div className="choose-button">
					<button
						onClick={() => iniciarJuego(true)}
						className="button-x">
						X
					</button>
					<button
						onClick={() => iniciarJuego(false)}
						className="button-o">
						O
					</button>
				</div>
			</div>
		</div>
	);
}

export default Form;

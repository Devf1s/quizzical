import React from 'react';

function Button({result, points, resetGame, checkAnswers}) {
	return (
		<>
			{ result ?
				<div className="flex justify-center items-center gap-x-5">
					<p className="questions__score text-lg text-dark-blue
						font-bold">
						You scored {points} / {5} correct answers
					</p>
					<button
						className="questions__btn text-sm font-semibold
							bg-fill-color text-white-color text-center rounded-2xl px-8"
						onClick={resetGame}
					>
						Play again
					</button>
				</div>
				:
				<button
					className="questions__btn text-sm font-semibold
						bg-fill-color text-white-color text-center rounded-2xl px-6 mx-auto"
					onClick={checkAnswers}
				>
					Check answers
				</button>
			}
		</>
	)
}
export default Button;
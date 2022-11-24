import React, { useState } from 'react';

function Question({buttons, text, result, correctAnswer, points}) {
	const [answer, setAnswer] = useState('');
	const [selection, setSelection] = useState('');
	const buttonElements = buttons.map(option => {
		if (!result) { 
			return (
				<label 
					id={option}
					key={option}
					className={
						"option bg-transparent rounded-xl py-0.5 px-5 text-sm text-dark-blue text-center " + (selection === option ? 'selected' : '')
					}
				>
					{ option }
					<input 
						type="radio" 
						name={text} 
						value={option} 
						onClick={handleClick}
					/>
				</label>
			);
		} else {
			return (
				<label 
					id={option}
					key={option}
					className={
						"option bg-transparent rounded-xl py-0.5 px-5 text-sm text-dark-blue text-center " + (option === correctAnswer ? 'correct' : option === answer ? 'incorrect' : 'none')
					}
				>
					{ option }
					<input 
						type="radio" 
						name={text} 
						value={option} 
						onClick={handleClick}
					/>
				</label>
			);
		}
	});
	
	if (result) {
		checkAnswer();
	}

	function checkAnswer() {
		buttons.forEach(button => {
			if (button === answer) {
				if (answer === correctAnswer) {
					return points++;
				} 
			} 
		});
	}

	function handleClick(e) {
		const value = e.target.value.toString();
		points++;
		setSelection(value);
		setAnswer(value);
	}

	return (
		<div className="question__item w-full pb-4 mb-4 mx-auto">
			<p className="text text-lg text-dark-blue font-bold mb-3">
				{ text }
			</p>
			<div className="options flex flex-wrap gap-3.5"> 
				{ buttonElements }
			</div>
		</div>
	)
}
export default Question;
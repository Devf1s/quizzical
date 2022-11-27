import React, { useEffect, useState } from 'react';
import { questionsData } from './questionsData';
import StartPage from './components/StartPage';
import Question from './components/Question';
import Button from './components/Button';
import blueBlob from './img/blob-blue.svg';
import yellowBlob from './img/blob-yellow.svg';

function App() {
	const [points, setPoints] = useState(0);
	const [result, setResult] = useState(false);
	const [isQuiz, setIsQuiz] = useState(false);
	const [isLoad, setIsLoad] = useState(false);
	const [questions, setQuestions] = useState(questionsData);
	const [questionElements, setQuestionElements] = useState([]);
	
	useEffect(() => {
		if (!result) {
			setQuestions(prevQuestions => 
				[...prevQuestions].sort(() => 0.5 - Math.random()).slice(0, 5)
			);
		}	

		setQuestionElements(questions.map(question => (
			<Question 
				key={question.id}
				text={question.text}
				correctAnswer={question.answer}
				isCorrectAnswer={question.isAnswer}
				buttons={question.buttons}
				result={result}
			/>
		)));
	}, [isQuiz, result]);

	function startQuiz() {
		setIsLoad(prevLoad => !prevLoad);
		setIsQuiz(prevQuiz => !prevQuiz); // set Loader

		setTimeout(() => {
			setIsLoad(prevLoad => !prevLoad); // unset Loader
		}, 2500); 
	}

	function checkAnswers() {
		questionElements.map(question => 
			console.log(question)
		);
		setResult(prevResult => !prevResult);
	}

	function resetGame() {
		setResult(prevResult => !prevResult);
		setIsQuiz(prevQuiz => !prevQuiz);
		setPoints(0);
	}

	return (
		<div className={"container" + (isQuiz && !isLoad ? ' main-container':'')}>
			<img src={ yellowBlob } alt="Blob" className="blob top"/>

			{ isQuiz && !isLoad ? 
			<main className="main-page pt-10 pb-6">
				<div className="questions w-3/5 mx-auto">
					{ questionElements }
				</div>

				<Button 
					result={result}
					points={points}
					resetGame={() => resetGame()}
					checkAnswers={() => checkAnswers()}	
				/>

			</main>
			:
			<StartPage 
				startQuiz={startQuiz}
				isLoad={isLoad}
			/>
			}

			<img src={ blueBlob } alt="Blob" className="blob bottom"/>
		</div>
	)
} 
export default App;
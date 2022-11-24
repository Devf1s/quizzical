import React from 'react'
import Loader from './Loader';

function StartPage({isLoad, startQuiz}) {
	
	return (
		<>
			{ !isLoad ?
				<section
					className="start-page h-full flex justify-center items-center"
				>
					<div className="start-page__inner rounded-md text-center">
						<h1
							className="start-page__title text-3xl text-dark-blue font-bold"
						>
							Quizzical
						</h1>
						<p
							className="start-page__desc text-base text-dark-blue 
					font-normal mt-2 mb-7 max-w-sm"
						>
							Browser game that consists in answering written questions from various fields of knowledge
						</p>
						<button
							className="start-page__btn bg-fill-color text-white-color 
					text-center font-medium rounded-2xl w-44 h-12 mx-auto"
						onClick={startQuiz}
						>
							Start quiz
						</button>
					</div>
				</section>
				:
				<Loader/>
			}
		</>
	)
}
export default StartPage;
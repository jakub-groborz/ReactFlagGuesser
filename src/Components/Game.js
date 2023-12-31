import './Game.scss';

import Score from './Score';

import { useState, useEffect } from 'react';

function Game({ countries, setCurrentContinent }) {
	const [arr, setArr] = useState([]);
	const [randomIndex, setRandomIndex] = useState(0);
	const [score, setScore] = useState(0);
	const [gameActive, setGameActive] = useState(true);

	let wrongAnswears = 0;

	const countWrongAnswears = () => {
		const wrong = arr.filter((obj) => obj.answer === 'wrong');
		wrongAnswears = wrong.length;
		setScore(countries.length - wrongAnswears);
		setGameActive(false);
	};

	const generateRandomIndex = () => {
		const unansweredCountries = arr.filter(
			(country) => country.answer === undefined
		);
		if (unansweredCountries.length > 0) {
			const newIndex = Math.floor(Math.random() * unansweredCountries.length);
			const indexInArr = arr.findIndex(
				(country) => country === unansweredCountries[newIndex]
			);
			setRandomIndex(indexInArr);
		} else {
			countWrongAnswears();
		}
	};

	useEffect(() => {
		if (arr.length !== 0) {
			generateRandomIndex();
		}
	},);

	useEffect(() => {
		if (countries.length > 0) {
			setArr(
				countries.map((country) => ({
					name: country.name.common,
					flag: country.flags.png,
					answer: country.answer,
				}))
			);
		}
	}, [countries]);

	const handleChange = (e) => {
		if (e.target.value.toLowerCase() === arr[randomIndex].name.toLowerCase()) {
			const newArr = [...arr];
			newArr[randomIndex] = { ...newArr[randomIndex], answer: 'correct' };
			setArr(newArr);
			e.target.value = '';
		}
	};

	const handleClick = () => {
		const newArr = [...arr];
		newArr[randomIndex] = { ...newArr[randomIndex], answer: 'wrong' };
		setArr(newArr);
	};


	const handleRestartClick = (e) => {
		console.log(e.target)
		arr.forEach((element) => setArr(element.answer = undefined))
		setCurrentContinent(undefined)
	}


	if (countries.length === 0) {
		return <div className="loading">Loading...</div>;
	}

	return (
		<>
			{gameActive ? (
				<div className="game-wrapper">
					{/* <h1>{arr[randomIndex] && arr[randomIndex].name}</h1> */}
					<div className="image-cotainer">
						<img src={arr[randomIndex] && arr[randomIndex].flag} alt="flag" />
					</div>
					<span>
						<input type="text" onChange={handleChange} />
						<button onClick={handleClick}>giveUp</button>
					</span>
				</div>
			) : (
				<Score correctAnswears={score} totalQuestions={countries.length} handleRestartClick={handleRestartClick}/>
			)}
		</>
	);
}

export default Game;

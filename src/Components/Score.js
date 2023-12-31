import './Score.scss'

function Score({ correctAnswears, totalQuestions, handleRestartClick }) {

    const percentage = (correctAnswears * 100)/totalQuestions

	return (
		<div className="game-wrapper">
            <p>Your Score: <strong>{`${correctAnswears}/${totalQuestions}`}</strong></p>
            <p className='percentage'>{percentage.toFixed(1)}%</p>
			<button onClick={handleRestartClick}>Restart</button>
		</div>
	);
}

export default Score;

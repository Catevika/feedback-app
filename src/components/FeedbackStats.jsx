import PropTypes from 'prop-types';

function FeedbackStats({ feedback }) {
	// Calculate ratings average
	let average =
		feedback.reduce((acc, cur) => {
			return acc + cur.rating;
		}, 0) / feedback.length;

	// Get one decimal only for decimals, with a regex for no trailing .0 for integers
	average = average.toFixed(1).replace(/[.,]0$/, '');

	return (
		<div className='feedback-stats'>
			<h4>{feedback.length} Reviews</h4>
			<h4>Average Rating: {isNaN(average) ? 0 : average}</h4>
		</div>
	);
}

FeedbackStats.prototypes = {
	feedback: PropTypes.array.isRequired
};

export default FeedbackStats;

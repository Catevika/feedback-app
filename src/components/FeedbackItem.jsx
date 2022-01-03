import PropTypes from 'prop-types';

import Card from './shared/Card';

function FeedbackItem({ item }) {
	const { rating, text } = item;
	return (
		<Card>
			<div className='num-display'>{rating}</div>
			<div className='text-display'>{text}</div>
		</Card>
	);
}

FeedbackItem.propTypes = {
	item: PropTypes.object.isRequired
};

export default FeedbackItem;

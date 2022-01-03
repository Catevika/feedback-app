import { useState } from 'react';
import Card from './shared/Card';

function FeedbackForm() {
	const [text, setText] = useState('');

	const handleTextChange = (e) => setText(e.target.value);

	return (
		<Card>
			<form>
				<h2>How would you rate your service with us?</h2>
				{/* TODO rating select component */}
				<div className='input-group'>
					<input
						onChange={handleTextChange}
						type='text'
						name=''
						placeholder='Write a Review'
						value={text}
					/>
					<button type='submit'>Send</button>
				</div>
			</form>
		</Card>
	);
}

export default FeedbackForm;

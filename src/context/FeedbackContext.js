import { createContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
	const [feedback, setFeedback] = useState([
		{
			id: 1,
			text: 'This item is feedback item 1',
			rating: 10
		},
		{
			id: 2,
			text: 'This item is feedback item 2',
			rating: 9
		},
		{
			id: 3,
			text: 'This item is feedback item 3',
			rating: 7
		}
	]);

	const [feedbackEdit, setFeedbackEdit] = useState({
		item: {},
		edit: false
	});

	const deleteFeedback = (id) => {
		if (window.confirm('Are you sure you want to delete this item?')) {
			setFeedback(feedback.filter((item) => item.id !== id));
		}
	};

	const addFeedback = (newFeedback) => {
		newFeedback.id = uuidv4();
		setFeedback([newFeedback, ...feedback]);
	};

	const editFeedback = (item) => {
		setFeedbackEdit({
			item,
			edit: true
		});
	};

	const updateFeedback = (id, updatedItem) => {
		setFeedback(
			feedback.map((item) =>
				item.id === id ? { ...item, ...updatedItem } : item
			)
		);

		setFeedbackEdit({
			item: {},
			edit: false
		});
	};

	return (
		<FeedbackContext.Provider
			value={{
				// states
				feedback,
				feedbackEdit, // * state of the edited item
				// functions
				deleteFeedback,
				addFeedback,
				editFeedback, // * function that efit the item
				updateFeedback
			}}
		>
			{children}
		</FeedbackContext.Provider>
	);
};

export default FeedbackContext;

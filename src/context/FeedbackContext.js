import { createContext, useState, useEffect } from 'react';
const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
	const [isLoading, setIsLoading] = useState(true);
	const [feedback, setFeedback] = useState([]);

	const [feedbackEdit, setFeedbackEdit] = useState({
		item: {},
		edit: false
	});

	const fetchFeedback = async () => {
		const response = await fetch('/feedback?_sort=id&_order=desc');

		const data = await response.json();

		setFeedback(data);
		setIsLoading(false);
	};

	useEffect(() => {
		fetchFeedback();
	}, []);

	const deleteFeedback = (id) => {
		if (window.confirm('Are you sure you want to delete this item?')) {
			setFeedback(feedback.filter((item) => item.id !== id));
		}
	};

	const addFeedback = async (newFeedback) => {
		const response = await fetch('/feedback', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(newFeedback)
		});

		const data = await response.json();

		setFeedback([data, ...feedback]);
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
				isLoading,
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

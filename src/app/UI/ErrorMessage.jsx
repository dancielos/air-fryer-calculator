export default function ErrorMessage({
	message = 'Something went wrong.',
	isHidden,
}) {
	return (
		<span className={`error-message ${isHidden && 'hide'}`}>
			Error: {message}
		</span>
	);
}

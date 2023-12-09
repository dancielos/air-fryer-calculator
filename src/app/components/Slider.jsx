import InputGroup from '../UI/InputGroup';

export default function Slider({ label, type, id }) {
	return (
		<InputGroup>
			<label htmlFor={id}>{label}</label>
			<input type={type} id={id} />
		</InputGroup>
	);
}

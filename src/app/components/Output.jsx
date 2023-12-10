import InputGroup from '../UI/InputGroup';

export default function Output({ label }) {
	return (
		<div className='flex-column af-calc__output-group'>
			<label>{label}</label>
			<input
				className='af-calc__output-value'
				type='text'
				disabled
				value='400'
			/>
		</div>
	);
}

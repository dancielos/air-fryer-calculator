import InputGroup from '../UI/InputGroup';

export default function Output({ unit, label, value }) {
	return (
		<div className='flex-column af-calc__output-group'>
			<label>{label}</label>
			<input
				className='af-calc__output-value'
				type='text'
				disabled
				value={value}
			/>
		</div>
	);
}

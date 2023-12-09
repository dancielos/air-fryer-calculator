import InputGroup from '../UI/InputGroup';

export default function Output({ label }) {
	return (
		<div className='flex-column'>
			<label>{label}</label>
			<input type='text' disabled value='400' />
		</div>
	);
}

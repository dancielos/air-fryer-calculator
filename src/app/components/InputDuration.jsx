import Input from '../UI/Input';
import InputGroup from '../UI/InputGroup';

export default function InputDuration({}) {
	return (
		<>
			<label>Duration</label>
			<div className='af-calc__input-wrapper input-duration'>
				<Input label='hours' />
				<Input label='minutes' />
			</div>
		</>
	);
}

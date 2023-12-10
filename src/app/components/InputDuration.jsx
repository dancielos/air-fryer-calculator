import { useRef } from 'react';
import Input from '../UI/Input';
import InputGroup from '../UI/InputGroup';

export default function InputDuration({ onDurationChange, hours, minutes }) {
	const inputHours = useRef();
	const inputMinutes = useRef();

	function handleDurationChange() {
		onDurationChange(inputHours.current.value, inputMinutes.current.value);
	}

	return (
		<>
			<label>Duration</label>
			<div className='af-calc__input-wrapper input-duration'>
				<Input
					label='hours'
					onChange={handleDurationChange}
					value={hours}
					ref={inputHours}
				/>
				<Input
					label='minutes'
					onChange={handleDurationChange}
					value={minutes}
					ref={inputMinutes}
				/>
			</div>
		</>
	);
}

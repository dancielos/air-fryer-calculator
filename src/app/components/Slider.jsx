// import InputGroup from '../UI/InputGroup';
import { F_MIN, F_MAX, F_STEP, C_MAX, C_MIN, C_STEP } from '../store/data';

export default function Slider({
	label,
	id,
	unit,
	onTempChange,
	value,
	formattedValue,
}) {
	let min, max, step;
	if (unit === 'F') {
		min = F_MIN;
		max = F_MAX;
		step = F_STEP;
		// value = 350;
	} else {
		min = C_MIN;
		max = C_MAX;
		step = C_STEP;
	}
	function handleOnTempChange(e) {
		onTempChange(e.target.value);
	}
	return (
		<>
			<label htmlFor={id}>{label}</label>
			<div className='af-calc__slider-container af-calc__input-wrapper'>
				<input
					className='af-calc__slider'
					type='range'
					value={value}
					min={min}
					max={max}
					step={step}
					onChange={handleOnTempChange}
				/>
				<span className='af-calc__slider-value '>{`${formattedValue}º${unit}`}</span>
			</div>
		</>
	);
}

// import InputGroup from '../UI/InputGroup';

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
		min = 175;
		max = 500;
		step = 25;
		// value = 350;
	} else {
		min = 75;
		max = 270;
		step = 15;
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

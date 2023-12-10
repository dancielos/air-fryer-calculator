import InputGroup from '../UI/InputGroup';

export default function Slider({ label, type, id }) {
	return (
		<>
			<label htmlFor={id}>{label}</label>
			<div className='af-calc__slider-container af-calc__input-wrapper'>
				<input
					className='af-calc__slider'
					type='range'
					// value='250'
					min='170'
					max='500'
					step='25'
				/>
				<span className='af-calc__slider-value '>0</span>
			</div>
		</>
	);
}

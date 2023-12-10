// import * as classes from './inputUnit.module.css';

export default function InputUnit({
	id = 'oven',
	checked = true,
	onUnitChange,
}) {
	// console.log(classes);
	// let tempValue = 0;

	function handleUnitSwitch(e) {
		onUnitChange(id, e.target.checked);
	}
	return (
		<div className='af-calc__btn-container'>
			<label className='af-calc__btn-unit-switch'>
				<input
					value='1'
					id={id}
					name={id}
					type='checkbox'
					// defaultChecked={false}
					checked={checked}
					onChange={handleUnitSwitch}
				/>
				<label
					className='af-calc__btn-unit-switch-inner'
					data-off='ºC'
					data-on='ºF'
					htmlFor={id}
				></label>
			</label>
		</div>
	);
}

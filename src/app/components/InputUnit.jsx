// import * as classes from './inputUnit.module.css';

export default function InputUnit() {
	// console.log(classes);
	return (
		<div className='af-calc__btn-container'>
			<label className='af-calc__btn-color-mode-switch'>
				<input value='1' id='color_mode' name='color_mode' type='checkbox' />
				<label
					className='af-calc__btn-color-mode-switch-inner'
					data-off='ºC'
					data-on='ºF'
					htmlFor='color_mode'
				></label>
			</label>
		</div>
	);
}

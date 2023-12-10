import { forwardRef } from 'react';

export default forwardRef(function Input({ onChange, label, value }, ref) {
	return (
		<div className='af-calc__input-container'>
			<label className='af-calc__input-label'>{label}</label>
			<input
				className='af-calc__input'
				type='text'
				value={value}
				ref={ref}
				onChange={onChange}
			/>
		</div>
	);
});

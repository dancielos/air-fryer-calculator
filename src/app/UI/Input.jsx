export default function Input({ type, label }) {
	return (
		<div className='af-calc__input-container'>
			<label className='af-calc__input-label'>{label}</label>
			<input className='af-calc__input' type='text' />
		</div>
	);
}

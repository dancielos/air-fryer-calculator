export default function Row({ children, boxType, className = '' }) {
	return (
		<div className={`af-calc__row af-calc__${boxType} ${className}`}>
			{children}
		</div>
	);
}

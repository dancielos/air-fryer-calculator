export default function Row({ children, boxType }) {
	return <div className={`af-calc__row af-calc__${boxType}`}>{children}</div>;
}

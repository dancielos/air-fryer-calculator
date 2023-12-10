export function convertTemp(to, value) {
	//prettier-ignore

	const result = to === 'C' ? (value - 32) * (5 / 9) : ((value * 9) / 5) + 32;
	// console.log(result);
	const truncResult = Math.trunc(result);
	const remainder = truncResult % 5;
	console.log(remainder);
	const formattedResult =
		remainder > 0
			? remainder >= 2
				? truncResult - remainder
				: truncResult + (5 - remainder)
			: truncResult;
	return { realResult: result, formattedResult };
}

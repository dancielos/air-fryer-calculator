import { C_AF_MAX, F_AF_MAX } from '../store/data';

export function convertTemp(to, value) {
	//prettier-ignore

	const result = to === 'C' ? (value - 32) * (5 / 9) : ((value * 9) / 5) + 32;
	// console.log(result);
	const truncResult = Math.trunc(result);
	const remainder = truncResult % 5;
	// console.log(remainder);
	const formattedResult =
		remainder > 0
			? remainder >= 2
				? truncResult - remainder
				: truncResult + (5 - remainder)
			: truncResult;
	return { realResult: result, formattedResult };
}

export function convertOvenToAirFryer(unitFrom, unitTo, temp, hours, minutes) {
	const totalMinutes = minutes + hours * 60;
	const durationInMinutes = Math.trunc(totalMinutes * 0.8);
	const minutesResult = durationInMinutes % 60;
	const hoursResult = (durationInMinutes - minutesResult) / 60;
	const duration = `${
		hoursResult !== 0
			? `${hoursResult} hour${hoursResult > 1 ? 's' : ''}, `
			: ''
	}${minutesResult} minute${minutesResult > 1 ? 's' : ''}`;

	// const { realResult: result, formattedResult } = convertTemp(unitFrom, temp);
	// console.log(temp, result);

	// let tempResult = unitTo === 'F' ? result - 25 : result - 15;

	// if (unitTo === 'F' && tempResult > F_AF_MAX) tempResult = F_AF_MAX;
	// if (unitTo === 'C' && tempResult > C_AF_MAX) tempResult = C_AF_MAX;

	// if (unitFrom === unitTo) {
	// 	return { temp: tempResult, formattedTemp: tempResult, duration };
	// }

	// TODO: convert currentValue if <from !== to>
	const { result, formattedResult } = convertTemp(unitTo, temp);
	let tempResult = unitFrom !== unitTo ? formattedResult : temp;

	// TODO: subtract the result depending on the TO unit
	tempResult -= unitTo === 'F' ? 25 : 15;

	// TODO: IF the result is over the max limit, rewrite it to the maximum value
	if (unitTo === 'F' && tempResult > F_AF_MAX) tempResult = F_AF_MAX;
	if (unitTo === 'C' && tempResult > C_AF_MAX) tempResult = C_AF_MAX;

	// TODO: return the results...

	return { temp: tempResult, formattedTemp: tempResult, duration };
}

// import '@/styles/styles.scss';
'use client';

import { useState } from 'react';
import Card from './UI/Card';
import Heading from './UI/Heading';
import InputGroup from './UI/InputGroup';
import Row from './UI/Row';
import InputDuration from './components/InputDuration';
import InputUnit from './components/InputUnit';
import Output from './components/Output';
import Slider from './components/Slider';
import { convertOvenToAirFryer, convertTemp } from './utils/utils';
import {
	C_MAX,
	C_MIN,
	F_MAX,
	F_MIN,
	HOURS_MAX,
	HOURS_MIN,
	MINUTES_MAX,
	MINUTES_MIN,
} from './store/data';
import ErrorMessage from './UI/ErrorMessage';

export default function Home() {
	const [tempUnit, setTempUnit] = useState({ oven: 'F', airFryer: 'F' });
	const [inputs, setInputs] = useState({
		temp: 350,
		formattedTemp: 350,
		hours: 0,
		minutes: 20,
	});
	const [outputs, setOutputs] = useState({
		temp: 325,
		formattedTemp: 325,
		duration: '16 minutes',
	});

	const [error, setError] = useState(null);

	function onUnitChange(id, isChecked) {
		// console.log(id, value);
		const unit = isChecked ? 'F' : 'C';
		setTempUnit((prevTempUnit) => {
			return { ...prevTempUnit, [id]: unit };
		});
		if (id === 'oven') {
			//C to F
			const { realResult, formattedResult } = convertTemp(unit, inputs.temp);

			setInputs((prevInput) => {
				return {
					...prevInput,
					formattedTemp: formattedResult,
					temp: realResult,
				};
			});
		} else {
			console.log(unit);
			const { realResult, formattedResult } = convertTemp(unit, outputs.temp);

			setOutputs((prevOutput) => {
				return {
					...prevOutput,
					formattedTemp: formattedResult,
					temp: realResult,
				};
			});
		}
	}

	function onTempChange(value) {
		if (tempUnit.oven === 'F') {
			if (value > F_MAX || value < F_MIN) return;
		}
		if (tempUnit.oven === 'C') {
			if (value > C_MAX || value < C_MIN) return;
		}
		const newTemp = +value;
		setInputs((prevInput) => {
			return { ...prevInput, temp: newTemp, formattedTemp: newTemp };
		});

		setOutputs(
			convertOvenToAirFryer(
				tempUnit.oven,
				tempUnit.airFryer,
				newTemp,
				+inputs.hours,
				+inputs.minutes
			)
		);
	}

	function onDurationChange(hours, minutes) {
		if (!Number.isFinite(+hours) || !Number.isFinite(+minutes)) return;

		if (hours > HOURS_MAX || hours < HOURS_MIN) {
			setError(`Uh-oh! You can't go beyond the maximum allowed hours: 48.`);
			// errorTimer();
			return;
		}
		if (minutes > MINUTES_MAX || minutes < MINUTES_MIN) {
			setError(`Hold on! The maximum allowed minutes is capped at 2880.`);
			// errorTimer();
			return;
		}
		setError(null);
		// clearTimeout(errorTimer);

		// console.log(+hours, +minutes);
		setInputs((prevInput) => {
			return { ...prevInput, hours: +hours, minutes: +minutes };
		});
		setOutputs(
			convertOvenToAirFryer(
				tempUnit.oven,
				tempUnit.airFryer,
				+inputs.temp,
				+hours,
				+minutes
			)
		);
	}

	return (
		<Card>
			<form className='af-calc__form'>
				<div className='flex-column af-calc__oven-container'>
					<Row boxType='grid'>
						<Heading label='Conventional Oven' />
						<InputUnit
							id='oven'
							checked={tempUnit.oven === 'F' ? true : false}
							onUnitChange={onUnitChange}
						/>
					</Row>
					<InputGroup>
						<Slider
							type='range'
							label='Temperature'
							id='af-calc__temperature'
							unit={tempUnit.oven}
							onTempChange={onTempChange}
							value={inputs.temp}
							formattedValue={inputs.formattedTemp}
						/>
						<InputDuration
							onDurationChange={onDurationChange}
							hours={inputs.hours}
							minutes={inputs.minutes}
						/>
					</InputGroup>
					<ErrorMessage message={error} isHidden={error ? false : true} />
					{/* {error && <ErrorMessage message={error} />} */}
				</div>

				<hr />
				<div className='af-calc__output-container'>
					<Row boxType='grid'>
						<Heading label='Air Fryer' />
						<InputUnit
							id='airFryer'
							checked={tempUnit.airFryer === 'F' ? true : false}
							onUnitChange={onUnitChange}
						/>
					</Row>
					<Row boxType='grid' className='af-calc__output'>
						<Output
							label='Temperature'
							value={`${outputs.formattedTemp} º${tempUnit.airFryer}`}
						/>
						<Output label='Duration' value={outputs.duration} />
					</Row>
				</div>
			</form>
		</Card>
	);
}

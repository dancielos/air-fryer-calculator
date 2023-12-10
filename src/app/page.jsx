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
import { convertTemp } from './utils';

export default function Home() {
	const [tempUnit, setTempUnit] = useState({ oven: 'F', airFryer: 'F' });
	const [inputs, setInputs] = useState({
		temp: 350,
		formattedTemp: 350,
		hours: 0,
		minutes: 20,
	});

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
		}
	}

	function onTempChange(value) {
		setInputs((prevInput) => {
			return { ...prevInput, temp: +value, formattedTemp: +value };
		});
	}

	function onDurationChange(hours, minutes) {
		console.log(+hours, +minutes);
		setInputs((prevInput) => {
			return { ...prevInput, hours: +hours, minutes: +minutes };
		});
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
						<Output label='Temperature' />
						<Output label='Duration' />
					</Row>
				</div>
			</form>
		</Card>
	);
}

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

export default function Home() {
	const [tempUnit, setTempUnit] = useState({ oven: 'F', airFryer: 'F' });

	function onUnitChange(id, isChecked) {
		// console.log(id, value);
		setTempUnit((prevTempUnit) => {
			const unit = isChecked ? 'F' : 'C';
			return { ...prevTempUnit, [id]: unit };
		});
	}

	// console.log(tempUnit);

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
						/>
						<InputDuration />
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

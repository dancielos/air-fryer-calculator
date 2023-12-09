import Card from './UI/Card';
import Heading from './UI/Heading';
import Row from './UI/Row';
import InputDuration from './components/InputDuration';
import InputUnit from './components/InputUnit';
import Output from './components/Output';
import Slider from './components/Slider';

export default function Home() {
	return (
		<Card>
			<form className='af-calc__form'>
				<div className='flex-column af-calc__oven-container'>
					<Row boxType='grid'>
						<Heading label='Conventional Oven' />
						<InputUnit />
					</Row>
					<Slider type='range' label='Temperature' id='af-calc__temperature' />
					<InputDuration />
				</div>

				<hr />
				<Row boxType='grid'>
					<Heading label='Air Fryer' className='grid-span-end' />
					<Output label='Temperature' />
					<Output label='Duration' />
				</Row>
			</form>
		</Card>
	);
}

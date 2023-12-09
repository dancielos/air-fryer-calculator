import { Noto_Serif } from 'next/font/google';

const notoSerif = Noto_Serif({ weight: ['600'], subsets: ['latin'] });

export default function Heading({ label, className = '' }) {
	return (
		<h3 className={`af-calc__heading ${notoSerif.className} ${className}`}>
			{label}
		</h3>
	);
}

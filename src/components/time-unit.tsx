import { Framework } from '@/utils/framework';
import { cn } from '@/utils/tailwind-utils';
import { NumberRotation } from './numberRotation';

interface Props {
	label: string;
	value: number;
	currentFramework: Framework;
}

export const TimeUnit = ({ label, value, currentFramework }: Props) => {
	return (
		<div className='flex flex-col'>
			<div className='text-white text-3xl font-semibold'>
				<NumberRotation number={value} />
			</div>
			<div
				className={cn('text-[8px] font-medium', {
					'bg-purple-300': currentFramework === 'qwik',
					'bg-sky-300': currentFramework === 'safari',
					'bg-yellow-300': currentFramework === 'chrome',
					'bg-teal-300': currentFramework === 'tailwind',
					'bg-blue-300': currentFramework === 'react',
					'bg-green-300': currentFramework === 'vue',
					'bg-orange-400': currentFramework === 'svelte',
					'bg-red-300': currentFramework === 'mobile',
					'bg-neutral-300': currentFramework === 'desktop',
				})}
			>
				{label}
			</div>
		</div>
	);
};

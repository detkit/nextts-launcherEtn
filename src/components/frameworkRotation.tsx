import { assets } from '@/utils/assets';
import { frameworks, type Framework } from '@/utils/framework';
import { cn } from '@/utils/tailwind-utils';
import Image from 'next/image';

export const FrameworkRotation = ({
	currentFramework,
}: {
	currentFramework: Framework;
}) => {
	return (
		<div className='w-[80px] h-[80px] mx-2 -mt-2 align-middle inline-flex relative'>
			{frameworks.map((name, idx) => (
				<Image
					key={name}
					src={assets[name]}
					alt='Framework Logo'
					width={80}
					height={80}
					className={cn(
						'w-full h-full object-contain object-center absolute top-0 left-0 transition-all duration-300',
						currentFramework === name
							? 'opacity-100 transform-none'
							: idx > frameworks.indexOf(currentFramework)
							? 'opacity-0 -translate-y-2'
							: 'opacity-0 translate-y-2'
					)}
				/>
			))}
		</div>
	);
};

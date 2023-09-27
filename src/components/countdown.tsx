import { calculateTimeToEvent } from '@/utils/countdown';
import { type Framework } from '@/utils/framework';
import { useEffect, useState } from 'react';
import { TimeUnit } from './time-unit';

export const CountdownTimer = ({
	currentFramework,
}: {
	currentFramework: Framework;
}) => {
	const [countDown, setCountDown] = useState(calculateTimeToEvent());

	useEffect(() => {
		const intervalId = setInterval(() => {
			setCountDown(calculateTimeToEvent());
		}, 1000);

		return () => clearInterval(intervalId);
	}, []);

	return (
		<div className='flex gap-[10px] text-center'>
			<TimeUnit
				label='DAYS'
				value={countDown.days}
				currentFramework={currentFramework}
			/>
			<TimeUnit
				label='HOURS'
				value={countDown.hours}
				currentFramework={currentFramework}
			/>
			<TimeUnit
				label='MINUTES'
				value={countDown.minutes}
				currentFramework={currentFramework}
			/>
			<TimeUnit
				label='SECONDS'
				value={countDown.seconds}
				currentFramework={currentFramework}
			/>
		</div>
	);
};

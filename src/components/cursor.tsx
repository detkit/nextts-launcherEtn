'use client';

import { assets } from '@/utils/assets';
import Image from 'next/image';
import { RefObject, useEffect, useState } from 'react';

const Cursor = ({ btnRef }: { btnRef: RefObject<HTMLButtonElement> }) => {
	const [cursorPosition, setCursorPosition] = useState({ x: -100, y: -100 });

	useEffect(() => {
		async function animateCursor() {
			if (!btnRef.current) return;

			await new Promise((resolve) => setTimeout(resolve, 1000));

			const btnRect = btnRef.current?.getBoundingClientRect();
			const x = btnRect.x + btnRect.width / 2;
			const y = btnRect.y + btnRect.height / 2;
			setCursorPosition({ x, y });

			await new Promise((resolve) => setTimeout(resolve, 1000));

			const newY = y + 150;
			setCursorPosition({ x, y: newY });

			btnRef.current.style.transition = 'transform 700ms ease-in-out';
			btnRef.current.style.transform = `translateY(150px)`;

			await new Promise((resolve) => setTimeout(resolve, 1000));

			setCursorPosition({ x: window.innerWidth - 100, y: -100 });
		}

		animateCursor();
	}, []);

	return (
		<Image
			className={`duration-700 absolute transition-all ease-in-out z-50`}
			style={{
				top: `${cursorPosition.y}px`,
				left: `${cursorPosition.x}px`,
			}}
			alt='Cursor'
			src={assets.cursor}
			width={80}
			height={50}
		/>
	);
};

export default Cursor;

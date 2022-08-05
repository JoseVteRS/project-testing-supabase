import React, { FC } from 'react';

type Props = {
	onClick: () => void;
	children: any;
};

const Button: FC<Props> = ({ onClick, children }: Props) => {
	return (
		<button
			className='bg-yellow-300 text-neutral-700 font-semibold p-2 rounded flex mt-5 focus hover '
			onClick={onClick}
		>
			{children}
		</button>
	);
};

export default Button;

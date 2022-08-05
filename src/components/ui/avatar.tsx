import React, { FC } from 'react';

type Props = {
	imageSrc: string;
};

const Avatar: FC<Props> = ({ imageSrc }) => {
	return <img src={imageSrc} className='rounded-full w-10' />;
};

export default Avatar;

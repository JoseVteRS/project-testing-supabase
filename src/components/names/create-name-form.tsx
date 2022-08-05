import React, { ChangeEvent, FormEvent, useState } from 'react';
import { saveName } from '../../lib/save-name';

const closeIcon = (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		fill='none'
		viewBox='0 0 24 24'
		stroke='currentColor'
		stroke-width='2'
	>
		<path
			stroke-linecap='round'
			stroke-linejoin='round'
			d='M6 18L18 6M6 6l12 12'
		/>
	</svg>
);

type Name = {
	name: string;
	sex: string;
};

const CreateNameForm = (props: Props) => {
	const [data, setData] = useState<Name>({ name: '', sex: '' });
	const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
		setData({ ...data, name: event.target.value });
	};

	const handleSexChange = (event: ChangeEvent<HTMLInputElement>) => {
		setData({ ...data, sex: event.target.value });
	};

	const handeleSubmit = async (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		saveName(data);
	};

	return (
		// TODO: Conver this in a Modal component
		<div className='w-full  bg-neutral-900 text-neutral-200 p-5 rounded-xl relative'>
			<button className='absolute bg-pink-800 h-8 w-8 grid place-content-center -right-2 -top-2 rounded-lg'>
				<span className='h-4 w-4 block'>{closeIcon}</span>
			</button>
			<form onSubmit={handeleSubmit}>
				<label htmlFor='name'>
					<p className=' mb-2 text-md'>Save your favorite name</p>
					<input
						className='rounded px-4 py-2 w-full  font-semibold text-lg focus bg-neutral-800 shadow'
						type='text'
						name='name'
						id='name'
						placeholder='p.e: Lucia'
						onChange={handleNameChange}
					/>
				</label>

				<label htmlFor='sex' className='my-8 block'>
					<p className=' mb-2 text-md'>Genre</p>

					<div className='flex gap-5'>
						<div className='flex gap-3'>
							<p>Male:</p>
							<input
								className='w-4 accent-yellow-300'
								type='radio'
								name='sex'
								value='male'
								onChange={handleSexChange}
							/>
						</div>

						<div className='flex gap-3'>
							<p>Female:</p>
							<input
								className='w-4 accent-yellow-300'
								type='radio'
								name='sex'
								value='female'
								onChange={handleSexChange}
							/>
						</div>

						<div className='flex gap-3'>
							<p>DKDA</p>
							<input
								className='w-4 accent-yellow-300'
								type='radio'
								name='sex'
								value='dkda'
								onChange={handleSexChange}
							/>
						</div>
					</div>
				</label>

				<button className='bg-yellow-300 text-neutral-700 font-semibold p-2 rounded flex mt-5 focus hover'>
					Save it!
				</button>
			</form>
		</div>
	);
};

export default CreateNameForm;

import { FC, useEffect, useState } from 'react';
import { listNamesByOwner } from '../../lib/list-names-by-owner';

const ListNamesCreatedByUser: FC = () => {
	const [names, setNames] = useState();
	const [error, setError] = useState(null);
	useEffect(() => {
		listNamesByOwner().then(([error, names]) => {
			if (error) return setError(error);
			setNames(names);
		});
	}, []);

	if (error)
		return (
			<p className='text-red-500 font-medium my-5'>Can't show de names</p>
		);
	if (!names) return <p>Loading names ...</p>;

	console.log(names);

	return (
		<table className=' w-full '>
			<tr className=' bg-neutral-900'>
				<th className='p-3'>Name</th>
				<th className='p-3'>Genre</th>
				<th className='p-3'>Owner</th>
			</tr>

			{names.map(({ name, sex, owner }) => (
				<tr className=' text-center even:bg-neutral-700'>
					<td className='p-3'>{name}</td>
					<td className='p-3'>{sex}</td>
					<td className='p-3'>{owner.username}</td>
				</tr>
			))}
		</table>
	);
};

export default ListNamesCreatedByUser;

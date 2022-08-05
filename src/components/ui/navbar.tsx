import { FC } from 'react';
import { User } from '../../lib/supabase';
import Avatar from './avatar';
import LoginButton from './login-button';
import LogoutButton from './logout-button';

type Props = {
	user?: User | undefined | null;
};

const Navbar: FC<Props> = ({ user }) => {
	console.log(user);
	return (
		<nav className='bg-neutral-900 p-3'>
			<div className='flex gap-3'>
				{!user && <LoginButton redirect={true} />}
				{user && <Avatar imageSrc={user.avatar} />}
				{user && <LogoutButton />}
			</div>
		</nav>
	);
};

export default Navbar;

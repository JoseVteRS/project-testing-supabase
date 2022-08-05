import ListNamesCreatedByUser from '../components/names/list-created-by-user';
import Avatar from '../components/ui/avatar';
import LoginButton from '../components/ui/login-button';
import LogoutButton from '../components/ui/logout-button';
import Navbar from '../components/ui/navbar';
import { useUser } from '../hooks/use-user';

type Props = {
	children: any;
};

const MainLayout = ({ children }: Props) => {
	const userData = useUser();
	return (
		<main className='h-screen bg-neutral-800 text-neutral-200'>
			<Navbar user={userData} />
			<div className='w-11/12 md:container mx-auto py-10'>
				{children}
				<div className='mt-16'>
					<p>My names</p>
					<ListNamesCreatedByUser />
				</div>
			</div>
		</main>
	);
};

export default MainLayout;

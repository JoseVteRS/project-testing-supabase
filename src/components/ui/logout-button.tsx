import { useEffect, useState } from 'react';
import { useUser } from '../../hooks/use-user';
import { supabase } from '../../lib/supabase';

const LogoutButton = () => {
	const user = useUser();

	const [hidden, setHidden] = useState(true);

	useEffect(() => {
		if (user) setHidden(false);
	}, [user]);

	const logout = async () => {
		const { error } = await supabase.auth.signOut();
		window.location.href = '/';
		// TODO: Send this error to somewhere more useful!!! 🤣
		if (error) console.error(error);
	};
	return (
		<button
			id='logout-button'
			className={`${hidden ? 'hidden' : ''}`}
			onClick={logout}
		>
			Logout
		</button>
	);
};

export default LogoutButton;

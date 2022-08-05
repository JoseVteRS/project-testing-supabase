import React, { FC, useEffect } from 'react';
import { useUser } from '../../hooks/use-user';
import { extractInfoFrom, supabase } from '../../lib/supabase';
import Button from './button';

type Props = {
	redirect: boolean;
};

const LoginButton: FC<Props> = ({ redirect }) => {
	const user = useUser();

	useEffect(() => {
		const { data: listener } = supabase.auth.onAuthStateChange(
			(event, session) => {
				if (redirect) {
					const newUser = extractInfoFrom(session?.user);
					window.location.href = `/`;
				}
			}
		);

		return () => listener?.unsubscribe();
	}, []);

	const login = async () => {
		const { error } = await supabase.auth.signIn(
			{
				provider: 'github'
			},
			{
				redirectTo: window.location.origin
			}
		);

		// TODO: Send this error to somewhere more useful!!! 🤣
		if (error) console.error(error);
	};

	return <Button onClick={login}>login</Button>;
};

export default LoginButton;

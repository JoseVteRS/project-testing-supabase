import { useState } from 'react';
import { extractInfoFrom, supabase } from '../lib/supabase';

export const useUser = () => {
	const [user] = useState(() => {
		const rawUser = supabase.auth.user();

		if (rawUser !== null) return extractInfoFrom(rawUser);
	});

	return user;
};

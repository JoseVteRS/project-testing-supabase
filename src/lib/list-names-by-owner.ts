import { supabase } from './supabase';

export const listNamesByOwner = async () => {
	const { data, error } = await supabase
		.from('names')
		.select(`*, owner(username)`)
		.order('created_at', { ascending: false });
	return [error, data];
};

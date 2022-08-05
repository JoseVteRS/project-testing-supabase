import { supabase } from './supabase';

export interface ISaveName {
	name: string;
	sex: string;
}

export const saveName = async ({ name, sex }: ISaveName) => {
	const { data, error } = await supabase.from('names').insert({
		owner: '838e5558-ba1a-430c-bf76-3d35f0f0a10b',
		name,
		sex
	});

	return [error, data];
};

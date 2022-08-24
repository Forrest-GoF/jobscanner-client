import { GET, PATH } from '@/constants/api';
import { TagResponse } from '@/types/apis/tag';
import { requester } from './requester';

export const getTechTags = async () => {
	const {
		tag: { index },
	} = PATH;

	const { data } = await requester<TagResponse>({
		method: GET,
		url: index,
	});

	return data;
};

import { GET, PATH } from '@/constants/api';
import { TagResponseDto } from '@/types/apis/tag';
import { requester } from './requester';

export const getTechTags = async () => {
	const {
		tag: { index },
	} = PATH;

	const { data } = await requester<TagResponseDto>({
		method: GET,
		url: index,
	});

	return data.data;
};

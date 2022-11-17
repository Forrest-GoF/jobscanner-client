import { GET, PATH } from '@/constants/api';
import { DutyResponseDto } from '@/types/apis/duty';
import { requester } from './requester';

export const getDuties = async () => {
	const {
		duty: { index },
	} = PATH;

	const { data } = await requester<DutyResponseDto>({
		method: GET,
		url: `${index}`,
	});

	return data.data;
};

import { GET, PATH } from '@/constants/api';
import { requester } from '@/apis/requester';

export const getUserInfo = async () => {
	const {
		user: { info },
	} = PATH;

	const response = await requester({
		method: GET,
		url: info,
	});

	return response;
};

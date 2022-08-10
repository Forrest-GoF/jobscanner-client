import { PATH, POST } from '@/constants/api';
import { requester } from '@/apis/requester';
import { KEYS, setLocalStorageItem } from '@/utils/storage';
import { LoginResponse } from '@/types/apis/login';

export const kakaoLogin = async (kakaoAccessToken: string) => {
	try {
		const {
			auth: { kakao },
		} = PATH;

		const { headers, data, status } = await requester<LoginResponse>({
			method: POST,
			url: kakao,
			headers: {
				accessToken: kakaoAccessToken,
			},
		});

		// const JOB_SCANNER_ACCESS_TOKEN = headers.authorization.split(' ')[1];
		// setLocalStorageItem(KEYS.JOB_SCANNER_ACCESS_TOKEN, JOB_SCANNER_ACCESS_TOKEN);
		return status;

		// console.log(response);
		// const JOB_SCANNER_ACCESS_TOKEN = response.data?.appToken;
		// setLocalStorageItem(KEYS.JOB_SCANNER_ACCESS_TOKEN, JOB_SCANNER_ACCESS_TOKEN);
		// return response.status;
	} catch (error) {
		console.log(`카카오 로그인 에러: ${error}`);
	}
};

export const logout = async () => {
	const {
		auth: { logout },
	} = PATH;

	const response = await requester({
		method: POST,
		url: logout,
	});

	// removeLocalStorageItem(KEYS.JOB_SCANNER_ACCESS_TOKEN);
};

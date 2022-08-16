import { PATH, POST } from '@/constants/api';
import { requester } from '@/apis/requester';
import { KEYS, setLocalStorageItem, removeLocalStorageItem } from '@/utils/storage';
import { KakaoLoginResponse } from '@/types/apis/login';

export const kakaoLogin = async (kakaoAccessToken: string) => {
	try {
		const {
			auth: { index, kakao },
		} = PATH;

		const { headers, data, status } = await requester<KakaoLoginResponse>({
			method: POST,
			url: `${index}${kakao}`,
			headers: {
				Authorization: `Bearer ${kakaoAccessToken}`,
			},
		});

		const JOB_SCANNER_ACCESS_TOKEN = data?.appToken;
		setLocalStorageItem(KEYS.JOB_SCANNER_ACCESS_TOKEN, JOB_SCANNER_ACCESS_TOKEN);
		return status;
	} catch (error) {
		console.log(`카카오 로그인 에러: ${error}`);
	}
};

export const logout = async () => {
	const {
		auth: { logout },
	} = PATH;

	removeLocalStorageItem(KEYS.JOB_SCANNER_ACCESS_TOKEN);
};

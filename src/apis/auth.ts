import { PATH, POST } from '@/constants/api';
import { requester } from '@/apis/requester';
import { KEYS, setLocalStorageItem, removeLocalStorageItem } from '@/utils/storage';
import { SingInResponse } from '@/types/apis/login';

export const kakaoSignup = async (kakaoAccessToken: string) => {
	const {
		auth: { index, signup, kakao },
	} = PATH;

	const { headers, data, status } = await requester({
		method: POST,
		url: `${index}${signup}${kakao}`,
		headers: {
			Authorization: `Bearer ${kakaoAccessToken}`,
		},
	});

	return status;
};

export const kakaoSignin = async (kakaoAccessToken: string) => {
	try {
		const {
			auth: { index, login, kakao },
		} = PATH;

		const { headers, data, status } = await requester<SingInResponse>({
			method: POST,
			url: `${index}${login}${kakao}`,
			headers: {
				Authorization: `Bearer ${kakaoAccessToken}`,
			},
		});

		const JOB_STORY_ACCESS_TOKEN = data?.appToken;
		const JOB_STORY_REFRESH_TOKEN = data?.refreshToken;
		setLocalStorageItem(KEYS.JOB_STORY_ACCESS_TOKEN, JOB_STORY_ACCESS_TOKEN);
		setLocalStorageItem(KEYS.JOB_STORY_REFRESH_TOKEN, JOB_STORY_REFRESH_TOKEN);
		return { data, status };
	} catch (error) {
		console.log(`카카오 로그인 에러: ${error}`);
	}
};

export const logout = async () => {
	removeLocalStorageItem(KEYS.JOB_STORY_ACCESS_TOKEN);
	removeLocalStorageItem(KEYS.JOB_STORY_REFRESH_TOKEN);
};

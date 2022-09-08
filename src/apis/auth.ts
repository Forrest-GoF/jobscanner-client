import { PATH, POST } from '@/constants/api';
import { requester } from '@/apis/requester';
import { KEYS, removeLocalStorageItem } from '@/utils/storage';
import { SingInResponse } from '@/types/apis/login';
import * as Sentry from '@sentry/react';

export const socialLogin = async (authorizationCode: string, social?: string) => {
	const {
		auth: { index, signin },
	} = PATH;

	try {
		const { headers, data, status } = await requester<SingInResponse>({
			method: POST,
			url: `${index}${signin}${social && `/${social}`}`,
			headers: {
				authorizationCode,
			},
		});
		return { data, status };
	} catch (error) {
		Sentry.captureException(error);
	}
};

export const logout = async () => {
	removeLocalStorageItem(KEYS.JOB_STORY_ACCESS_TOKEN);
	removeLocalStorageItem(KEYS.JOB_STORY_REFRESH_TOKEN);
};

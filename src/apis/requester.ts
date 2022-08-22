import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { KEYS, getLocalStorageItem } from '@/utils/storage';
const createAxiosInstance = () => {
	const base = axios.create({
		baseURL: import.meta.env.VITE_API_BASE_URL,
	});

	// 응답 후 중간에 개입 로직
	// base.interceptors.response.use()

	// 요청 전 중간에 개입 로직
	// base.interceptors.request.use()

	return base;
};

const axiosInstance = createAxiosInstance();

export async function requester<Payload>(option: AxiosRequestConfig) {
	const ACCESS_TOKEN = getLocalStorageItem(KEYS.JOB_STORY_ACCESS_TOKEN);
	const response: AxiosResponse<Payload> = await axiosInstance(
		ACCESS_TOKEN
			? {
					headers: {
						Authorization: `Bearer ${ACCESS_TOKEN}`,
					},
					...option,
			  }
			: {
					...option,
			  },
	);
	return {
		status: response.status,
		headers: response.headers,
		data: response.data,
	};
}

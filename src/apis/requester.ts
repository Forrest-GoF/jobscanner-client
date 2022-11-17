import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { KEYS, getLocalStorageItem } from '@/utils/storage';
import { RESPONSE_FAIL_UNAUTHORIZED } from '@/constants/api';

const createAxiosInstance = () => {
	const base = axios.create({
		baseURL: import.meta.env.VITE_API_BASE_URL,
	});

	return base;
};

const axiosInstance = createAxiosInstance();

export async function requester<Payload>(option: AxiosRequestConfig) {
	const ACCESS_TOKEN = getLocalStorageItem(KEYS.JOB_SCANNER_ACCESS_TOKEN);
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

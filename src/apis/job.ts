import { GET, PATH } from '@/constants/api';
import { requester } from '@/apis/requester';
import axios from 'axios';

export const getJobs = async () => {
	const {
		job: { list },
	} = PATH;

	const response = await requester({
		method: GET,
		url: list,
	});
	// const response = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/joblist`);

	return response;
};

export const getJob = async (jobId: number = 0) => {
	const {
		job: { index },
	} = PATH;

	const response = await requester({
		method: GET,
		url: `${index}/${jobId}`,
	});

	return response;
};

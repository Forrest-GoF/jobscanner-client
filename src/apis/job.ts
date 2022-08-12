import { GET, PATH } from '@/constants/api';
import { requester } from '@/apis/requester';
import { JobListItemsType } from '@/types/apis/job';

export const getJobs = async () => {
	const {
		job: { list },
	} = PATH;

	const { data } = await requester<JobListItemsType>({
		method: GET,
		url: list,
	});

	return data?.jobs;
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

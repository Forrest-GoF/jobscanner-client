import { GET, PATCH, PATH, PUT } from '@/constants/api';
import { requester } from '@/apis/requester';
import {
	JobListItemsResponseDto,
	JobDetailResponseDto,
	MyBookmarkJobListResponseDto,
	BookmarkActivateResponseDto,
} from '@/types/apis/job';

export const getJobs = async (queryString: string) => {
	const {
		job: { index },
	} = PATH;

	const { data } = await requester<JobListItemsResponseDto>({
		method: GET,
		url: `${index}${queryString && `?${queryString}`}`,
	});

	return data.data.jobs;
};

export const getJob = async (jobId: number) => {
	const {
		job: { index },
	} = PATH;

	const { data } = await requester<JobDetailResponseDto>({
		method: GET,
		url: `${index}/${jobId}`,
	});

	return data.data;
};

export const updateJobBookmark = async (jobId: number, bookmarkActivated: boolean) => {
	const {
		job: { index, bookmarks },
	} = PATH;

	const { headers, data, status } = await requester<BookmarkActivateResponseDto>({
		method: PUT,
		url: `${index}${bookmarks}/${jobId}`,
		data: {
			activated: bookmarkActivated,
		},
	});

	return { data, status };
};

export const getBookmarkJobs = async () => {
	const {
		job: { index, bookmarks },
	} = PATH;

	const { headers, data, status } = await requester<MyBookmarkJobListResponseDto>({
		method: GET,
		url: `${index}${bookmarks}`,
	});

	return data.data;
};

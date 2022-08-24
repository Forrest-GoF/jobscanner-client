import { useState, useEffect } from 'react';
import Layout from '@/components/layout';
import { JobList, JobSearchForm } from '@/components/features';
import { useQuery, useInfiniteQuery } from '@tanstack/react-query';
import { useInView } from 'react-intersection-observer';
import { getJobs } from '@/apis/job';
import * as S from './styled';
import { JobListItemResponse } from '@/types/apis/job';

const JobSearch = () => {
	const [page, setPage] = useState(1);
	const [jobSearchQueryString, setJobSearchQueryString] = useState('');
	const [jobs, setJobs] = useState<JobListItemResponse[]>([]);

	const { data } = useQuery(
		['getJobs', jobSearchQueryString, page],
		() => getJobs(`page=${page}&size=20${jobSearchQueryString && `&${jobSearchQueryString}`}`),
		{
			onSuccess: (newJobs) => {
				if (newJobs) {
					setJobs([...jobs, ...newJobs]);
				}
			},
		},
	);

	const { ref, inView } = useInView();

	const handleJobSearchQueryStringChange = (queryString: string) => {
		setJobSearchQueryString(queryString);
	};

	useEffect(() => {
		if (inView) {
			setPage(page + data?.length);
		}
	}, [inView]);

	return (
		<Layout>
			<JobSearchForm onJobSearchQueryStringChange={handleJobSearchQueryStringChange} />
			<S.JobListContainer>
				<JobList jobs={jobs} />
				{jobs.length > 0 && <div ref={ref}>last element trigger... </div>}
			</S.JobListContainer>
		</Layout>
	);
};

export default JobSearch;

import { useState, useEffect } from 'react';
import Layout from '@/components/layout';
import { JobList, JobSearchForm } from '@/components/features';
import { useQuery, useInfiniteQuery } from '@tanstack/react-query';
import { useInView } from 'react-intersection-observer';
import { getJobs } from '@/apis/job';
import * as S from './styled';
import { JobListItemResponse } from '@/types/apis/job';
import LogoSymbol from '@/assets/images/shared/logo-symbol.svg';

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
				{data?.length > 0 && (
					<S.LoadingWrapper ref={ref}>
						<img src={LogoSymbol} alt="심볼" />
					</S.LoadingWrapper>
				)}
			</S.JobListContainer>
		</Layout>
	);
};

export default JobSearch;

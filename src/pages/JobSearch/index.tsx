import { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useInView } from 'react-intersection-observer';
import Layout from '@/components/layout';
import { JobList, JobSearchForm } from '@/components';
import * as S from './styled';
import { getJobs } from '@/apis/job';
import { JobListItemResponseDto } from '@/types/apis/job';
import { SymbolIcon } from '@/assets/images/icons';

const JobSearch = () => {
	const [page, setPage] = useState(0);
	const [jobSearchQueryString, setJobSearchQueryString] = useState('');
	const [jobs, setJobs] = useState<JobListItemResponseDto[]>([]);

	const { data } = useQuery(
		['getJobs', jobSearchQueryString, page],
		() => getJobs(`page=${page}&size=20${jobSearchQueryString && `&${jobSearchQueryString}`}`),
		{
			refetchOnWindowFocus: false,
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
		handleResetCondition();
	};

	const handleResetCondition = () => {
		setJobs([]);
		setPage(0);
	};

	useEffect(() => {
		if (inView) {
			!!data && setPage(page + data?.length);
		}
	}, [inView, jobSearchQueryString]);

	return (
		<Layout>
			<S.Container>
				<JobSearchForm onJobSearchQueryStringChange={handleJobSearchQueryStringChange} />
				<S.JobListContainer>
					<JobList jobs={jobs} />
					{jobs?.length >= 20 && !!data && data?.length > 0 && (
						<S.LoadingWrapper ref={ref}>
							<img src={SymbolIcon} alt="심볼" />
						</S.LoadingWrapper>
					)}
				</S.JobListContainer>
			</S.Container>
		</Layout>
	);
};

export default JobSearch;

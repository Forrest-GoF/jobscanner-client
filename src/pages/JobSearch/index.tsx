import { useState, useEffect } from 'react';
import Layout from '@/components/layout';
import { JobList, JobSearchForm } from '@/components/features';
import { useQuery } from '@tanstack/react-query';
import { getJobs } from '@/apis/job';

const JobSearch = () => {
	const [jobSearchQueryString, setJobSearchQueryString] = useState('');
	const { data: jobs } = useQuery(['getJobs', jobSearchQueryString], () => getJobs(jobSearchQueryString));

	const handleJobSearchQueryStringChange = (queryString: string) => {
		setJobSearchQueryString(queryString);
	};

	useEffect(() => {
		console.log(jobSearchQueryString);
	}, [jobSearchQueryString]);

	return (
		<Layout>
			<JobSearchForm onJobSearchQueryStringChange={handleJobSearchQueryStringChange} />
			<JobList jobs={jobs} />
		</Layout>
	);
};

export default JobSearch;

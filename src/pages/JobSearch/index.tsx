import Layout from '@/components/layout';
import { JobList, JobSearchForm } from '@/components/features';
import { useQuery } from '@tanstack/react-query';
import { getJobs } from '@/apis/job';
const JobSearch = () => {
	const { data: jobs } = useQuery(['getJobs'], getJobs);

	return (
		<Layout>
			{/* <JobSearchForm /> */}
			<JobList jobs={jobs} />
		</Layout>
	);
};

export default JobSearch;

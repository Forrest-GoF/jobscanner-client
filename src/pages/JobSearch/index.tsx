import { Link } from 'react-router-dom';
import Layout from '@/components/layout';
import JobList from '@/components/features/JobList';

const JobSearch = () => {
	return (
		<Layout>
			<JobList />
		</Layout>
	);
};

export default JobSearch;

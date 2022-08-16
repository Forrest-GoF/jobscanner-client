import * as S from './styled';
import { jobsMock } from '@/assets/mock/job';
import JobListItem from '@/components/features/JobList/JobListItem';
import { getJobs } from '@/apis/job';
import { useQuery } from '@tanstack/react-query';

const JobList = () => {
	return (
		<S.Container>
			<S.List>
				{jobsMock?.map((job) => {
					return <JobListItem key={job.id} job={job}></JobListItem>;
				})}
			</S.List>
		</S.Container>
	);
};

export default JobList;

import * as S from './styled';
import { jobsMock } from '@/assets/mock/job';
import JobListItem from '@/components/features/JobList/JobListItem';
import { getJobs } from '@/apis/job';
import { useQuery } from '@tanstack/react-query';
import { JobListItemsResponse } from '@/types/apis/job';

type Props = JobListItemsResponse | undefined;

const JobList = (props: Props) => {
	return (
		<S.Container>
			<S.List>
				{props?.jobs?.map((job) => {
					return <JobListItem key={job.id} job={job}></JobListItem>;
				})}
			</S.List>
		</S.Container>
	);
};

export default JobList;

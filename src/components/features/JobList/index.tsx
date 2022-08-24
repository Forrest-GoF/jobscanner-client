import * as S from './styled';
import JobListItem from '@/components/features/JobList/JobListItem';
import { JobListItemsResponse } from '@/types/apis/job';

const JobList = (props: JobListItemsResponse) => {
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

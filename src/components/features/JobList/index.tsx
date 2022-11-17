import * as S from './styled';
import { JobListItem } from '@/components';
import { JobListItemResponseDto } from '@/types/apis/job';

type Props = {
	jobs: JobListItemResponseDto[];
};

const JobList = (props: Props) => {
	const { jobs } = props;

	return (
		<>
			<S.List>
				{jobs?.map((job) => (
					<JobListItem key={job.id} job={job} />
				))}
			</S.List>
		</>
	);
};

export default JobList;

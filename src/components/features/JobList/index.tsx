import { useEffect } from 'react';
import * as S from './styled';
import JobListItem from '@/components/features/JobList/JobListItem';
import { JobListItemsResponse } from '@/types/apis/job';

const JobList = (props: JobListItemsResponse) => {
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

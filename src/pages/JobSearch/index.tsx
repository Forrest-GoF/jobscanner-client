import { Link } from 'react-router-dom';
import { useQuery, useMutation } from '@tanstack/react-query';
import * as S from './styled';
import SideBar from '@/components/features/Sidebar';
import { getJobs } from '@/apis/job';

const JobSearch = () => {
	// const { data: jobs } = useQuery(['getJobs'], getJobs);

	return (
		<S.Container>
			<SideBar />
			<S.InnerWrapper>
				공고 리스트 페이지입니다.
				<Link to="/jobs/1">공고 상세리스트 페이지로 이동</Link>
			</S.InnerWrapper>
		</S.Container>
	);
};

export default JobSearch;

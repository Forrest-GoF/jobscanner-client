import { Link } from 'react-router-dom';
import { useQuery, useMutation } from '@tanstack/react-query';
import * as S from './styled';
import { Sidebar, Navbar } from '@/components/features';
import { getJobs } from '@/apis/job';

const JobSearch = () => {
	// const { data: jobs } = useQuery(['getJobs'], getJobs);

	return (
		<S.Container>
			<Sidebar />
			<S.InnerWrapper>
				<Navbar />
				공고 리스트 페이지입니다.
				<Link to="/jobs/1">공고 상세리스트 페이지로 이동</Link>
			</S.InnerWrapper>
		</S.Container>
	);
};

export default JobSearch;

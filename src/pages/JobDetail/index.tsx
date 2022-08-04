import { Link } from 'react-router-dom';

const JobDetail = () => {
	return (
		<div>
			공고 상세페이지 입니다.
			<Link to="/">루트 페이지로 이동</Link>
			<Link to="/login">로그인 페이지로 이동</Link>
		</div>
	);
};

export default JobDetail;

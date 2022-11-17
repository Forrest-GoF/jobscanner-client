import { Link } from 'react-router-dom';

const NotFound = () => {
	return (
		<div>
			존재하지 않는 페이지 입니다.
			<Link to="/">루트 페이지로 이동</Link>
		</div>
	);
};

export default NotFound;

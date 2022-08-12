import { Link, useNavigate } from 'react-router-dom';
import { getLocalStorageItem, KEYS } from '@/utils/storage';
import { logout } from '@/apis/auth';
import Layout from '@/components/layout';

const JobDetail = () => {
	const navigator = useNavigate();
	const handleLogoutBtnClick = async () => {
		const response = await logout();
		navigator('/');
	};

	return (
		<Layout>
			공고 상세페이지 입니다.
			<Link to="/">루트 페이지로 이동</Link>
			{!getLocalStorageItem(KEYS.JOB_SCANNER_ACCESS_TOKEN) && <Link to="/login">로그인 페이지로 이동</Link>}
			{getLocalStorageItem(KEYS.JOB_SCANNER_ACCESS_TOKEN) && (
				<button type="button" onClick={handleLogoutBtnClick}>
					로그아웃
				</button>
			)}
		</Layout>
	);
};

export default JobDetail;

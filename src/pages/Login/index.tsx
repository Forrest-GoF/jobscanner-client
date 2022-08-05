import { Link } from 'react-router-dom';
import * as S from './styled';
import KaKaoLoginBtnImg from '@/assets/login/kakao_login_medium_narrow.png';
import { KAKAO_AUTH_URI } from '@/constants/auth';

const Login = () => {
	const handleKakaoLoginBtnClick = () => {
		window.location.href = KAKAO_AUTH_URI;
	};

	return (
		<S.Container>
			로그인 페이지입니다.
			<Link to="/">루트 페이지로 이동</Link>
			<S.KaKaoLoginBtn type="button" onClick={() => handleKakaoLoginBtnClick()}>
				<S.KaKaoLoginBtnImg src={KaKaoLoginBtnImg} alt="카카오 로그인" />
			</S.KaKaoLoginBtn>
		</S.Container>
	);
};

export default Login;

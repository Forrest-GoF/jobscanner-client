import { Link } from 'react-router-dom';
import * as S from './styled';
import KaKaoLoginBtnImg from '@/assets/images/login/kakao_login_medium_narrow.png';
import { KAKAO_AUTH_URI } from '@/constants/auth';
import LoginBannerImg from '@/assets/images/login/banner.svg';

const Login = () => {
	const handleKakaoLoginBtnClick = () => {
		window.location.href = KAKAO_AUTH_URI;
	};

	return (
		<S.Container>
			<S.BannerWrapper>
				<img src={LoginBannerImg} alt="로고" />
			</S.BannerWrapper>

			<S.DescWrapper>
				<S.LoginTitle>잡스캐너</S.LoginTitle>
				<S.LoginDesc>나만의 채용 검색 & 관리</S.LoginDesc>
			</S.DescWrapper>

			<S.ButtonWrapper>
				<S.KaKaoLoginBtn type="button" onClick={() => handleKakaoLoginBtnClick()}>
					<S.KaKaoLoginBtnImg src={KaKaoLoginBtnImg} alt="카카오 로그인" />
				</S.KaKaoLoginBtn>
			</S.ButtonWrapper>
		</S.Container>
	);
};

export default Login;

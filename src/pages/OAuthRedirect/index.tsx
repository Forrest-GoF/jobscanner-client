import { useEffect, useCallback } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { AUTHORIZATION_CODE_SEPERATORS } from '@/constants/auth';
import { socialLogin } from '@/apis/auth';
import { RESPONSE_SUCCESS_CREATED, RESPONSE_SUCCESS_OK } from '@/constants/api';
import { KEYS, setLocalStorageItem } from '@/utils/storage';
import { userInfoState } from '@/stores/user';
import { useSetRecoilState } from 'recoil';
import * as Sentry from '@sentry/react';
import * as S from './styled';

const OAuthRedirect = () => {
	const { social } = useParams();
	const locator = useLocation();
	const navigator = useNavigate();
	const setUserInfo = useSetRecoilState(userInfoState);

	const handleSocialLogin = useCallback(async () => {
		if (!social) return;

		let authorizationCode =
			social === 'google'
				? locator.search.split(AUTHORIZATION_CODE_SEPERATORS)[1].split('&')[0]
				: locator.search.split(AUTHORIZATION_CODE_SEPERATORS)[1];

		console.log(authorizationCode);
		/**
		 * TODO: [유저정보, 앱 토큰, 리프레쉬 토큰] 을 응답받는다.
		 * 1. 클라이언트는 서버에 소셜 로그인 플랫폼, 인가코드 정보를 서버에 넘긴다.
		 * 2. 서버로부터 [유저정보, 앱 토큰, 리프레쉬 토큰] 을 응답 받는다.
		 * 3. 서버로의 응답코드([200, 로그인성공] or [201, 신규 유저 온보딩])에 따라 라우팅한다.
		 */
		try {
			const { data, status } = await socialLogin(authorizationCode, social);

			setLocalStorageItem(KEYS.JOB_STORY_ACCESS_TOKEN, data.appToken);
			setLocalStorageItem(KEYS.JOB_STORY_REFRESH_TOKEN, data.refreshToken);
			setUserInfo(data.memberResponse);

			if (status === RESPONSE_SUCCESS_OK) {
				navigator('/');
			}

			if (status === RESPONSE_SUCCESS_CREATED) {
				navigator('/onboarding');
			}
		} catch (error) {
			Sentry.captureException(error);
		}
	}, []);

	useEffect(() => {
		handleSocialLogin();
	}, []);

	return (
		<S.Container>
			<S.LoaderCircle />
		</S.Container>
	);
};

export default OAuthRedirect;

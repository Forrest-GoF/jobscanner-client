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

		try {
			const { data, status } = await socialLogin(authorizationCode, social);

			setLocalStorageItem(KEYS.JOB_SCANNER_ACCESS_TOKEN, data.appToken);
			setLocalStorageItem(KEYS.JOB_SCANNER_REFRESH_TOKEN, data.refreshToken);
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

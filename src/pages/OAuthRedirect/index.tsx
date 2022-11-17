import { useEffect, useCallback } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import * as Sentry from '@sentry/react';
import * as S from './styled';
import { memberState } from '@/stores/member';
import { getMember } from '@/apis/member';
import { RESPONSE_SUCCESS_CREATED, RESPONSE_SUCCESS_OK } from '@/constants/api';
import { KEYS, setLocalStorageItem } from '@/utils/storage';

const OAuthRedirect = () => {
	const { social } = useParams();
	const locator = useLocation();
	const navigator = useNavigate();
	const setMemberState = useSetRecoilState(memberState);

	const dispatchTokenAndMember = useCallback(async () => {
		if (!social) return;

		try {
			const urlParams = new URLSearchParams(window.location.search);
			const jobScannerAccessToken = urlParams.get('appToken');

			setLocalStorageItem(KEYS.JOB_SCANNER_ACCESS_TOKEN, jobScannerAccessToken);

			const { data, status } = await getMember();

			if (status === RESPONSE_SUCCESS_OK) {
				setMemberState(data.data);
				navigator('/');
			}

			if (status === RESPONSE_SUCCESS_CREATED) {
				navigator('/onboarding');
			}
		} catch (error) {
			console.error(error);
			Sentry.captureException(error);
		}
	}, []);

	useEffect(() => {
		dispatchTokenAndMember();
	}, []);

	return (
		<S.Container>
			<S.LoaderCircle />
		</S.Container>
	);
};

export default OAuthRedirect;

import { useEffect, useCallback } from 'react';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';
import { KAKAO_AUTHORIZATION_CODE_SEPERATOR } from '@/constants/auth';
import { kakaoLogin } from '@/apis/auth';
import { RESPONSE_SUCCESS_CREATED, RESPONSE_SUCCESS_OK } from '@/constants/api';
import { getUserInfo } from '@/apis/user';
import * as S from './styled';
import { KEYS, setLocalStorageItem, getLocalStorageItem } from '@/utils/storage';

const OAuthRedirectKaKao = () => {
	const locator = useLocation();
	const navigator = useNavigate();

	const handleLogin = useCallback(async () => {
		const KAKAO_AUTHORIZATION_CODE = locator.search.split(KAKAO_AUTHORIZATION_CODE_SEPERATOR)[1];

		if (!KAKAO_AUTHORIZATION_CODE) return;

		const KAKAO_ACCESS_TOKEN = await getKakaoAccessToken(KAKAO_AUTHORIZATION_CODE);
		const status = await kakaoLogin(KAKAO_ACCESS_TOKEN);

		if (status === RESPONSE_SUCCESS_OK) {
			navigator('/');
		} else {
			navigator('/login');
		}
	}, []);

	const getKakaoAccessToken = async (kakaoAuthorizationCode: string) => {
		const data: { [key: string]: string } = {
			grant_type: 'authorization_code',
			client_id: import.meta.env.VITE_REST_API_KEY,
			redirect_uri: import.meta.env.VITE_REDIRECT_URI,
			code: kakaoAuthorizationCode,
		};

		const qsData = Object.keys(data)
			.map((key) => `${encodeURIComponent(key)}=${encodeURI(data[key])}`)
			.join('&');

		const response = await axios.post('https://kauth.kakao.com/oauth/token', qsData, {
			headers: {
				'Content-type': 'application/x-www-form-urlencoded',
			},
		});

		const KAKAO_ACCESS_TOKEN = response.data.access_token;
		return KAKAO_ACCESS_TOKEN;
	};

	useEffect(() => {
		handleLogin();
	}, []);

	return (
		<S.Container>
			<S.LoaderCircle />
		</S.Container>
	);
};

export default OAuthRedirectKaKao;

import { useEffect } from 'react';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';
import { KAKAO_AUTHORIZATION_CODE_SEPERATOR } from '@/constants/auth';

const OAuthRedirectKaKao = () => {
	const locator = useLocation();
	const navigator = useNavigate();

	const handleLogin = async () => {
		const KAKAO_AUTHORIZATION_CODE = locator.search.split(KAKAO_AUTHORIZATION_CODE_SEPERATOR)[1];

		if (!KAKAO_AUTHORIZATION_CODE) return;

		const { KAKAO_ACCESS_TOKEN, KAKAO_REFRESH_TOKEN } = await getKakaoAccessToken(KAKAO_AUTHORIZATION_CODE);

		console.log(`엑세스토큰: ${KAKAO_ACCESS_TOKEN}\n리프레쉬 토큰: ${KAKAO_REFRESH_TOKEN}`);
	};

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
		const KAKAO_REFRESH_TOKEN = response.data.refresh_token;
		return { KAKAO_ACCESS_TOKEN, KAKAO_REFRESH_TOKEN };
	};

	useEffect(() => {
		handleLogin();
	}, []);

	return <div>로그인 중...</div>;
};

export default OAuthRedirectKaKao;

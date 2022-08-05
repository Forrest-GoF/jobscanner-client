export const KAKAO_AUTH_URI = `https://kauth.kakao.com/oauth/authorize?client_id=${
	import.meta.env.VITE_REST_API_KEY
}&redirect_uri=${import.meta.env.VITE_REDIRECT_URI}&response_type=code`;

export const KAKAO_AUTHORIZATION_CODE_SEPERATOR = '=';

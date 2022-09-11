export const AUTHORIZATION_CODE_SEPERATORS = 'code=';

export const authorizationCodeURIs: { [key: string]: string } = {
	kakao: `https://kauth.kakao.com/oauth/authorize?client_id=${import.meta.env.VITE_KAKAO_REST_API_KEY}&redirect_uri=${
		import.meta.env.VITE_REDIRECT_URI
	}/kakao&response_type=code`,
	github: `https://github.com/login/oauth/authorize?client_id=${import.meta.env.VITE_GITHUB_CLIENT_ID}&redirect_uri=${
		import.meta.env.VITE_REDIRECT_URI
	}/github`,
	google: `https://accounts.google.com/o/oauth2/v2/auth?client_id=${
		import.meta.env.VITE_GOOGLE_CLIENT_ID
	}&redirect_uri=${import.meta.env.VITE_REDIRECT_URI}/google
&scope=https://www.googleapis.com/auth/contacts.readonly&response_type=code&include_granted_scopes=true`,
};

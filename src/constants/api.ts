export const GET = 'GET';
export const POST = 'POST';
export const PUT = 'PUT';
export const PATCH = 'PATCH';
export const DELETE = 'DELETE';

export const RESPONSE_SUCCESS_OK = 200;
export const RESPONSE_SUCCESS_CREATED = 201;
export const RESPONSE_SUCCESS_FOUND_REDIRECT = 302;
export const RESPONSE_FAIL_UNAUTHORIZED = 401;
export const RESPONSE_FAIL_CONFIICT = 409;

export const PATH = {
	auth: {
		index: '/auth',
		signup: '/signup',
		kakao: '/kakao',
		refresh: '/refresh',
		login: '/login',
		logout: '/logout',
	},
	user: {
		info: '/user/info',
	},
	job: {
		index: '/jobs',
	},
};

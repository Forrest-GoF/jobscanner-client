export const GET = 'GET';
export const POST = 'POST';
export const PUT = 'PUT';
export const PATCH = 'PATCH';
export const DELETE = 'DELETE';

export const RESPONSE_SUCCESS_OK = 200;
export const RESPONSE_SUCCESS_CREATED = 201;
export const RESPONSE_NO_CONTENT = 204;
export const RESPONSE_SUCCESS_FOUND_REDIRECT = 302;
export const RESPONSE_FAIL_UNAUTHORIZED = 401;
export const RESPONSE_FAIL_CONFIICT = 409;

export const PATH = {
	auth: {
		index: '/auth',
		signin: '/signin',
		logout: '/logout',
		signup: '/signup',
		refresh: '/refresh',
	},
	members: {
		index: '/members',
	},
	job: {
		index: '/jobs',
		bookmarks: '/bookmarks',
	},
	tag: {
		index: '/tags',
	},
	duty: {
		index: '/duties',
	},
};

export const RESPONSE_ERROR_MESSAGES = {
	notFoundMember: 'MemberCustomException: Not found Member',
	alreadyEmailExist: 'MemberCustomException: Email already exists',
	incorrectPassword: 'MemberCustomException: The password is incorrect',
};

export const USER_ERROR_MESSAGE = {
	notFoundMember: '이메일 또는 비밀번호를 확인해주세요.',
	alreadyEmailExist: '이미 존재하는 이메일입니다.',
};

import { GET, PATH, POST } from '@/constants/api';
import { requester } from '@/apis/requester';
import { KEYS, removeLocalStorageItem } from '@/utils/storage';
import { SigninFormData, SignInResponseDto, SignUpResponseDto, SignUpRequestBodyDto } from '@/types/apis/auth';

export const socialLogin = async (social: string) => {
	const {
		auth: { index, signin },
	} = PATH;

	const { headers, data, status } = await requester<SignInResponseDto>({
		method: GET,
		url: `${index}${signin}/${social}`,
	});

	return { data, status };
};

export const logout = async () => {
	removeLocalStorageItem(KEYS.JOB_SCANNER_ACCESS_TOKEN);
	removeLocalStorageItem(KEYS.JOB_SCANNER_REFRESH_TOKEN);
};

export const signin = async (signinFormData: SigninFormData) => {
	const {
		auth: { index, signin },
	} = PATH;

	const { headers, data, status } = await requester<SignInResponseDto>({
		method: POST,
		url: `${index}${signin}`,
		data: signinFormData,
	});

	return { data, status };
};

export const signup = async (signUpRequestBody: SignUpRequestBodyDto) => {
	const {
		auth: { index, signup },
	} = PATH;

	const { headers, data, status } = await requester<SignUpResponseDto>({
		method: POST,
		url: `${index}${signup}`,
		data: signUpRequestBody,
	});

	return { data, status };
};

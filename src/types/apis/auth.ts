import { HttpResponseDto } from '@/types/apis/common';

export type Member = {
	email: string;
	nickname: string;
	imageUrl?: string;
	promotionAgreement: boolean;
	tags: string[];
	duties: string[];
	authenticatedEmail: boolean;
};

export interface SigninFormData {
	nickname?: string;
	email: string;
	password: string;
}

export interface SignUpFormData extends SigninFormData {
	nickname: string;
	validPassword?: string;
	terms: boolean;
	personalInformation: boolean;
	promotion: boolean;
}

export interface SignUpRequestBodyDto extends SigninFormData {
	nickname: string;
	validPassword?: string;
	agreement: {
		terms: boolean;
		personalInformation: boolean;
		promotion: boolean;
	};
}

export interface SignInResponseDto extends HttpResponseDto {
	data: {
		appToken: string;
		refreshToken: string;
	};
}

export interface SignUpResponseDto extends HttpResponseDto {
	data: {
		appToken: string;
		refreshToken: string;
	};
}

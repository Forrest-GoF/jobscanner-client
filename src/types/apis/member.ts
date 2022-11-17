import { HttpResponseDto } from '@/types/apis/common';

export interface MemberResponseDto extends HttpResponseDto {
	data: {
		nickname: string;
		imageUrl: string;
		email: string;
		duties: string[];
		tags: string[];
		promotionAgreement: boolean;
		authenticatedEmail: boolean;
	};
}

export interface MemberUpdateRequestDto {
	nickname: string;
	imageUrl: string | undefined;
	duties: string[];
	tags: string[];
	promotionAgreement: boolean;
}

// export interface MemberUpdateResponseDto extends Omit<MemberResponseDto> {}

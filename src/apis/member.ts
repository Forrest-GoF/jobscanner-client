import { DELETE, GET, PATCH, PATH } from '@/constants/api';
import { requester } from '@/apis/requester';
import { MemberResponseDto, MemberUpdateRequestDto } from '@/types/apis/member';

export const getMember = async () => {
	const {
		members: { index },
	} = PATH;

	const { headers, data, status } = await requester<MemberResponseDto>({
		method: GET,
		url: index,
	});

	return { data, status };
};

export const updateMember = async (member: MemberUpdateRequestDto) => {
	const {
		members: { index },
	} = PATH;

	const { headers, data, status } = await requester<MemberResponseDto>({
		method: PATCH,
		url: index,
		data: member,
	});

	return { data, status };
};

export const deleteMember = async () => {
	const {
		members: { index },
	} = PATH;

	const { headers, data, status } = await requester<MemberResponseDto>({
		method: DELETE,
		url: index,
	});

	return { data, status };
};

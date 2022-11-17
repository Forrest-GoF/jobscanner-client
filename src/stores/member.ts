import { atom } from 'recoil';
import { Member } from '@/types/apis/auth';

const initialState: Member = {
	nickname: '',
	imageUrl: '',
	email: '',
	duties: [],
	tags: [],
	promotionAgreement: false,
	authenticatedEmail: false,
};

export const memberState = atom<Member>({
	key: 'memberState',
	default: initialState,
});

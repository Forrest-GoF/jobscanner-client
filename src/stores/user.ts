import { atom } from 'recoil';
import { UserInfo } from '@/types/apis/login';

const initialState: UserInfo = {
	email: '',
	nickname: '',
	imageUrl: '',
};

export const userInfoState = atom({
	key: 'userInfoState',
	default: initialState,
});

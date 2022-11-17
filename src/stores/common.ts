import { atom } from 'recoil';

export const MODAL_STATE = {
	closeModal: 0,
	openDutySelect: 1,
	openTeckTagSelect: 2,
};

export const modalState = atom<number>({
	key: 'modalState',
	default: MODAL_STATE.closeModal,
});

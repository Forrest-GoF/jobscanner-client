const EMPTY_VALUE = '';

export const KEYS = {
	JOB_STORY_ACCESS_TOKEN: 'JOB_STORY_ACCESS_TOKEN',
	JOB_STORY_REFRESH_TOKEN: 'JOB_STORY_REFRESH_TOKEN',
};

export const getLocalStorageItem = (key: string): any => {
	try {
		const item = localStorage.getItem(key);
		return item ? JSON.parse(item) : EMPTY_VALUE;
	} catch (error) {
		throw new Error(`로컬 스토리지 데이터 저장 에러: ${error}`);
	}
};

export const setLocalStorageItem = (key: string, value: any) => {
	try {
		localStorage.setItem(key, JSON.stringify(value));
	} catch (error) {
		throw new Error(`로컬 스토리지 값 저장 에러: ${error}`);
	}
};

export const removeLocalStorageItem = (key: string) => {
	try {
		localStorage.removeItem(key);
	} catch (error) {
		throw new Error(`로컬 스토리지 값 삭제 에러: ${error}`);
	}
};

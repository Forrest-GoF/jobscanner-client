const DAY_TO_HOUR = 24;
const HOUR_TO_MINUTE = 60;
const MINUTE_TO_SECOND = 60;
const MILLISECOND_TO_SECOND = 1000;
const DEADLINE = 0;
const DEADLINE_TEXT = '마감 당일';
const REST_TEXT = '남음';
const PAST_TEXT = '지남';

const getDateAgo = (expiredDateString: string) => {
	const expired = new Date(expiredDateString);
	const current = new Date();
	const diffMilliSecond = current.getTime() - expired.getTime();
	const dateAgo = Math.floor(
		diffMilliSecond / (MILLISECOND_TO_SECOND * MINUTE_TO_SECOND * HOUR_TO_MINUTE * DAY_TO_HOUR),
	);

	return dateAgo;
};

export const getDateAgoText = (expiredDateString: string) => {
	const dateAgo = getDateAgo(expiredDateString);

	if (dateAgo === DEADLINE) {
		return DEADLINE_TEXT;
	}

	return `${Math.abs(dateAgo)}일 ${dateAgo < DEADLINE ? REST_TEXT : PAST_TEXT}`;
};

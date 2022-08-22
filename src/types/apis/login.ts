export type UserInfo = {
	email: string;
	nickname: string;
	imageUrl: string | undefined;
};

export type SingInResponse = {
	memberResponse: UserInfo;
	appToken: string;
	refreshToken: string;
};

export type SignUpResponse = {
	email: string;
	imageUrl: string | null;
};

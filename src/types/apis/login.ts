export type KakaoLoginResponse = {
	appToken: string;
	refreshToken: string;
};

export type SignUpResponse = {
	email: string;
	imageUrl: string | null;
};

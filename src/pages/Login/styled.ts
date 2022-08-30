import styled from '@emotion/styled';

type StyledSocialSocialSymbolProps = {
	bgColor: string;
	fill?: string;
};

export const Container = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	background: rgb(21, 21, 24);
	background: -moz-linear-gradient(
		310deg,
		rgba(21, 21, 24, 1) 49%,
		rgba(255, 255, 255, 1) 50%,
		rgba(0, 149, 163, 1) 51%
	);
	background: -webkit-linear-gradient(
		310deg,
		rgba(21, 21, 24, 1) 49%,
		rgba(255, 255, 255, 1) 50%,
		rgba(0, 149, 163, 1) 51%
	);
	background: linear-gradient(310deg, rgba(21, 21, 24, 1) 49%, rgba(255, 255, 255, 1) 50%, rgba(0, 149, 163, 1) 51%);
	filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#151518",endColorstr="#0095a3",GradientType=1);
	min-height: 100vh;
`;

export const Overlay = styled.div`
	position: absolute;
	inset: 0;
	width: 100%;
	height: 100%;
`;

export const InnerContainer = styled.div`
	position: relative;
	display: flex;
	width: 100%;
	height: 80%;
	padding: 0 10%;
	z-index: 2;
`;

export const BannerWrapper = styled.div`
	position: relative;
	flex: 3;
	max-width: 50%;
	padding: 30px;
`;

export const BannerDescriptionWrapper = styled.div`
	& > span {
		display: block;
		margin-bottom: 16px;
		font-size: ${({ theme }) => theme.fontSize.fs16};
		font-weight: ${({ theme }) => theme.fontWeight.medium};
		color: ${({ theme }) => theme.colors.grey[100]};
	}

	& > p {
		font-size: 1.5rem;
		font-weight: ${({ theme }) => theme.fontWeight.bold};
		line-height: 2.2rem;
		color: ${({ theme }) => theme.colors.white};
	}
`;

export const LoginWrapper = styled.div`
	position: relative;
	flex: 2;
	max-width: 40%;
	height: inherit;
	margin: auto;
	padding: 30px;
	border-radius: 0.5em;
	background-color: white;
`;

export const LoginDesciptionPanel = styled.div`
	margin-bottom: 1.5rem;
	font-size: ${({ theme }) => theme.fontSize.fs20};
	font-weight: ${({ theme }) => theme.fontWeight.strongBold};
	text-align: center;
`;

export const LoginTitle = styled.h2`
	& > a {
		text-decoration: none;
		color: ${({ theme }) => theme.colors.black};
	}

	& > a > img {
		width: 50%;
		min-width: 100px;
	}
`;

export const LoginSubTitle = styled.h3``;

export const LoginForm = styled.form`
	margin-bottom: 1.5rem;
`;

export const LoginFormInputContainer = styled.div`
	margin-bottom: 1rem;
`;

export const LoginFormLabel = styled.label`
	display: block;
	margin-bottom: 0.5rem;
	font-weight: ${({ theme }) => theme.fontWeight.bold};
`;

export const LoginFormInputWrapper = styled.div`
	display: flex;
	align-items: center;
	position: relative;
	font-size: 1.25rem;
`;

export const LoginFormInputIconWrapper = styled.span`
	position: absolute;
	left: 0.8rem;

	& > svg {
		position: absolute;
		top: 50%;
		transform: translate3d(0, -50%, 0);
	}
`;

export const LoginFormInput = styled.input`
	width: 100%;
	padding: 0.5rem 2rem 0.5rem 2.5rem;
	border-radius: 0.25rem;

	&:focus {
		outline-color: ${({ theme }) => theme.colors.primary[800]};
	}
`;

export const LoginFormSubmitButtonWrapper = styled.div``;

export const LoginFormSubmitButton = styled.button`
	width: 100%;
	padding: 0.5rem 0;
	background-color: ${({ theme }) => theme.colors.primary[800]};
	border: 2px solid ${({ theme }) => theme.colors.primary[800]};
	border-radius: 0.25rem;
	cursor: pointer;

	&:hover {
		opacity: 0.8;
	}
`;

export const PerforationText = styled.p`
	margin-bottom: 1.5rem;
	font-size: ${({ theme }) => theme.fontSize.fs12};
	font-weight: ${({ theme }) => theme.fontWeight.medium};
	text-align: center;
`;

export const SocialLoginButtonWrapper = styled.div`
	display: flex;
	justify-content: space-evenly;
	margin-bottom: 1.5rem;
`;

export const SocialLoginButton = styled.button`
	display: flex;
	flex-direction: column;
	align-items: center;
	background: none;
	border: none;
	cursor: pointer;
`;

export const SocialSymbolWrapper = styled.span<StyledSocialSocialSymbolProps>`
	display: flex;
	align-items: center;
	justify-content: center;
	margin-bottom: 4px;
	padding: 10px;
	border: 0.5px solid ${({ theme }) => theme.colors.grey[200]};
	border-radius: 50%;
	background-color: ${({ bgColor }) => bgColor};

	& > svg {
		width: 30px;
		height: 30px;
		fill: ${({ fill }) => fill};
	}
`;

export const SocialSymbolTitle = styled.span`
	font-size: ${({ theme }) => theme.fontSize.fs11};
	font-weight: ${({ theme }) => theme.fontWeight.light};
	color: ${({ theme }) => theme.colors.black};
`;

export const PolicyDescriptionWrapper = styled.div`
	display: flex;
	justify-content: center;
	gap: 1rem;
	font-size: 0.8rem;
`;

export const PolicyDescription = styled.a`
	color: ${({ theme }) => theme.colors.black};
	text-decoration: underline;
	cursor: pointer;
`;

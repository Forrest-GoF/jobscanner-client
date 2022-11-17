import styled from '@emotion/styled';

type StyledSocialSocialSymbolProps = {
	bgColor: string;
	fill?: string;
};

export const Container = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	background: #3b3b3b 0% 0% no-repeat padding-box;
	min-height: 100vh;
`;

export const InnerContainer = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 80%;
	padding: 0 10%;
	z-index: 2;
`;

export const LinkList = styled.ul`
	display: flex;
	width: 40%;
	margin: 0 auto;
	background-color: ${({ theme }) => theme.colors.grey[100]};
	border-radius: 0.5em 0.5em 0 0;

	& > li {
		flex: 1;
		padding: 1em;
		text-align: center;
	}
`;

export const LinkListItem = styled.li<{ selected: boolean }>`
	border-radius: 0.5em 0.5em 0 0;
	background-color: ${({ theme, selected }) => (selected ? theme.colors.white : theme.colors.grey[100])};
	font-size: 1rem;
	font-weight: ${({ theme, selected }) => (selected ? theme.fontWeight.bold : theme.fontWeight.regular)};

	& > a {
		text-decoration: none;
		color: ${({ theme, selected }) => (selected ? theme.colors.primary[600] : theme.colors.grey[500])};
	}
`;

export const FormContentWrapper = styled.div`
	position: relative;
	width: 40%;
	height: inherit;
	margin: auto;
	padding: 1em 1.8em;
	border-radius: 0 0 0.5em 0.5em;
	background-color: white;
`;

export const LogoBanner = styled.div`
	padding: 1.5em 0;
	font-size: ${({ theme }) => theme.fontSize.fs20};
	font-weight: ${({ theme }) => theme.fontWeight.strongBold};
	text-align: center;
`;

export const Title = styled.h2`
	& > a {
		text-decoration: none;
		color: ${({ theme }) => theme.colors.black};
	}

	& > a > img {
		width: 50%;
		min-width: 100px;
	}
`;

export const SubTitle = styled.h3``;

export const Form = styled.form`
	margin-bottom: 1.5rem;
`;

export const FormInputContainer = styled.div`
	margin-bottom: 1rem;
`;

export const FormLabel = styled.label`
	display: block;
	margin-bottom: 0.5rem;
	font-weight: ${({ theme }) => theme.fontWeight.bold};
`;

export const FormInputWrapper = styled.div`
	position: relative;
	font-size: 1.25rem;
`;

export const FormInputIconWrapper = styled.span`
	position: absolute;
	left: 0.8rem;

	& > svg {
		position: absolute;
		top: 50%;
		transform: translate3d(0, -50%, 0);
	}
`;

export const FormInput = styled.input<{ padding: string }>`
	width: 100%;
	padding: ${({ padding }) => padding && padding};
	border-radius: 0.25rem;

	&:focus {
		outline-color: ${({ theme }) => theme.colors.primary[800]};
	}
`;

export const FormSubmitButtonWrapper = styled.div``;

export const FormSubmitButton = styled.button`
	width: 100%;
	padding: 0.5rem 0;
	background-color: ${({ theme }) => theme.colors.primary[600]};
	border: 2px solid ${({ theme }) => theme.colors.primary[600]};
	border-radius: 0.25rem;
	color: ${({ theme }) => theme.colors.white};
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

export const FormErrorMessage = styled.span`
	font-size: 0.8rem;
	color: ${({ theme }) => theme.colors.red[400]};
`;

export const Underlay = styled.div`
	position: absolute;
	right: 5%;
	bottom: 10%;

	& > img {
		width: 280px;
		height: auto;
	}
`;

import styled from '@emotion/styled';
import * as S from '@/pages/Onboarding/styled';

export const Container = styled.form`
	padding-top: 0.5em;

	& > div {
		margin-bottom: 4em;
	}
`;

export const Title = styled.h3`
	padding-bottom: 1em;
	font-size: 1.5rem;
	font-weight: ${({ theme }) => theme.fontWeight.semiBold};
`;

export const Wrapper = styled.div`
	padding: 2.5em;
	border: 1.5px solid ${({ theme }) => theme.colors.grey[300]};
	border-radius: 1em;
`;

export const MemberInfoWrapper = styled.fieldset`
	display: flex;
	flex-direction: column;
	gap: 2em;
`;

export const OnBoardingInfoWrapper = styled.fieldset`
	display: flex;
	flex-direction: column;
	gap: 2em;
`;

export const FormGroup = styled.div`
	display: flex;
`;

export const FormMemberInputGroup = styled(FormGroup)`
	flex-direction: column;
`;

export const FormOnBoardingInputGroup = styled(FormGroup)`
	justify-content: space-between;

	& > div:nth-of-type(1) {
		display: flex;
		flex-direction: column;
	}

	& > div:nth-of-type(2) {
		display: flex;
		align-items: center;

		& > button {
			padding: 0.5em 1em;
			border: 1.5px solid ${({ theme }) => theme.colors.grey[300]};
			border-radius: 0.5em;
			background: none;
			font-size: 1.2rem;
			cursor: pointer;
		}
	}
`;

export const SelectedWrapper = styled.div`
	display: flex;
	gap: 0.3em;
`;

export const SelectedItem = S.SelectedItem;

export const FormLabel = styled.label`
	font-size: 1.2rem;
	margin-bottom: 1em;
`;

export const FormRequiredLabel = styled(FormLabel)`
	&:before {
		content: '* ';
		color: ${({ theme }) => theme.colors.red[400]};
	}
`;

export const FormOptionalLabel = styled(FormLabel)`
	&:after {
		content: ' (optional)';
		font-size: 0.9rem;
		color: ${({ theme }) => theme.colors.grey[400]};
	}
`;

export const FormSelectLimitLabel = styled(FormLabel)`
	&:after {
		content: ' (3개까지 선택 가능)';
		font-size: 0.9rem;
		color: ${({ theme }) => theme.colors.grey[400]};
	}
`;

export const FormInput = styled.input``;

export const ProfileEditWrapper = styled.button`
	position: relative;
	width: 120px;
	height: 120px;
	border: none;
	background: none;
	cursor: pointer;

	& > span {
		position: absolute;
		right: -1em;
		bottom: -1em;
		padding: 0.5em;
		border-radius: 50%;
		background-color: ${({ theme }) => theme.colors.white};

		& > img {
			padding: 0.5em;
			border-radius: 50%;
			background-color: ${({ theme }) => theme.colors.primary[400]};
		}
	}
`;

export const InformationDesc = styled.span`
	font-size: 1.2rem;
	color: ${({ theme }) => theme.colors.grey[400]};
`;

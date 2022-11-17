import styled from '@emotion/styled';
import * as S from '../Signin/styled';

export const Container = S.Container;

export const FormContainer = styled.form`
	padding: 2em;
	border-radius: 1em;
	background-color: ${({ theme }) => theme.colors.white};
`;

export const DescriptionWrapper = styled.div`
	margin-bottom: 2em;
	line-height: 1.3rem;
	text-align: center;

	& > h2 {
		margin-bottom: 1em;
		font-size: 1.2rem;
		font-weight: ${({ theme }) => theme.fontWeight.strongBold};
	}

	& > p {
		font-size: 0.9rem;
		font-weight: ${({ theme }) => theme.fontWeight.medium};
	}
`;

export const InputContainer = styled.div`
	margin-bottom: 2em;
`;

export const InputTitle = styled.h3`
	margin-bottom: 0.7em;
	font-weight: ${({ theme }) => theme.fontWeight.semiBold};
`;

export const SelectItemWrapper = styled.div`
	display: flex;
	gap: 0.25em;
	padding: 0.5em;
	border: 1px solid ${({ theme }) => theme.colors.grey[400]};
	border-radius: 0.25em;
	cursor: pointer;
`;

export const SelectedItem = styled.span`
	padding: 0.5em 0.5em;
	border-radius: 0.25em;
	color: ${({ theme }) => theme.colors.white};
	background-color: ${({ theme }) => theme.colors.primary[600]};
`;

export const SelectItemPlaceholder = styled.span`
	padding: 0.5em;
	color: ${({ theme }) => theme.colors.grey[400]};
`;

export const ButtonWrapper = styled.div`
	display: flex;
	gap: 0.5em;
	margin-top: 4em;
`;

type ButtonStyledProps = {
	padding: string;
	buttonType: 'normal' | 'primary';
};

export const Button = styled.button<ButtonStyledProps>`
	flex: 1;
	padding: ${({ padding }) => padding};
	border: 1px solid ${({ theme }) => theme.colors.primary[600]};
	border-radius: 2em;
	background-color: ${({ buttonType, theme }) =>
		buttonType === 'primary' ? theme.colors.primary[600] : theme.colors.white};
	color: ${({ buttonType, theme }) => (buttonType === 'primary' ? theme.colors.white : theme.colors.grey[500])};
	cursor: pointer;
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

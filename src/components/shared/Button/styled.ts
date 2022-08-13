import styled from '@emotion/styled';
import { StyledButtonProps } from './type';

export const Container = styled.div<StyledButtonProps>`
	border: 1px solid
		${({ buttonType, theme }) => (buttonType === 'primary' ? theme.colors.blue[700] : theme.colors.blue[700])};
	border-radius: 20px;
	background-color: ${({ buttonType, theme }) =>
		buttonType === 'primary' ? theme.colors.blue[700] : theme.colors.white};

	& > button {
		color: ${({ buttonType, theme }) => (buttonType === 'primary' ? theme.colors.white : theme.colors.blue[700])};
		font-size: ${({ fontSize }) => fontSize};
		font-weight: ${({ buttonType, theme }) =>
			buttonType === 'primary' ? theme.fontWeight.bold : theme.fontWeight.regular};
	}

	&:hover {
		background-color: ${({ buttonType, theme }) =>
			buttonType === 'primary' ? theme.colors.blue[700] : theme.colors.blue[700]};
		opacity: 0.8;

		& > button {
			color: ${({ buttonType, theme }) => (buttonType === 'primary' ? theme.colors.white : theme.colors.white)};
		}
	}
`;

export const Button = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	border: none;
	background: none;
`;
